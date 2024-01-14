import { NextResponse } from "next/server"

export async function POST(request) {
    try {
        const { title, description, slug, image, market, isActive } = await request.json()
        const newCategory = { title, description, slug, image, market, isActive }
        console.log(newCategory)
        return NextResponse.json(newCategory)
    } catch (error) {
        return NextResponse.json({
            error: "Failed to create category",
        }, { status: 500 })
    }
}