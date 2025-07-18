import Link from "next/link";

export default function Navbar() {
    return (
        <nav className = "bg-gray-400 py-4">
            <div className = "flex flex-col items-center space-y-4 w-full">
                <h1 className = "text-2xl font-bold">AlgoTrackr</h1>
                <div className = "space-x-6">
                    <Link href = "/">Home</Link>
                    <Link href ="/Add">Add</Link>
                    <Link href = "/Problems">Problems</Link>
                </div>
            </div>
        </nav>
    )
}
