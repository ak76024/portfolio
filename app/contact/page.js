'use client';
import { useState } from 'react';
import SideNav from "@/components/SideNav";
import Navbar from "@/components/Navbar";
import { ToastContainer, toast, Bounce } from 'react-toastify';

const Page = () => {
    const mainBox = "min-h-[80vh] rounded-2xl border border-[#363636] bg-[#1e1e1f]";
    const inputStyle = "md:w-[45%] w-[70vw] md:w-full border border-[#383838] font-bold rounded-xl text-lg p-3 px-5";

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({ name: '', email: '', message: '' });

    const validate = () => {
        let valid = true;
        let newErrors = { name: '', email: '', message: '' };

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
            valid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            valid = false;
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
            valid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            const { name, email, message } = formData;
            const mailtoLink = `mailto:akashburnwal46@gmail.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
            )}`;
            window.location.href = mailtoLink;

            setFormData({ name: '', email: '', message: '' });
            toast.success('🦄 Message sent successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            setFormData({ name: '', email: '', message: '' });
            setErrors({ name: '', email: '', message: '' });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
            <div className="min-h-screen sm:m-0 py-[10vh] sm:flex flex-col lg:flex-row lg:p-20 sm:items-start sm:gap-8 sm:justify-center">
                <SideNav />
                <div className={mainBox + " sm:w-3/5 md:w-4/5 md:mx-auto p-8 relative lg:m-0 m-5 md:m-1"}>
                    <div className="flex items-center mb-8 justify-between">
                        <div className="sm:w-1/3 w-full">
                            <p className="pageHeading !relative font-bold text-3xl">Contact Us</p>
                        </div>
                        <div className="w-2/3">
                            <Navbar page="contact" />
                        </div>
                    </div>

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.9732228756516!2d86.98178087526499!3d23.70492819052077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f719d544afe6e5%3A0x22655867748b7e61!2sA.k.%20Classes!5e1!3m2!1sen!2sin!4v1753539203375!5m2!1sen!2sin"
                        width="100%" height="450" style={{ border: 0 }} loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <h2 className="text-4xl font-bold my-8">Contact Form</h2>
                    <form action="mailto:akashburnwal46@gmail.com" onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-4">
                            <div className="flex md:flex-row flex-col gap-2">
                                <div className="flex flex-col w-full md:w-1/2">
                                    <input
                                        className={inputStyle}
                                        placeholder="Full Name"
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                    {errors.name && <p className="!text-red-500 text-lg font-bold mt-1 px-2">{errors.name}</p>}
                                </div>
                                <div className="flex flex-col w-full md:w-1/2">
                                    <input
                                        className={inputStyle}
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    {errors.email && <p className="!text-red-500 text-lg font-bold mt-1 px-2">{errors.email}</p>}
                                </div>
                            </div>

                            <div className="flex flex-col w-full">
                                <textarea
                                    className={inputStyle + " !w-full h-[20vh]"}
                                    name="message"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                                {errors.message && <p className="!text-red-500 text-lg font-bold mt-1 px-2">{errors.message}</p>}
                            </div>
                        </div>
                        <div className="flex justify-center pt-5">
                            <input
                                className="cursor-pointer bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all duration-300"
                                type="submit"
                                value="Send Message"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
export default Page;