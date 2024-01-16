"use client";

import FormHeader from "@/components/back-office/FormHeader";
import { TextInput, Toggler } from "@/components/formInputs/CustomInputs";
import ImgUploader from "@/components/formInputs/ImgUploader";
import SubmitBtn from "@/components/formInputs/SubmitBtn";
import { makePostRequest } from "@/lib/apiRequest";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const NewCategory = () => {
  const [file, setFile] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter()

  function redirect() {
    router.push("/dashboard/banners")
  }
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    defaultValues: {
      isActive: true,
    }
  });

  async function submitHandler(data) {
    if (file) {
      data.image = file;
      makePostRequest(setLoading, "api/banners", data, "Banner", reset, redirect);
      setFile([]);
    } else toast.error("No image is selected");
  }

  return (
    <div className="space-y-10">
      <FormHeader headerTitle={"New Banner"} />
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="w-full max-w-6xl p-5 sm:p-6 md:p-8
        rounded-xl shadow mx-auto 
        border border-slate-200 dark:border-slate-700
        bg-slate-100 dark:bg-slate-800
        "
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label={"Banner Title"}
            name={"title"}
            type={"text"}
            register={register}
            required={true}
            error={errors}
            placeholder={"Type the banner title"}
          />

          <TextInput
            label={"Banner Link"}
            name={"link"}
            type={"url"}
            register={register}
            required={true}
            error={errors}
            placeholder={"Type the banner link"}
          />

          <Toggler
            name={"isActive"}
            className="flex gap-3"
            register={register}
            heading="Publish Your Banner"
            toggleLabels={["Active", "Draft"]}
            watch={watch}
          />
        </div>

        <ImgUploader
          label="Banner Image"
          name={"image"}
          file={file}
          setFile={setFile}
        />

        <div className="w-full sm:w-1/2 mx-auto">
          <SubmitBtn
            isLoading={loading}
            title={
              <div className="inline-flex items-center">
                <Plus />
                Create Banner
              </div>
            }
            loadingTitle={"Creating Banner! Please wait..."}
          />
        </div>
      </form>
    </div>
  );
};

export default NewCategory;
