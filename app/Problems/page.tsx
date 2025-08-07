"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { Problem } from "../api/problems/route";

export default function Problem() {
    const [problems, setProblems] = useState<Problem[]>([]);

    useEffect(() => {
        async function fetchProblems() {
            try {
                const response = await fetch("/api/problems", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                const data = await response.json();
                console.log("Fetched problems:", data);
                setProblems(data.problems);
            } catch (error) {
                console.error("Failed to fetch problems:", error);
            }
        }

        fetchProblems();
    }, []);

    return (
        <div>
            <main className = "bg-stone-200 min-h-screen">
                <Navbar />
                <h1 className="text-2xl font-bold mb-6">Submitted Problems</h1>
                <ul className="space-y-4">
                    {problems.map((problem, index) => (
                        <li key={index} className="border p-4 rounded bg-white">
                            <p><strong>Title:</strong> {problem.title}</p>
                            <p><strong>Link:</strong> <a href={problem.link} className="text-blue-500 underline">{problem.link}</a></p>
                            <p><strong>Topics:</strong> {problem.topics.join(", ")}</p>
                            <p><strong>Difficulty:</strong> {problem.difficulty}</p>
                            <p><strong>Date:</strong> {problem.dateCompleted}</p>
                        </li>
                    ))}
                </ul>
            </main>
            <Footer />
        </div>
        
    )
}