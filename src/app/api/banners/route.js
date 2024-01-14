import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { title, link, image, isActive } = await request.json()
        const newBanner = { title, link, image, isActive }
        console.log(newBanner)
        return NextResponse.json(newBanner);
    } catch (error) {
        return NextResponse.json({
            error: "Failed to create banner",
        }, { status: 500 })
    }
}