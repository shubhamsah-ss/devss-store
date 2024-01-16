"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Heading from "../back-office/Heading";
import { TextInput } from "./CustomInputs";
import SubmitBtn from "./SubmitBtn";
import Link from "next/link";
import toast from "react-hot-toast";

export default function RegisterForm({ formHeading, role }) {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm();

  async function submitHandler(data) {
    try {
      console.log(data);
      setLoading(true);
      const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL;

      const response = await fetch(`${baseUrl}/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (response.ok) {
        console.log("(From client) New user:", responseData);
        setLoading(false);
        toast.success("User created successfully");
        reset();
        // router.push("/login")
      } else {
        setLoading(false);
        if (response.status === 409) {
          setError("email", {
            type: "manual",
            message: "User with this email already exists",
          });
          toast.error("User with this email already exists");
        } else {
          console.log("Server Error:", responseData.error);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Server error");
    }
  }

  return (
    <div className="space-y-10 w-full">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="p-5 sm:p-6 md:p-8
        rounded-xl shadow mx-auto 
        border border-slate-200 dark:border-slate-700
        bg-slate-100 dark:bg-slate-800
        "
      >
        <div className="mb-4 text-center capitalize">
          <Heading title={formHeading} />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label={""}
            name={"role"}
            type={"hidden"}
            register={register}
            required={true}
            error={errors}
            defaultValue={role}
            placeholder={"Type the role"}
            readOnly={true}
          />

          <TextInput
            label={"Name"}
            name={"name"}
            type={"text"}
            register={register}
            required={true}
            error={errors}
            placeholder={"Type the name"}
          />

          <TextInput
            label={"Email"}
            name={"email"}
            type={"email"}
            register={register}
            required={true}
            error={errors}
            placeholder={"Type the email"}
          />

          <TextInput
            label={"Password"}
            name={"password"}
            type={"password"}
            register={register}
            required={true}
            error={errors}
            placeholder={"Type the password"}
          />

          <TextInput
            label={"Confirm Password"}
            name={"confirmPassword"}
            type={"password"}
            register={register}
            required={true}
            error={errors}
            placeholder={"Repeat password"}
          />
        </div>

        <div className="w-full sm:w-1/2 mx-auto">
          <SubmitBtn
            isLoading={loading}
            title={<div className="inline-flex items-center">Register</div>}
            loadingTitle={"Registering User! Please wait..."}
          />
        </div>
        <p className="text-sm mt-6">
          Already have an account?{" "}
          <Link
            className="text-yellow-600 hover:underline text-base dark:text-green-600"
            href={"#"}
          >
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
}
