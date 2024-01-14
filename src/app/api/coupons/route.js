import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, expiryDate, couponCode, isActive } = await request.json();
    const newCoupon = { title, expiryDate, couponCode, isActive };
    console.log(newCoupon);
    return NextResponse.json(newCoupon);
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to create coupon",
      },
      { status: 500 }
    );
  }
}
