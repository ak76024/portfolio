import SideNav from "@/components/SideNav";
import Navbar from "@/components/Navbar";

const page = () => {
    const mainBox = "min-h-[80vh] rounded-2xl border border-[#363636] bg-[#1e1e1f] sm:w-3/5 md:w-4/5 md:mx-auto p-8 relative lg:m-0 m-5 md:m-1";

    return (
        <div className="mainPage min-h-screen sm:m-0 py-[10vh] sm:flex flex-col lg:flex-row lg:p-20 sm:items-start sm:gap-8 sm:justify-center">
            <SideNav />
            <div className={mainBox + " flex flex-col gap-5"}>
                <div className="flex items-center mb-10 justify-between">
                    <div className="sm:w-1/3 w-full">
                        <p className="pageHeading !relative font-bold text-3xl">Resume</p>
                    </div>
                    <div className="w-2/3">
                        <Navbar page="resume" />
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex gap-2 items-center">
                        <h1 className="text-xl font-bold">Akash Burnwal</h1>
                        <a href="/akash.docx" download className="bg-[#fb0] !text-black font-semibold px-4 py-2 rounded !duration-150 hover:scale-110 active:scale-90 transition-all text-sm">Download Resume</a>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="sideNavIcon rounded-xl shadow-[#00000098] shadow-lg bg-[#202022]">
                            <svg className="w-8 h-8"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="#fb0"
                                strokeWidth={1}
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <path d="M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023" />
                            </svg>
                        </div>
                        <p className="font-bold text-2xl">Education</p>
                    </div>
                    <div className="flex items-start gap-10">
                        <div className="shadowDot my-3 ml-5"></div>
                        <div className="flex gap-1 flex-col">
                            <p className="text-xl sm:text-2xl font-bold">St. Joseph High School</p>
                            <p className="text-sm sm:text-base !text-[#aaa]">📍 Asansol, West Bengal, India</p>
                            <p className="text-sm sm:text-base font-medium">10th & 12th Standard</p>
                            <p className="text-sm sm:text-base !text-[#fb0] font-semibold">Completed in 2025</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-10">
                        <div className="shadowDot my-3 ml-5"></div>
                        <div className="flex gap-1 flex-col">
                            <p className="text-xl sm:text-2xl font-bold">Asansol Engineering College</p>
                            <p className="text-sm sm:text-base !text-[#aaa]">📍 Asansol, West Bengal, India</p>
                            <p className="text-sm sm:text-base font-medium">BCA (Bachelor of Computer Applications.)</p>
                            <p className="text-sm sm:text-base font-semibold">Session: 2025 – Present</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-5">
                        <div className="sideNavIcon rounded-xl shadow-[#00000098] shadow-lg bg-[#202022]">
                            <svg className="w-8 h-8"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="#fb0"
                                strokeWidth={1}
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <path d="M4 5.78571C4 4.80909 4.78639 4 5.77778 4H18.2222C19.2136 4 20 4.80909 20 5.78571V15H4V5.78571ZM12 12c0-.5523.4477-1 1-1h2c.5523 0 1 .4477 1 1s-.4477 1-1 1h-2c-.5523 0-1-.4477-1-1ZM8.27586 6.31035c.38089-.39993 1.01387-.41537 1.4138-.03449l2.62504 2.5c.1981.18875.3103.45047.3103.72414 0 .27368-.1122.5354-.3103.7241l-2.62504 2.5c-.39993.3809-1.03291.3655-1.4138-.0344-.38088-.4-.36544-1.033.03449-1.4138L10.175 9.5 8.31035 7.72414c-.39993-.38089-.41537-1.01386-.03449-1.41379Z" />
                                <path d="M2 17v1c0 1.1046.89543 2 2 2h16c1.1046 0 2-.8954 2-2v-1H2Z" />
                            </svg>
                        </div>
                        <p className="font-bold text-2xl">Experience</p>
                    </div>
                    <div className="flex items-start gap-10">
                        <div className="shadowDot my-3 ml-5"></div>
                        <div className="flex gap-1 flex-col">
                            <p className="text-xl sm:text-2xl font-bold">Freelance Web & App Developer</p>
                            <p className="text-sm sm:text-base text-[#aaa]">📍 Asansol, West Bengal, India</p>
                            <p className="text-sm sm:text-base font-medium">Self-employed / Project-based work</p>
                            <p className="text-sm sm:text-base text-[#fb0] font-semibold">Started in 2023 – Present</p>
                            <p className="text-sm sm:text-base text-[#aaa]">Building responsive websites and mobile apps for local clients using React, Node.js, and Flutter with a focus on UI/UX and performance.</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="font-bold text-2xl">Skills</p>
                        <div className="flex flex-wrap gap-2">
                            {["HTML", "CSS", "JavaScript","XML", "React", "Node.js", "Express", "MongoDB", "MySQL", "Tailwind", "Bootstrap","Python","Java", "Git", "Figma"].map(skill => (
                                <span key={skill} className="bg-[#333] text-[#fb0] px-3 py-1 rounded-full text-sm font-semibold">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default page;