import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, link, image, isActive } = await request.json();

    console.log("Received data:", { title, link, image, isActive });

    const newBanner = await db.banners.create({
      data: { title, link, image, isActive },
    });

    console.log("New banner:", newBanner);
    return NextResponse.json(newBanner);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Failed to create banner",
        error: error.message,
      },
      { status: 500 }
    );
  }
}


export async function GET(request) {
  try {

    const banners = await db.banners.findMany()

    return NextResponse.json(banners);
    
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to fetch banner",
        error: error.message,
      },
      { status: 500 }
    );
  }
}