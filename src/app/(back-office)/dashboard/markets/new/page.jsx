"use client";

import FormHeader from "@/components/back-office/FormHeader";
import {
  SelectInput,
  TextArea,
  TextInput,
  Toggler,
} from "@/components/formInputs/CustomInputs";
import ImgUploader from "@/components/formInputs/ImgUploader";
import SubmitBtn from "@/components/formInputs/SubmitBtn";
import { makePostRequest } from "@/lib/apiRequest";
import { generateSlug } from "@/lib/generateSlug";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const NewMarket = () => {
  const [file, setFile] = useState([]);
  const [loading, setLoading] = useState(false);

  const categories = [];

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    defaultValues: {
      isActive: true,
    },
  });

  async function submitHandler(data) {
    const slug = generateSlug(data.title);
    data.slug = slug;

    data.image = file;
    makePostRequest(setLoading, "api/markets", data, "Market", reset);
    setFile([]);
  }

  return (
    <div className="space-y-10">
      <FormHeader headerTitle={"New Market"} />
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
            label={"Market Title"}
            name={"title"}
            type={"text"}
            register={register}
            required={true}
            error={errors}
            placeholder={"Type the market title"}
            className="w-full"
          />

          <SelectInput
            label={"Select Category"}
            name={"categoryId"}
            register={register}
            required={true}
            error={errors}
            options={categories}
            className="w-full"
          />

          <TextArea
            label={"Market Description"}
            name={"description"}
            register={register}
            error={errors}
            placeholder="Type market description"
            rows="5"
          />

          <Toggler
            name={"isActive"}
            register={register}
            className="flex gap-3"
            heading="Market Status"
            toggleLabels={["Active", "Inactive"]}
            watch={watch}
          />
        </div>

        <ImgUploader
          label="Market Logo"
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
                Create Market
              </div>
            }
            loadingTitle={"Creating Market! Please wait..."}
          />
        </div>
      </form>
    </div>
  );
};

export default NewMarket;
