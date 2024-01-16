"use client";

import FormHeader from "@/components/back-office/FormHeader";
import { TextInput, Toggler } from "@/components/formInputs/CustomInputs";
import SubmitBtn from "@/components/formInputs/SubmitBtn";
import { makePostRequest } from "@/lib/apiRequest";
import { generateCouponCode } from "@/lib/generateCouponCode";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

const NewCoupon = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter()

  function redirect() {
    router.push("/dashboard/coupons")
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
    const couponCode = generateCouponCode(data.title, data.expiryDate)
    data.couponCode = couponCode
    data.expiryDate = new Date(expiryDate).toISOString();
    makePostRequest(setLoading, "api/coupons", data, "Coupon", reset, redirect);
  }

 

  var today = new Date();
  var expiryDate = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();
  today = yyyy + '-' + mm + '-' + dd;
  expiryDate = (yyyy + 1) + '-' + mm + '-' + dd;

  return (
    <div className="space-y-10">
      <FormHeader headerTitle={"New Coupon"} />
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
            className="flex justify-end gap-3 mb-5"
            heading="Publish Your Coupon"
            toggleLabels={["Active", "Draft"]}
            watch={watch}
          />
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label={"Coupon Title"}
            name={"title"}
            type={"text"}
            register={register}
            error={errors}
            required={true}
            placeholder={"Type the category title"}
            className="w-full"
          />
          
          <TextInput
            label={"Coupon Expiry Date"}
            name={"expiryDate"}
            type={"date"}
            register={register}
            error={errors}
            required={true}
            placeholder={"Type the category title"}
            className="w-full"
            min={today}
            max={expiryDate}
          />
        </div>

        <div className="w-full sm:w-1/2 mx-auto">
          <SubmitBtn
            isLoading={loading}
            title={
              <div className="inline-flex items-center">
                <Plus />
                Create Coupon
              </div>
            }
            loadingTitle={"Creating Coupon! Please wait..."}
          />
        </div>
      </form>
    </div>
  );
};

export default NewCoupon;
