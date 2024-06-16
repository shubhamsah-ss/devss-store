"use client";

import FormHeader from "@/components/back-office/FormHeader";
import {
  AddArrayItem,
  SelectInput,
  TextArea,
  TextInput,
  Toggler,
} from "@/components/formInputs/CustomInputs";
import ImgUploader from "@/components/formInputs/ImgUploader";
import SubmitBtn from "@/components/formInputs/SubmitBtn";
import { makePostRequest } from "@/lib/apiRequest";
import { generateSlug } from "@/lib/generateSlug";
import { generateUserCode } from "@/lib/generateUserCode";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

class Farmer {
  constructor(id) {
    this.id = id;
    this.title = `Farmer ${this.id}`;
  }
}

class Category {
  constructor(id) {
    this.id = id;
    this.title = `Category ${this.id}`;
  }
}

const NewProduct = () => {
  const [file, setFile] = useState([]);
  const [loading, setLoading] = useState(false);

  const [tags, setTags] = useState([]);

  const category = [];
  const farmer = [];

  for (let i = 0; i < 5; i++) {
    const obj2 = new Category(i + 1);
    const obj3 = new Farmer(i + 1);

    category.push(obj2);
    farmer.push(obj3);
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
      markets: [],
      farmer: [],
      category: [],
      isWholesale: false,
    },
  });

  async function submitHandler(data) {
    const slug = generateSlug(data.title);
    const productCode = generateUserCode("DEVSS", data.title);
    data.slug = slug;
    data.tags = tags;
    data.qty = 1;
    data.productCode = productCode;

    if (file) {
      data.image = file;
      console.log(data);
      makePostRequest(setLoading, "api/products", data, "Product", reset);
      setFile([]);
      setTags([]);
    } else toast.error("No image is selected");
  }

  return (
    <div className="space-y-10">
      <FormHeader headerTitle={"New Product"} />
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="w-full max-w-6xl p-5 sm:p-6 md:p-8
        rounded-xl shadow mx-auto 
        border border-slate-200 dark:border-slate-700
        bg-slate-100 dark:bg-slate-800
        "
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <Toggler
            name={"isActive"}
            register={register}
            className="sm:col-span-2 flex flex-col items-end"
            heading="Publish Your Product"
            toggleLabels={["Active", "Draft"]}
            watch={watch}
          />

          <TextInput
            label={"Product Title/Name"}
            name={"title"}
            type={"text"}
            register={register}
            required={true}
            error={errors}
            placeholder={"Type the product title"}
            // className="w-full"
          />

          <TextInput
            label={"Product SKU"}
            name={"sku"}
            type={"text"}
            register={register}
            required={true}
            error={errors}
            placeholder={"Type the product sku"}
            className="w-full"
          />

          <TextInput
            label={"Product Barcode"}
            name={"barcode"}
            type={"text"}
            register={register}
            required={true}
            error={errors}
            placeholder={"Type the product barcode"}
            className="w-full"
          />

          <TextInput
            label={"Product Price (Before discount)"}
            name={"productPrice"}
            type={"number"}
            register={register}
            required={true}
            error={errors}
            placeholder={"Type the product price"}
            className="w-full"
          />

          <TextInput
            label={"Product Sale Price (Discounted)"}
            name={"salePrice"}
            type={"number"}
            register={register}
            required={true}
            error={errors}
            placeholder={"Type the product price"}
            className="w-full"
          />

          <TextInput
            label={"Product Stock"}
            name={"productStock"}
            type={"number"}
            register={register}
            required={true}
            error={errors}
            placeholder={"Type the product stock"}
            className="w-full"
          />

          <TextInput
            label={"Unit of measurement (eg Kilograms)"}
            name={"unit"}
            type={"text"}
            register={register}
            required={true}
            error={errors}
            placeholder={"Type the measurement unit"}
            className="w-full"
          />

          <SelectInput
            label={"Select Farmer"}
            name={"farmerId"}
            register={register}
            required={true}
            error={errors}
            options={farmer}
            className="w-full"
          />

          <SelectInput
            label={"Select Category"}
            name={"categoryId"}
            register={register}
            required={true}
            error={errors}
            options={category}
            className="w-full"
          />

          <Toggler
            name={"isWholesale"}
            register={register}
            className="sm:col-span-2 sm:w-3/5 flex items-center justify-between"
            heading="Support Wholesale Selling"
            toggleLabels={["Supported", "Not Supported"]}
            watch={watch}
          />

          {watch("isWholesale") && (
            <>
              <TextInput
                label={"Wholesale Price"}
                name={"wholesalePrice"}
                type={"number"}
                register={register}
                required={true}
                error={errors}
                placeholder={"Type the wholesale price"}
                className="w-full"
              />

              <TextInput
                label={"Minimum wholesale quantity"}
                name={"wholesaleQty"}
                type={"number"}
                register={register}
                required={true}
                error={errors}
                placeholder={"Type the wholesale quantity"}
                className="w-full"
              />
            </>
          )}

          <AddArrayItem
            name={"tags"}
            items={tags}
            setItems={setTags}
            addTitle={"Tags"}
            placeholderTitle={"Create Tags..."}
          />

          <TextArea
            label={"Product Description"}
            name={"description"}
            register={register}
            required={true}
            error={errors}
            placeholder="Type the product description"
            rows="5"
          />
        </div>

        <ImgUploader
          label="Product Image"
          name={"image"}
          file={file}
          setFile={setFile}
          multiple={true}
        />

        <div className="w-full sm:w-1/2 mx-auto mt-5">
          <SubmitBtn
            isLoading={loading}
            title={
              <div className="inline-flex items-center">
                <Plus />
                Create Product
              </div>
            }
            loadingTitle={"Creating Product! Please wait..."}
          />
        </div>
      </form>
    </div>
  );
};

export default NewProduct;
