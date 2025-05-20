import React, { useEffect, useState } from 'react';


const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        
        <div className='flex flex-col items-center justify-center'>
            <div className="border rounded lg:w-250  flex flex-col shadow-sm">
                <button
                    type="button"
                    className="flex items-center justify-between w-full p-4 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <p className="text-lg font-medium">{title}</p>
                    <div className="flex items-center justify-center w-8 h-8 border rounded-full">
                        <svg
                            viewBox="0 0 24 24"
                            className={`w-3 text-gray-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                                }`}
                        >
                            <polyline
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                points="2,7 12,17 22,7"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </button>
                {isOpen && <div className="p-4 pt-0 text-gray-700">{children}</div>}
            </div>
        </div>

    );
};
const Faq = () => {
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        fetch('/Faq.JSON')
            .then(res => res.json())
            .then(data => setFaqs(data))
            .catch(err => console.error('Failed to load FAQs:', err));
    }, []);

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold">FAQs</h2>
                    <p className="text-black">Common questions and answers</p>
                </div>
                <div className="space-y-4">
                    {faqs.map(({ id, question, answer }) => (
                        <Item key={id} title={question}>
                            {answer}
                        </Item>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;