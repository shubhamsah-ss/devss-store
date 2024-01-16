import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      name,
      phone,
      email,
      address,
      contactPerson,
      contactPersonPhone,
      terms,
      notes,
      code,
      image,
      isActive,
    } = await request.json();
    const newFarmer = await db.farmers.create({
      data: {
        name,
        phone,
        email,
        address,
        contactPerson,
        contactPersonPhone,
        terms,
        notes,
        code,
        image,
        isActive,
      },
    });
    console.log(newFarmer);
    return NextResponse.json(newFarmer);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to create Farmer",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
