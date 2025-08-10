import SideNav from "@/components/SideNav";
import Navbar from "@/components/Navbar";
export default function Home() {
  const mainBox = "min-h-[80vh] rounded-2xl border border-[#363636] bg-[#1e1e1f]";
  const workBox = "bg-[#222223] px-5 sm:px-0 border-[#444444] border-b-0 border-r-0 border rounded-2xl  min-h-[20vh] flex gap-5 items-center justify-center";

  return (
    <div className="mainPage min-h-screen sm:m-0 py-[10vh] sm:flex flex-col lg:flex-row lg:p-20 sm:items-start sm:gap-8 sm:justify-center">
      <SideNav />
      <div className={mainBox + " sm:w-3/5 md:w-4/5 md:mx-auto p-8 relative lg:m-0 m-5 md:m-1"}>
        <div className="flex items-center mb-8 justify-between">
          <div className="sm:w-1/3 w-full">
            <p className="pageHeading !relative font-bold text-3xl">About Me</p>
          </div>
          <div className="w-2/3">
            <Navbar page="about" />
          </div>
        </div>
        <p className="my-3 text-lg">
          Hi, I&apos;m a passionate <b>Web Developer & Designer</b> with a focus on building clean, responsive, and user-friendly websites. I specialize in both front-end and back-end development, creating dynamic web experiences that not only look great but perform seamlessly across devices.<br /><br />
          With a strong foundation in <b>HTML, CSS, JavaScript, XML, Java, React, Node.js, Express, PHP,</b> and database systems like <b>MongoDB</b> and <b>MySQL</b>, I craft full-stack solutions tailored to client needs. I also bring design to life using <b>Bootstrap</b> and <b>Tailwind CSS</b>, ensuring every interface is both functional and visually engaging.<br /><br />
          Over the last <b>2+ years</b>, I&apos;ve built a wide range of projects — from personal portfolios and landing pages to full-stack web apps and admin dashboards. My experience includes working on real-world freelance projects where I handled everything from UI/UX design to backend APIs and deployment.<br /><br />
          I&apos;m currently open to <b>freelance opportunities</b> and <b>collaborations</b> — whether you&apos;re a business looking to grow online or a creative needing a solid digital presence, I&apos;m here to help turn ideas into reality. Let&apos;s build something great together.
        </p>
        <p className="font-bold text-2xl my-5">What I&apos;m Doing</p>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className={workBox}>
            <svg className="w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#fb0"
              strokeWidth={1}
              strokeLinecap="round"
              strokeLinejoin="round"            >
              <path d="M8 7V2.221a2 2 0 0 0-.5.365L3.586 6.5a2 2 0 0 0-.365.5H8Zm2 0V2h7a2 2 0 0 1 2 2v.126a5.087 5.087 0 0 0-4.74 1.368v.001l-6.642 6.642a3 3 0 0 0-.82 1.532l-.74 3.692a3 3 0 0 0 3.53 3.53l3.694-.738a3 3 0 0 0 1.532-.82L19 15.149V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Z" />
              <path d="M17.447 8.08a1.087 1.087 0 0 1 1.187.238l.002.001a1.088 1.088 0 0 1 0 1.539l-.377.377-1.54-1.542.373-.374.002-.001c.1-.102.22-.182.353-.237Zm-2.143 2.027-4.644 4.644-.385 1.924 1.925-.385 4.644-4.642-1.54-1.54Zm2.56-4.11a3.087 3.087 0 0 0-2.187.909l-6.645 6.645a1 1 0 0 0-.274.51l-.739 3.693a1 1 0 0 0 1.177 1.176l3.693-.738a1 1 0 0 0 .51-.274l6.65-6.646a3.088 3.088 0 0 0-2.185-5.275Z" />
            </svg>
            <div className="flex gap-2 flex-col">
              <p className="font-bold text-xl">Web Design</p>
              <p className="text-md">The most modern and high-quality <br />design made at a professional level.</p>
            </div>
          </div>
          <div className={workBox}>
            <svg className="w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#fb0"
              strokeWidth={1}
              strokeLinecap="round"
              strokeLinejoin="round"            >
              <path d="M5.35709 16V5.78571c0-.43393.34822-.78571.77777-.78571H18.5793c.4296 0 .7778.35178.7778.78571V16M5.35709 16h-1c-.55229 0-1 .4477-1 1v1c0 .5523.44771 1 1 1H20.3571c.5523 0 1-.4477 1-1v-1c0-.5523-.4477-1-1-1h-1M5.35709 16H19.3571M9.35709 8l2.62501 2.5L9.35709 13m4.00001 0h2" />
            </svg>
            <div className="flex gap-2 flex-col">
              <p className="font-bold text-xl">Web development</p>
              <p className="text-md">High-quality development of sites at <br /> the professional level.</p>
            </div>
          </div>
          <div className={workBox}>
            <svg className="w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#fb0"
              strokeWidth={1}
              strokeLinecap="round"
              strokeLinejoin="round"            >
              <path d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm12 12V5H7v11h10Zm-5 1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" />
            </svg>
            <div className="flex gap-2 flex-col">
              <p className="font-bold text-xl">Mobile Apps</p>
              <p className="text-md">Professional development of <br /> applications for iOS and Android.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}