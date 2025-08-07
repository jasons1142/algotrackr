import { NextRequest, NextResponse } from "next/server";

export type Problem = {
  title: string;
  link: string;
  topics: string[];
  difficulty: string;
  dateCompleted: string;
};

let problems: Problem[] = []

export async function POST(req: NextRequest) {
  
  try {
    const body = await req.json();

    const { title, link, topics, difficulty, dateCompleted } = body;

    problems.push({ title, link, topics, difficulty, dateCompleted })

    // You can log to verify what’s being received
    console.log("New problem submitted:", body);

    // You can later insert this into a DB — for now just simulate success
    return NextResponse.json({ message: "Problem submitted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error submitting problem:", error);
    return NextResponse.json({ error: "Failed to submit problem" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ problems });
}