import { NextResponse } from "next/server"

export async function POST(request) {
    try {
        const { title, description, slug, image, categoryId, content, isActive } = await request.json()
        const newTraining = { title, description, slug, image, categoryId, content, isActive }
        console.log(newTraining)
        return NextResponse.json(newTraining)
    } catch (error) {
        return NextResponse.json({
            error: "Failed to create training",
        }, { status: 500 })
    }
}