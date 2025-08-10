import React from 'react';
import Link from "next/link";

const Navbar = ({ page }) => {
    const navLink = "hover:bg-[#ffffff45] hover:scale-110 active:scale-90 !duration-150 font-bold p-3 py-1 rounded-xl text-lg";
    return (
        <nav className="sm:w-fit w-[100vw] z-10 fixed sm:absolute sm:right-0 bottom-0 sm:bottom-auto left-0 sm:left-auto sm:top-0 bg-[#282829] p-5 rounded-bl-xl rounded-tr-xl">
            <ul className="w-full gap-2 sm:gap-10 md:gap-2 flex items-center justify-center">
                <Link href="/" className={`${navLink} ${page == "about" ? "!text-[#fb0]" : "!text-[#ffffff9a]"}`}>About</Link>
                <Link href="/resume" className={`${navLink} ${page == "resume" ? "!text-[#fb0]" : "!text-[#ffffff9a]"}`}>Resume</Link>
                <Link href="/classes" className={`${navLink} ${page == "classes" ? "!text-[#fb0]" : "!text-[#ffffff9a]"}`}>Classes</Link>
                <Link href="/contact" className={`${navLink} ${page == "contact" ? "!text-[#fb0]" : "!text-[#ffffff9a]"}`}>Contact</Link>
            </ul>
        </nav>
    );
}
export default Navbar;