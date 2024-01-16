import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, description, slug, image, isActive } = await request.json();

    const existingCategory = await db.categories.findUnique({
      where: { slug },
    });

    if (existingCategory)
      return NextResponse.json(
        {
          error: "Category already exist",
        },
        { status: 409 }
      );

    const newCategory = await db.categories.create({
      data: { title, description, slug, image, isActive },
    });
    console.log("New Category:", newCategory);
    return NextResponse.json(newCategory);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to create category",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const categories = await db.categories.findMany();

    return NextResponse.json(categories);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to fetch categories",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
