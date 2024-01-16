import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      title,
      slug,
      description,
      image,
      sku,
      barcode,
      productPrice,
      salePrice,
      categoryId,
      farmerId,
      tags,
      isActive,
    } = await request.json();
    const newCategory = {
      title,
      slug,
      description,
      image,
      sku,
      barcode,
      productPrice,
      salePrice,
      categoryId,
      farmerId,
      tags,
      isActive,
    };
    console.log(newCategory);
    return NextResponse.json(newCategory);
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to create product",
      },
      { status: 500 }
    );
  }
}
