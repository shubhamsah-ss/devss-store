import db from "@/lib/db";
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
      tags,
      isActive,
      isWholesale,
      productCode,
      unit,
      wholesalePrice,
      wholesaleQty,
      productStock,
      qty,
      categoryId,
      farmerId,
    } = await request.json();

    const existingProduct = await db.products.findUnique({
      where: { slug: productData.slug },
    });

    if (existingProduct)
      return NextResponse.json(
        {
          error: "Product already exist",
        },
        { status: 409 }
      );
    const newProduct = await db.products.create({
      data: {
        title,
        slug,
        description,
        image,
        sku,
        barcode,
        productPrice,
        salePrice,
        tags,
        isActive,
        isWholesale,
        productCode,
        unit,
        wholesalePrice,
        wholesaleQty,
        productStock,
        qty,
        categoryId,
        userId: farmerId,
      },
    });
    console.log(newProduct);
    return NextResponse.json(newProduct);
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to create product",
      },
      { status: 500 }
    );
  }
}
