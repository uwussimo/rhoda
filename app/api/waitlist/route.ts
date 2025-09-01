import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Track signup in PostHog
    if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      const PostHog = (await import("posthog-js")).default;
      PostHog.capture("waitlist_signup", { email });
    }

    return NextResponse.json(
      { message: "Successfully joined waitlist" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Waitlist error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
