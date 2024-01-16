"use client";

import FormHeader from "@/components/back-office/FormHeader";
import {
  TextArea,
  TextInput,
  Toggler,
} from "@/components/formInputs/CustomInputs";
import ImgUploader from "@/components/formInputs/ImgUploader";
import SubmitBtn from "@/components/formInputs/SubmitBtn";
import { makePostRequest } from "@/lib/apiRequest";
import { generateUserCode } from "@/lib/generateUserCode";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

const NewFarmerForm = () => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState([]);

  const router = useRouter();

  function redirect() {
    router.push("/dashboard/farmers");
  }

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    defaultValues: {
      isActive: false,
    },
  });

  async function submitHandler(data) {
    const code = generateUserCode("DEVSS", data.name);
    data.code = code;
    data.image = file;

    makePostRequest(setLoading, "api/farmers", data, "Farmer", reset, redirect);
  }

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="w-full max-w-6xl p-5 sm:p-6 md:p-8
        rounded-xl shadow mx-auto 
        border border-slate-200 dark:border-slate-700
        bg-slate-100 dark:bg-slate-800
        "
    >
      <Toggler
        name={"isActive"}
        register={register}
        className="flex justify-end gap-3"
        heading="Farmer Status"
        toggleLabels={["Active", "Inactive"]}
        watch={watch}
      />
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          label={"Farmer's Full Name"}
          name={"name"}
          type={"text"}
          register={register}
          error={errors}
          required={true}
          placeholder={"Type farmer's full name"}
          className="w-full"
        />

        <TextInput
          label={"Farmer's Phone"}
          name={"phone"}
          type={"tel"}
          register={register}
          error={errors}
          required={true}
          placeholder={"Type farmer's phone"}
          className="w-full"
        />

        <TextInput
          label={"Farmer's Email Address"}
          name={"email"}
          type={"email"}
          register={register}
          error={errors}
          required={true}
          placeholder={"Type farmer's email"}
          className="w-full"
        />

        <TextInput
          label={"Farmer's Physical Address"}
          name={"address"}
          type={"text"}
          register={register}
          error={errors}
          required={true}
          placeholder={"Type farmer's address"}
          className="w-full"
        />

        <TextInput
          label={"Farmer's Contact Person"}
          name={"contactPerson"}
          type={"text"}
          register={register}
          error={errors}
          placeholder={"Type farmer's contact person"}
          className="w-full"
        />

        <TextInput
          label={"Farmer's Contact Person Phone"}
          name={"contactPersonPhone"}
          type={"tel"}
          register={register}
          error={errors}
          placeholder={"Type farmer's contact person's phone"}
          className="w-full"
        />

        <TextArea
          label={"Farmer's Payment Terms"}
          name={"terms"}
          register={register}
          error={errors}
          placeholder="Type farmer's payment terms"
          rows="3"
        />

        <TextArea
          label={"Notes"}
          name={"notes"}
          register={register}
          error={errors}
          placeholder="Type notes"
          rows="3"
        />
      </div>

      <ImgUploader
        label={"Profile Image"}
        file={file}
        setFile={setFile}
        name={"image"}
      />

      <div className="w-full sm:w-1/2 mx-auto">
        <SubmitBtn
          isLoading={loading}
          title={
            <div className="inline-flex items-center">
              <Plus />
              Create Farmer
            </div>
          }
          loadingTitle={"Creating Farmer! Please wait..."}
        />
      </div>
    </form>
  );
};

export default NewFarmerForm;
