"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Add() {
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");
    const [topics, setTopics] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [dateCompleted, setDateCompleted] = useState("")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formattedTopics = topics.split(",").map(topic => topic.trim());
        const problemData = {
            title,
            link,
            topics: formattedTopics,
            difficulty,
            dateCompleted,
        };

        try {
            const response = await fetch("/api/problems", {
            method: "POST",
            headers: {
                    "Content-Type": "application/json",
            },
            body: JSON.stringify(problemData),
        });

        if (!response.ok) {
            throw new Error("Failed to submit problem");
        }

        // Optional: Handle success
        alert("Problem added successfully!");
    
        // Reset the form
        setTitle("");
        setLink("");
        setTopics("");
        setDifficulty("");
        setDateCompleted("");
    } catch (err) {
        console.error("Error:", err);
        alert("Submission failed. Try again.");
    }

    }


    return (
        <div>
            <main className = "bg-stone-200 min-h-screen">
                <Navbar />
                <form onSubmit = {handleSubmit} className = "flex flex-col text-black space-y-4 mt-10 items-center">

                    <div className = "flex flex-col items-center">
                        <label>Problem Name</label>
                        <input 
                            type = "text" 
                            name = "problemText" 
                            required 
                            className = "border border-black"
                            value = {title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    
                    <div className = "flex flex-col items-center">
                        <label>Problem Link</label>
                        <input 
                            type = "text" 
                            className="border border-black"
                            value = {link}
                            onChange={(e) => setLink(e.target.value)}
                        />
                    </div>

                    <div className = "flex flex-col items-center">
                        <label>Topics</label>
                        <input 
                            type = "text" 
                            className="border border-black"
                            value = {topics}
                            onChange={(e) => setTopics(e.target.value)}
                        />
                    </div>

                    <div className = "flex flex-col items-center">
                        <label>Problem Difficulty</label>
                        <select className = "border border-black" value = {difficulty} onChange = {(e) => setDifficulty(e.target.value)}>
                            <option value="">--Please choose an option--</option>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </div>

                    <div className = "flex flex-col items-center">
                        <label>Date Completed</label>
                        <input 
                            type = "date" 
                            className="border border-black"
                            value = {dateCompleted}
                            onChange = {(e) => setDateCompleted(e.target.value)}
                        />
                    </div>

                    <button type = "submit" className = "border border-black bg-gray-400 rounded-md">Submit</button>
                </form>
            </main>
            <Footer />
        </div>
    )
}
