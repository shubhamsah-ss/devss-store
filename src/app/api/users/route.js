import db from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request) {
  try {
    const { name, email, password, role } = await request.json();

    const existingUser = await db.users.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        {
          error: "User already exists",
        },
        { status: 409 }
      );
    }

    // ENCRYPTING PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await db.users.create({
        data: { name, email, password: hashedPassword, role },
    })

    console.log("New user: ", newUser)

    return NextResponse.json(newUser, { status: 201 })
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to create user",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
    try {
  
      const users = await db.users.findMany({
        orderBy: {
            createdAt: "desc",
        }
      })
  
      return NextResponse.json(users);
      
    } catch (error) {
      return NextResponse.json(
        {
          message: "Failed to fetch user",
          error: error.message,
        },
        { status: 500 }
      );
    }
  }
