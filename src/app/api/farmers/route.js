import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {

  /**
   * {
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
        products,
        landSize,
        mainCrop,
        userId,
      },
   */

  try {
    const farmerDate = await request.json();
    const newFarmer = await db.farmerProfiles.create({
      data: {
        name: farmerDate.name,
        phone: farmerDate.phone,
        email: farmerDate.email,
        address: farmerDate.address,
        contactPerson: farmerDate.contactPerson,
        contactPersonPhone: farmerDate.contactPersonPhone,
        terms: farmerDate.terms,
        notes: farmerDate.notes,
        code: farmerDate.code,
        image: farmerDate.image,
        isActive: farmerDate.isActive,
        products: farmerDate.products,
        landSize: parseFloat(farmerDate.landSize) || 0,
        mainCrop: farmerDate.mainCrop,
        userId: farmerDate.userId,
      },
    });
    console.log(newFarmer);
    return NextResponse.json(newFarmer);
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      {
        message: "Failed to create Farmer",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
