import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, slug, description, image, isActive } = await request.json();
    const newMarket = { title, slug, description, image, isActive };
    console.log(newMarket);
    return NextResponse.json(newMarket);
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to create banner",
      },
      { status: 500 }
    );
  }
}
