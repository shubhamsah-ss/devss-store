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
import { Plus } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

class Market {
  constructor(id) {
    this.id = id;
    this.title = `Market ${this.id}`;
  }
}

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

  const markets = [];
  const category = [];
  const farmer = [];

  for (let i = 0; i < 5; i++) {
    const obj = new Market(i + 1);
    const obj2 = new Category(i + 1);
    const obj3 = new Farmer(i + 1);

    markets.push(obj);
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
    }
  });

  async function submitHandler(data) {
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.tags = tags;

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
          <TextInput
            label={"Product Title/Name"}
            name={"title"}
            type={"text"}
            register={register}
            required={true}
            error={errors}
            placeholder={"Type the product title"}
            className="w-full"
          />

          <Toggler
            name={"isActive"}
            register={register}
            className="flex flex-col justify-between items-end"
            heading="Publish Your Product"
            toggleLabels={["Active", "Draft"]}
            watch={watch}
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
            label={"Product Price (Before discout)"}
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

          <SelectInput
            label={"Select Farmer"}
            name={"farmer"}
            register={register}
            required={true}
            options={farmer}
            className="w-full"
          />

          <SelectInput
            label={"Select Category"}
            name={"category"}
            register={register}
            required={true}
            options={category}
            className="w-full"
          />

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
          id={"image"}
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
