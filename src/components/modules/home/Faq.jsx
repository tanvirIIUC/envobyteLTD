import { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";
const Faq = () => {
    const faqs = [
        {
            id: 1,
            question: "What Is Included In Your Web Development Service?",
            answer: "Our web development service includes UI/UX design, coding, testing, deployment, and ongoing maintenance.",
        },
        {
            id: 2,
            question: "What Technologies Do You Use For Web Development?",
            answer: "We use modern technologies such as React.js, Next.js, HTML5, CSS3, JavaScript, TypeScript, Node.js, Express, and MongoDB to ensure your website is scalable, secure, and responsive.",
        },
        {
            id: 3,
            question: "What If I Need Ongoing Support After The Website Is Launched?",
            answer: "We offer ongoing support and maintenance packages to keep your website up-to-date and secure.",
        },
        {
            id: 4,
            question: "Can I Customize My Website According To My Business Needs?",
            answer: "Yes! We offer fully customizable website solutions tailored to your specific business requirements.",
        },
        {
            id: 5,
            question: "Do You Offer SEO Services As Part Of Your Web Development?",
            answer: "Yes, we provide SEO-friendly web development, including on-page SEO optimizations and technical SEO strategies.",
        },
    ];
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return <div className="flex flex-col items-center mt-20">
        <h1 className="text-5xl font-bold text-[#0A2C8C] text-center"> Frequently Asked Questions</h1>
        <div className="lg:w-[940px] mt-10 p-5">
            {faqs.map((faq, index) => (
                <div
                    key={faq.id}
                    className={`border-b border-gray-300 py-4 transition-all ${openIndex === index ? "text-[#0A2C8C]" : "text-[#6D758F]"
                        }`}
                >
                    <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleFAQ(index)}
                    >
                        <p className={`font-semibold text-2xl ${openIndex === index ? "text-[#0A2C8C]" : ""}`}>
                            <span className="text-[#0A2C8C] text-2xl font-semibold mr-5">0{faq.id}</span>
                            {faq.question}
                        </p>
                        {openIndex === index ? (
                            <FiX className="text-[#0A2C8C]" />
                        ) : (
                            <FiPlus className="text-gray-600" />
                        )}
                    </div>
                    {openIndex === index && (
                        <p className="mt-2 text-[#6D758F] font-normal text-2xl">{faq.answer}</p>
                    )}
                </div>
            ))}
        </div>
    </div>;
};
export default Faq;