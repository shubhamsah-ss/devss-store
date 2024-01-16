import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, expiryDate, couponCode, isActive } = await request.json();

    const newCoupon = await db.coupons.create({
      data: { title, expiryDate, couponCode, isActive }
    });
    console.log(newCoupon);
    return NextResponse.json(newCoupon);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to create coupon",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {

    const coupons = await db.coupons.findMany()

    return NextResponse.json(coupons);
    
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to fetch coupon",
        error: error.message,
      },
      { status: 500 }
    );
  }
}