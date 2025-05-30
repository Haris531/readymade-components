import React from 'react'
import { CiMail } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import SectionHeading from './SectionHeading';

export default function ContactSection() {
    return (
        <>
            <div className="bg-white py-16 px-6">
                <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-16">
                    <div className="flex-1 space-y-8">
                        <div className="space-y-6">
                            <div>
                                <SectionHeading text="Lets Talk" position={"text-start"} size={"text-3xl"} />
                            </div>                            <p className="text-gray-600 font-semibold max-w-md">
                                Have some big idea or brand to develop and need help? Then reach out —
                                we'd love to hear about your project and provide help.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-xl font-semibold text-gray-800">Email</h1>
                            <div className="flex items-center gap-3">
                                <div className="text-purple-600 text-2xl mt-1 bg-gray-100 px-3 py-3 rounded-full"><CiMail /></div>
                                <div className="flex flex-col">
                                    <h3 className="text-sm font-medium text-gray-700">Mail</h3>
                                    <input type="email" id="email" name="email" required placeholder="you@example.com" />
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h1 className="text-xl font-semibold text-gray-800">Socials</h1>
                            <div className="flex flex-row gap-4">
                                <div className="text-purple-600 text-2xl mt-1 bg-gray-100 px-3 py-3 rounded-full"><FiFacebook /></div>
                                <div className="text-purple-600 text-2xl mt-1 bg-gray-100 px-3 py-3 rounded-full"><LuLinkedin /></div>
                                <div className="text-purple-600 text-2xl mt-1 bg-gray-100 px-3 py-3 rounded-full"><FaInstagram /></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="flex flex-col gap-6">
                            <div>
                                <input type="text" id="name" name="name" placeholder="Name"
                                    className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div>
                                <input type="email" id="email" name="email" placeholder="Email"
                                    className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div>
                                <input type="text" id="subject" name="subject" placeholder="Subject"
                                    className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div>
                                <textarea id="message" name="message" rows="4" placeholder="Message..."
                                    className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div>
                                <button type="submit"
                                    className="w-full py-3 px-6 bg-purple-600 text-white rounded-md font-semibold hover:bg-purple-700 transition"
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
