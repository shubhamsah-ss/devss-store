"use client";

import { Plus, X } from "lucide-react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const TextInput = ({
  label,
  name,
  className = "sm:col-span-2 relative",
  type,
  error,
  register,
  required = false,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="capitalize text-md font-medium leading-6
      dark:text-slate-400 mb-2"
      >
        {label}
      </label>
      {type === "password" && (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className={`absolute right-0 ${
            error[name] ? "bottom-9" : "bottom-3"
          } px-3 text-gray-500 text-xs font-medium`}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      )}
      <input
        type={showPassword ? "text" : type}
        name={name}
        id={name}
        {...register(name, {
          required: { value: required, message: `${label} field is required` },
        })}
        className={` w-full rounded-md py-2 border-0
        shadow-sm ring-1 ring-inset ${
          error[name] ? "ring-red-600" : " ring-slate-300 dark:ring-slate-500"
        }
        placeholder:text-gray-500
        focus:ring-2 focus:ring-yellow-600 dark:focus:ring-green-600
    dark:bg-slate-700
    `}
        {...rest}
      />
      {error[name] && (
        <span className="text-sm text-red-600">{error[name].message}</span>
      )}
    </div>
  );
};

export const TextArea = ({
  label,
  name,
  className = "sm:col-span-2",
  error,
  register,
  required = false,
  ...rest
}) => {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="capitalize  text-md font-medium leading-6
          dark:text-slate-400 mb-2"
      >
        {label}
      </label>
      <textarea
        name={name}
        id={name}
        {...register(name, {
          required: { value: required, message: `${label} field is required` },
        })}
        className={` w-full rounded-md py-2 border-0
    shadow-sm ring-1 ring-inset ${
      error[name] ? "ring-red-600" : " ring-slate-300 dark:ring-slate-500"
    }
    placeholder:text-gray-500
    focus:ring-2 focus:ring-yellow-600 dark:focus:ring-green-600
    dark:bg-slate-700
    `}
        {...rest}
      />
      {error[name] && (
        <span className="text-sm text-red-600">{error[name].message}</span>
      )}
    </div>
  );
};

export const SelectInput = ({
  label,
  name,
  className = "sm:col-span-2",
  options = [],
  register,
  error,
  required = false,
  multiple = false,
  ...rest
}) => {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="capitalize  text-md font-medium leading-6
      dark:text-slate-400 mb-2"
      >
        {label}
      </label>

      <div className="mt-2">
        <select
          id={name}
          name={name}
          multiple={multiple}
          className={` w-full rounded-md py-2 border-0
    shadow-sm ring-1 ring-inset ${
      error[name] ? "ring-red-600" : " ring-slate-300 dark:ring-slate-500"
    }
    placeholder:text-gray-500
    focus:ring-2 focus:ring-yellow-600 dark:focus:ring-green-600
    dark:bg-slate-700
    `}
          {...register(name, {
            required: {
              value: required,
              message: `${label} field is required`,
            },
          })}
          {...rest}
        >
          {options.map((option, i) => (
            <option key={i} value={option.id}>
              {option.title}
            </option>
          ))}
        </select>
        {error[name] && (
          <span className="text-sm text-red-600">{error[name].message}</span>
        )}
      </div>
    </div>
  );
};

export const AddArrayItem = ({
  placeholderTitle,
  addTitle,
  items,
  setItems,
  name,
  className = "sm:col-span-2",
}) => {
  const [item, setItem] = useState("");
  const [showInput, setShowInput] = useState(false);

  function add() {
    if (item.trim().length > 0) {
      setItems([...items, item]);
      setItem("");
    }
  }

  function remove(i) {
    const arr = [...items];
    arr.splice(i, 1);
    setItems(arr);
  }
  return (
    <div className={className}>
      {showInput ? (
        <div className="flex items-center">
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-yellow-600 dark:text-green-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 21 21"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id={name}
              name={name}
              value={item}
              onChange={(e) => setItem(e.target.value)}
              className=" w-full ps-10 p-2.5 rounded-md border-0 py-2
                    shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-500
                    placeholder:text-gray-500
                    focus:ring-2 focus:ring-yellow-600 dark:focus:ring-green-600
                    dark:bg-slate-700"
              placeholder={placeholderTitle}
            />
          </div>
          <button
            onClick={add}
            type="button"
            className="inline-flex items-center shrink-0 py-2.5 px-3 ms-2 text-sm font-medium 
                  rounded-lg
                text-white text-center
                bg-yellow-600 dark:bg-green-600
                hover:bg-yellow-700 dark:hover:bg-green-700"
          >
            <Plus className="w-4 h-4 me-1" />
            Add
          </button>
          <button
            type="button"
            className="p-1 bg-red-600 rounded-full text-white ms-1
                hover:bg-red-700 flex items-center justify-center shrink-0"
            onClick={() => setShowInput(false)}
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <button
          onClick={() => setShowInput(true)}
          type="button"
          className="flex items-center space-x-1 capitalize text-md font-medium leading-6
            dark:text-slate-400 hover:text-slate-500 dark:hover:text-slate-500"
        >
          <Plus />
          <span>Add {addTitle}</span>
        </button>
      )}

      {items.length > 0 && (
        <div className="flex flex-wrap gap-4 mt-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex space-x-1 items-center
                  bg-slate-200 dark:bg-slate-700 py-1 px-3 rounded-lg relative dark:text-slate-400"
            >
              <p>{item}</p>
              <X
                onClick={() => remove(i)}
                className="w-3 h-3 absolute -top-1 -right-1 rounded-full bg-red-400 text-white hover:bg-red-500 cursor-pointer"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const Toggler = ({
  register,
  heading,
  name,
  className = "sm:col-span-2",
  toggleLabels, // array[trueLabel, falseLabel]
  watch,
  ...rest
}) => {
  const status = watch ? watch(name) : null;

  return (
    <div className={className}>
      <div className="">
        <h2
          className="capitalize  text-md font-medium leading-6
        dark:text-slate-400"
        >
          {heading}
          {toggleLabels && (
            <span className="ms-1 text-sm font-medium text-slate-500">
              ({status ? toggleLabels[0] : toggleLabels[1]})
            </span>
          )}
        </h2>
      </div>
      <div className="">
        <label className="relative inline-flex flex-col cursor-pointer">
          <input
            id={name}
            name={name}
            type="checkbox"
            className="sr-only peer"
            {...register(name)}
            {...rest}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-600 dark:peer-checked:bg-green-600"></div>
        </label>
      </div>
    </div>
  );
};

export const TextEditor = ({
  className = "sm:col-span-2",
  label,
  placeholder,
  name,
  value,
  onChange,
  ...rest
}) => {
  const modules = {
    toolbar: [
      [{ size: ["small", false, "large", "huge"] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ align: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ color: [] }, { background: [] }],
      ["link", "image"],
      [{ "code-": true }],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "background",
    "color",
    "font",
    "code",
    "size",
    "script",
    "bold",
    "italic",
    "underline",
    "align",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "indent",
    "image",
    "formula",
    "code-",
    "clean",
  ];

  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="capitalize  text-md font-medium leading-6
      dark:text-slate-400 mb-2"
      >
        {label}
      </label>

      <ReactQuill
        id={name}
        name={name}
        theme="snow"
        placeholder={placeholder}
        modules={modules}
        formats={formats}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};
