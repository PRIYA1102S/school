import React from 'react';
import Footer from './Footer';

const sections = [
    {
        title: "History",
        imageSrc: "/images/history.jpg",
        text: "Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.",
        imageFirst: true,
    },
    {
        title: "Vision",
        imageSrc: "/images/vision.jpg",
        text: "To create a learning environment that fosters academic excellence, critical thinking, and ethical values.",
        imageFirst: false,
    },
    {
        title: "Mission",
        imageSrc: "/images/mission.jpg",
        text: "To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.",
        imageFirst: true,
    },
    {
        title: "Principal's Message",
        imageSrc: "/images/message.jpg",
        text: "At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.",
        imageFirst: false,
    },
    {
        title: "Infrastructure and Facilities",
        imageSrc: "/images/children-learns-work-computer-african-girl-sitting-table-boy-girl-computer-science-class.jpg",
        text: (
            <ul className="list-disc list-inside">
                <li>State-of-the-art science and computer labs.</li>
                <li>Spacious and well-equipped classrooms.</li>
                <li>Library with a vast collection of books.</li>
                <li>Sports facilities including a playground and swimming pool.</li>
            </ul>
        ),
        imageFirst: true,
    }
];

const AboutUs = () => {
    return (
        <div className="bg-white text-gray-800">
            <div className="max-w-4xl mx-auto px-8 py-16">
                <h1 className="text-5xl text-center font-bold text-orange-500 mb-12 uppercase">ABOUT US</h1>

                {sections.map((section, index) => (
                    <section className="mb-16" key={index}>
                        <div className={`flex ${section.imageFirst ? 'flex-row' : 'flex-row-reverse'} items-center gap-8`}>
                            <img
                                src={section.imageSrc}
                                alt={section.title}
                                className="rounded-lg shadow-lg w-full max-w-sm object-cover flex-1"
                            />
                            <div className="flex-1 p-4">
                                <h2 className="text-3xl font-bold text-gray-800 mb-4">{section.title}</h2>
                                <p className="text-lg leading-relaxed text-gray-700">
                                    {section.text}
                                </p>
                            </div>
                        </div>
                    </section>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default AboutUs;
