import { NextResponse } from "next/server"

export async function POST(request) {
    try {
        const { name, nin, dob, email, phone, address, notes, isActive } = await request.json()
        const newStaff = { name, nin, dob, email, phone, address, notes, isActive }
        console.log(newStaff)
        return NextResponse.json(newStaff)
    } catch (error) {
        return NextResponse.json({
            error: "Failed to create staff",
        }, { status: 500 })
    }
}