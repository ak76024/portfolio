"use client";
import React, { useState } from "react";
import Image from "next/image";
import SideNav from "@/components/SideNav";
import Navbar from "@/components/Navbar";

const Page = () => {
    const classData = [
        {
            title: "Web Development",
            category: "Frontend",
            description: "Learn HTML, CSS, JavaScript, React and build real websites.",
            price: "₹1,000/Month",
            level: "Beginner–Intermediate",
            tag: "Frontend",
            image: "/webDevelopment.jpg",
        },
        {
            title: "App Development",
            category: "Mobile",
            description: "Develop Android apps using React Native and Flutter.",
            price: "₹1,200/Month",
            level: "Intermediate",
            tag: "Mobile",
            image: "/appDevelopment.jpg",
        },
        {
            title: "Graphic Design",
            category: "Design",
            description: "Master UI/UX, Figma, Photoshop & real-world design projects.",
            price: "₹3,000/Month",
            level: "Beginner–Advanced",
            tag: "Design",
            image: "/graphicDesign.jpg",
        },
        {
            title: "Node.js || PHP",
            category: "Backend",
            description: "Learn Node.js || PHP basics to Advance backend apps.",
            price: "₹2,999/Month",
            level: "Beginner",
            tag: "Backend",
            image: "/codingLag.jpg",
        },
        {
            title: "Computer Basics",
            category: "School",
            description: "Perfect for school students to master basic computer skills.",
            price: "₹600/Month",
            level: "Beginner",
            tag: "School",
            image: "/computerBasic.jpg",
        },
        {
            title: "School Course",
            category: "School",
            description: "Perfect for school basic computer skills.",
            price: "₹500/Month",
            level: "Beginner",
            tag: "School",
            image: "/school.jpg",
        },
    ];

    const categories = ["All", "Frontend", "Backend", "Design", "Mobile", "School"];

    const mainBox = "min-h-[80vh] rounded-2xl border border-[#363636] bg-[#1e1e1f]";

    const [activeTab, setActiveTab] = useState("All");

    const filteredData =
        activeTab === "All"
            ? classData
            : classData.filter((item) => item.tag === activeTab);
    return (
        <div className="min-h-screen sm:m-0 py-[10vh] sm:flex flex-col lg:flex-row lg:p-20 sm:items-start sm:gap-8 sm:justify-center">
            <SideNav />
            <div className={mainBox + " sm:w-3/5 md:w-4/5 md:mx-auto p-8 relative lg:m-0 m-5 md:m-1"}>
                <div className="flex items-center mb-8 justify-between">
                    <div className="sm:w-1/3 w-full">
                        <p className="pageHeading !relative font-bold text-3xl">Our Classes</p>
                    </div>
                    <div className="w-2/3">
                        <Navbar page="classes" />
                    </div>
                </div>
                <div className="py-12 px-4 sm:px-10 bg-[#1e1e1f] min-h-screen text-white">
                    <h2 className="text-4xl font-bold text-center mb-8 text-[#fb0]">Our Classes</h2>

                    <div className="flex flex-wrap gap-3 justify-center mb-10">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveTab(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-semibold border ${activeTab === cat
                                    ? "bg-[#fb0] !text-black"
                                    : "border-[#444] hover:bg-[#2a2a2a]"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredData.map((cls, index) => (
                            <div
                                key={index}
                                className="bg-[#282829] p-6 rounded-xl border border-[#363636] shadow hover:shadow-xl transition hover:-translate-y-1 flex flex-col"
                            >
                                <Image
                                    src={cls.image}
                                    alt={cls.title}
                                    width={400}
                                    height={160}
                                    className="rounded-md mb-4 object-cover"
                                />

                                <h3 className="text-2xl font-bold text-[#fb0] mb-2">{cls.title}</h3>
                                <p className="text-[#aaa] mb-3">{cls.description}</p>
                                <p className="text-sm font-semibold text-white">
                                    <span className="text-[#fb0]">Level:</span> {cls.level}
                                </p>
                                <p className="text-sm font-semibold text-white mb-4">
                                    <span className="text-[#fb0]">Price:</span> {cls.price}
                                </p>
                                <a
                                    href="mailto:akashburnwal46@gmail.com"
                                    className="inline-block mt-auto px-4 py-2 bg-[#fb0] text-black font-bold rounded hover:bg-yellow-400 transition"
                                >
                                    Enroll / Contact
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;