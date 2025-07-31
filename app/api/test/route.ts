import { connectDB } from "@/lib/mongoose";
import Problem from "@/models/Problem";

const dummyProblem = {
    title: "Two Sum",
    link: "https://leetcode.com/problems/two-sum/description/",
    topics: ["Array", "HashMap"],
    difficulty: "Easy",
    dateCompleted: new Date(),

}

export async function POST(request: Request) {
    await connectDB();
    await Problem.create(dummyProblem);
    return new Response(JSON.stringify(dummyProblem), {status:200})
}