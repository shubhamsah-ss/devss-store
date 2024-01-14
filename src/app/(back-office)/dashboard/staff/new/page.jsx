"use client";

import FormHeader from "@/components/back-office/FormHeader";
import {
  TextArea,
  TextInput,
  Toggler,
} from "@/components/formInputs/CustomInputs";
import SubmitBtn from "@/components/formInputs/SubmitBtn";
import { makePostRequest } from "@/lib/apiRequest";
import { generatUserCode } from "@/lib/generateUserCode";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const NewStaff = () => {
  const [loading, setLoading] = useState(false);
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
    const code = generatUserCode("DEVSS", data.name);
    data.code = code;

    makePostRequest(setLoading, "api/staff", data, "Staff", reset);
  }

  return (
    <div className="space-y-10">
      <FormHeader headerTitle={"New Staff"} />
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
          heading="Staff Status"
          toggleLabels={["Active", "Inactive"]}
          watch={watch}
        />

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label={"Staff's Full Name"}
            name={"name"}
            type={"text"}
            register={register}
            error={errors}
            required={true}
            placeholder={"Type staff's full name"}
          />

          <TextInput
            label={"Password"}
            name={"password"}
            type={"password"}
            register={register}
            error={errors}
            required={true}
            placeholder={"Type password"}
            className="w-full"
          />

          <TextInput
            label={"Staff's Email Address"}
            name={"email"}
            type={"email"}
            register={register}
            error={errors}
            required={true}
            placeholder={"Type staff's email"}
            className="w-full"
          />

          <TextInput
            label={"Staff's Phone"}
            name={"phone"}
            type={"tel"}
            register={register}
            error={errors}
            required={true}
            placeholder={"Type staff's phone"}
            className="w-full"
          />

          <TextInput
            label={"Staff's Physical Address"}
            name={"address"}
            type={"text"}
            register={register}
            error={errors}
            required={true}
            placeholder={"Type staff's address"}
            className="w-full"
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

        <div className="w-full sm:w-1/2 mx-auto">
          <SubmitBtn
            isLoading={loading}
            title={
              <div className="inline-flex items-center">
                <Plus />
                Create Staff
              </div>
            }
            loadingTitle={"Creating Staff! Please wait..."}
          />
        </div>
      </form>
    </div>
  );
};

export default NewStaff;
