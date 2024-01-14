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
      isActive,
    } = await request.json();
    const newFarmer = {
      name,
      phone,
      email,
      address,
      contactPerson,
      contactPersonPhone,
      terms,
      notes,
      code,
      isActive,
    };
    console.log(newFarmer);
    return NextResponse.json(newFarmer);
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to create Farmer",
      },
      { status: 500 }
    );
  }
}
