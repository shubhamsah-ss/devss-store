"use client";
import { toBase64 } from "@/lib/base64";
import { Edit2, Plus, Trash2, UploadCloud } from "lucide-react";
import Image from "next/image";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import toast from "react-hot-toast";

const ImgUploader = ({
  label,
  name,
  file,
  setFile,
  className,
  multiple = false,
}) => {
  const maxSize = 1024 * 1024;

  const onDrop = useCallback(
    async (acceptedFiles) => {
      try {
        const updatedFiles = [...file];

        if (multiple) {
          for (let i = 0; i < acceptedFiles.length; i++) {
            const file = acceptedFiles[i];

            if (file.size > maxSize) {
              toast.error(
                `File ${i + 1} size exceeds the maximum allowed size`
              );
              return false;
            }

            if (!file.type.startsWith("image")) {
              toast.error(`File ${i + 1} has an invalid file type`);
              return false;
            }

            const base64 = await toBase64(file);

            if (!base64) {
              toast.error(`Error converting file ${i + 1} to base64`);
              return false;
            }

            updatedFiles.push(base64);
          }

          setFile(updatedFiles);
          return true;
        } else {
          const file = acceptedFiles[0];

          if (file.size > maxSize) {
            toast.error(`File size exceeds the maximum allowed size`);
            return false;
          }

          if (!file.type.startsWith("image")) {
            toast.error(`File has an invalid file type`);
            return false;
          }

          const base64 = await toBase64(file);

          if (!base64) {
            toast.error(`Error converting file to base64`);
            return false;
          }

          updatedFiles[0] = base64;
          setFile(updatedFiles);
          return true;
        }
      } catch (error) {
        toast.error(error.message);
      }
    },
    [file, maxSize]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  const removeLastFile = () => {
    const updatedFiles = [...file];
    updatedFiles.pop();
    setFile(updatedFiles);
  };

  if (file.length > 0) {
    return (
      <div className="mt-5">
        <label
          className="capitalize block text-md font-medium leading-6
      dark:text-slate-400 mb-2"
        >
          {label}
        </label>

        <div className="flex justify-around md:justify-end gap-3">
          <button
            type="button"
            className="rounded-md py-2 px-1 md:px-3
            bg-red-400 text-white hover:bg-red-500 shadow-md
            flex items-center justify-center gap-2 text-xs md:text-sm text-nowrap"
            {...getRootProps()}
            onClick={removeLastFile}
          >
            <input id={name} name={name} {...getInputProps()} />
            <Trash2 />
            Remove Image
          </button>
          {multiple ? (
            <button
              type="button"
              className="py-2 px-1 md:px-3 rounded-md
            bg-teal-400 text-white hover:bg-teal-500 shadow-md
            flex items-center justify-center gap-2 text-xs md:text-sm text-nowrap"
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              <Plus />
              Add Image
            </button>
          ) : (
            <button
              type="button"
              className="py-2 px-1 md:px-3 rounded-md
            bg-teal-400 text-white hover:bg-teal-500 shadow-md
            flex items-center justify-center gap-2 text-xs md:text-sm text-nowrap"
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              <Edit2 />
              Change Image
            </button>
          )}
        </div>

        {file.length == 1 ? (
          <SingleImagePreview files={file} className={className} />
        ) : (
          <MultiImagePreview files={file} className={className} />
        )}
      </div>
    );
  }

  return (
    <div className="mt-5 w-full">
      <label
        className="capitalize block text-md font-medium leading-6
      dark:text-slate-400 mb-2"
      >
        {label}
      </label>
      <div
        className={`${
          className
            ? className
            : "block w-full rounded-md border-2 border-dashed p-2 shadow-sm border-gray-400 mx-auto text-gray-500 dark:bg-slate-700 cursor-pointer sm:max-w-xs sm:text-sm sm:leading-6"
        }`}
        {...getRootProps()}
      >
        <input name={name} id={name} {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the image here...</p>
        ) : (
          <div className="flex flex-col justify-center items-center gap-3">
            <UploadCloud />
            <p>Drag & drop an image here, or click to select one</p>
            <small className="text-yellow-600 dark:text-green-600">
              (maximum size: 1MB)
            </small>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImgUploader;

const SingleImagePreview = ({ files }) => {
  return (
    <div
      className={"block w-full rounded-md p-2 mx-auto h-full"}
    >
      {files.map((file, i) => (
        <Image
          key={i}
          src={file}
          alt=""
          width={100}
          height={100}
          className="object-contain w-52 sm:w-1/3 sm:h-1/3 sm:p-3 mx-auto aspect-square"
          style={{ borderRadius: "20px" }}
        />
      ))}
    </div>
  );
};

const MultiImagePreview = ({ files }) => {

  return (
    <div className={`w-full h-full grid ${files.length > 6 ? "grid-cols-6" : "grid-flow-col grid-auto-cols"} gap-4 sm:gap-0 mt-5`}>
        {files.map((file, i) => (
          <Image
            key={i}
            src={file}
            alt=""
            width={100}
            height={100}
            className="imgArr object-contain w-52 sm:w-5/6 sm:h-2/3 aspect-square"
            style={{ borderRadius: "10px" }}
          />
        ))}
    </div>
  );
};
