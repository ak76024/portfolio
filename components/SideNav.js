"use client";
import Image from 'next/image';
import React, { useState } from 'react';

const SideNav = () => {
    const mainBox = "lg:min-h-[80vh] h-fit rounded-2xl border border-[#363636] bg-[#1e1e1f] w-[85vw] mx-auto lg:m-0 lg:w-2/6 md:w-1/3 flex gap-6 flex-col items-center justify-start py-[5vh]";
    const sideNavLink = "flex w-[80%] gap-5 items-center justify-start";
    const [showNavDetail, setshowNavDetail] = useState(false);
    const [i, seti] = useState(0)

    return (
        <div id='sidenav' className={mainBox + ` relative mb-5`}>
            <button onClick={() => setshowNavDetail(!showNavDetail)} className='!text-[#fb0] lg:hidden shadow-xl/30 p-2 px-4 absolute right-0 top-0 border-0 border-[#363636] border-t-2 border-l-2 rounded-bl-xl rounded-tr-xl'>Show Detail</button>
            <div className="w-[50%] bg-[#383839] mt-5 lg:m-0 flex justify-center rounded-4xl">
                <Image
                    src="/ak76024.jpg"
                    alt="Avatar"
                    width={200}
                    height={150}
                    className="rounded-lg"
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <p className="font-bold text-4xl">Ak76024</p>
            <p className="text-base bg-[#383839] p-3 rounded-xl py-1">Web Developer</p>
            <div className={`lg:flex w-full gap-6 flex-col items-center justify-start + ${showNavDetail ? "flex" : "hidden"}`}>
                <div className="h-[0.2vh] w-[80%] bg-[#363636]"></div>
                <div className={sideNavLink}>
                    <div className="sideNavIcon rounded-xl shadow-[#00000098] shadow-xs"><svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#fb0"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M16 10.5h.01m-4.01 0h.01M8 10.5h.01M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.6a1 1 0 0 0-.69.275l-2.866 2.723A.5.5 0 0 1 8 18.635V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
                    </svg>
                    </div>
                    <div>
                        <p className="text-sm !text-[#ffffff86]">EMAIL</p>
                        <a href="mailto:akashburnwal46@gmail.com" className="hover:underline">akashburnwal46@gmail.com</a>
                    </div>
                </div>
                <div className={sideNavLink}>
                    <div className="sideNavIcon rounded-xl shadow-[#00000098] shadow-xs"><svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#fb0"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="m17.0896 13.371 1.1431 1.1439c.1745.1461.3148.3287.4111.5349.0962.2063.1461.4312.1461.6588 0 .2276-.0499.4525-.1461.6587-.0963.2063-.4729.6251-.6473.7712-3.1173 3.1211-6.7739 1.706-9.90477-1.4254-3.13087-3.1313-4.54323-6.7896-1.41066-9.90139.62706-.61925 1.71351-1.14182 2.61843-.23626l1.1911 1.19193c1.1911 1.19194.3562 1.93533-.4926 2.80371-.92477.92481-.65643 1.72741 0 2.38391l1.8713 1.8725c.3159.3161.7443.4936 1.191.4936.4468 0 .8752-.1775 1.1911-.4936.8624-.8261 1.6952-1.6004 2.8382-.4565ZM14 8.98134l5.0225-4.98132m0 0L15.9926 4m3.0299.00002v2.98135" />
                    </svg>
                    </div>
                    <div>
                        <p className="text-sm !text-[#ffffff86]">PHONE</p>
                        <a href="tel:+917602481363" className="hover:underline">+91-7602481363</a>
                    </div>
                </div>
                <div className={sideNavLink}>
                    <div className="sideNavIcon rounded-xl shadow-[#00000098] shadow-xs"><svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#fb0"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z" />
                    </svg>
                    </div>
                    <div>
                        <p className="text-sm !text-[#ffffff86]">BIRTHDAY</p>
                        <p>September 1,2006</p>
                    </div>
                </div>
                <div className={sideNavLink}>
                    <div className="sideNavIcon rounded-xl shadow-[#00000098] shadow-xs"><svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#fb0"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        <path d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z" />
                    </svg>
                    </div>
                    <div>
                        <p className="text-sm !text-[#ffffff86]">Location</p>
                        <p>Asansol, West Bengal India</p>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <a target="_blank" href="https://www.linkedin.com/in/ak76024/" rel="noopener noreferrer">
                        <Image src="/linkedin.svg" alt="LinkedIn" width={30} height={30} />
                    </a>
                    <a target="_blank" href="https://www.instagram.com/ak76024/" rel="noopener noreferrer">
                        <Image src="/instagram.svg" alt="Instagram" width={30} height={30} />
                    </a>
                </div>
            </div>
        </div>
    );
}
export default SideNav;