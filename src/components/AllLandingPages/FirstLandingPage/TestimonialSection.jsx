import React from 'react'
import { FaStar } from "react-icons/fa";
import SectionHeading from './SectionHeading';

const testimonialData = [
    {
        name: "Sarah Johnson",
        role: "E-commerce CEO",
        image: "/LandpageImg/team-1.webp",
        feedback:
            "Our online sales tripled within 6 months of working with this team. Their SEO and PPC strategies were perfectly tailored to our niche. The detailed monthly reports showed exactly where every dollar was going."
    },
    {
        name: "David Smith",
        role: "Startup Founder",
        image: "/LandpageImg/team-1.webp",
        feedback:
            "Their team transformed our brand presence online. We're now ranking on the first page of Google for multiple keywords."
    },
    {
        name: "Emily Chen",
        role: "Marketing Director",
        image: "/LandpageImg/team-1.webp",
        feedback:
            "They are proactive, transparent, and results-driven. I appreciate the data-focused approach they bring to every campaign."
    },
    {
        name: "Liam Brown",
        role: "Product Manager",
        image: "/LandpageImg/team-1.webp",
        feedback:
            "The level of insight and analytics they provide is unmatched. We now have full clarity on what’s driving our ROI."
    },
    {
        name: "Sophia Davis",
        role: "Freelance Designer",
        image: "/LandpageImg/team-1.webp",
        feedback:
            "I have worked with many agencies, but none as communicative and consistent as this one."
    },
    {
        name: "James Wilson",
        role: "Agency Owner",
        image: "/LandpageImg/team-1.webp",
        feedback:
            "They became an extension of our team. Trustworthy and always on point with their execution."
    }
];

export default function TestimonialSection() {

    return (
        <>
          
            <div className='min-h-screen bg-gray-100 py-10 px-4'>
                <div className='py-8 '>
                <SectionHeading text="What Our Client Say" position={"text-center"} size={"text-3xl"} />
                </div>
                <div className='max-w-6xl mx-auto flex flex-wrap justify-center gap-6'>
                    {testimonialData.map((person, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md p-6 space-y-4 w-full sm:w-[48%] lg:w-[31%]">
                            <div className="flex space-x-4">
                                <img className="w-12 h-12 rounded-full object-cover"
                                    src={person.image}
                                    alt={person.name}
                                />
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-800">{person.name}</h2>
                                    <p className="text-sm text-gray-500">{person.role}</p>
                                </div>
                            </div>
                            <div className="text-purple-500 flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>
                            <p className="text-sm text-gray-700">{person.feedback}</p>
                        </div>
                    ))}
                </div>
            </div>


        </>
    )
}
