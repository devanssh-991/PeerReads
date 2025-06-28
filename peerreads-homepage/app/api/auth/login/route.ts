import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // Validate required fields
    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    // Mock authentication - in real app, check against database
    if (email === "demo@peerreads.com" && password === "password123") {
      return NextResponse.json(
        {
          message: "Login successful",
          user: {
            id: "demo-user-123",
            firstName: "Demo",
            lastName: "User",
            email: "demo@peerreads.com",
            location: "San Francisco, CA",
          },
        },
        { status: 200 },
      )
    }

    // For any other credentials, simulate successful login
    return NextResponse.json(
      {
        message: "Login successful",
        user: {
          id: Date.now().toString(),
          firstName: "John",
          lastName: "Doe",
          email: email.toLowerCase(),
          location: "Your City, State",
        },
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
