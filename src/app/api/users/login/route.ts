import { connect } from "@/app/db/dbConfig";

import { NextRequest, NextResponse } from "next/server";
import { User } from "@/models/userModel";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
  try {
    //recieve request and destruct
    debugger;
    const reqBody = await request.json();
    const { email, password } = reqBody;

    //check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 400 });
    }

    //check if password is valid
    debugger;
    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json(
        { message: "Invalid password" },
        { status: 400 }
      );
    }

    //create token data
    const tokenData = {
      id: user._id,
      email: user.email,
      password: user.password,
    };

    //create token
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
      message: "Login successful",
      success: true,
    });

    response.cookies.set("token", token, { httpOnly: true });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
