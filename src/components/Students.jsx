import React from 'react';
import Footer from './Footer';

// Example images - replace these with actual image paths or URLs
const studentImages = {
    "Amy Parker": "/images/emily.jpg",
    "Rajiv Mehta": "/images/jane.jpg",
    "Lisa Wong": "/images/michael.jpg",
    "John Smith": "/images/john.jpg",
    "Sarah Lee": "/images/sophia.jpg",
    "Tech Innovators Club": "/images/vision.jpg"
};

const Students = () => {
    return (
        <section className="">
            <div className="container mx-auto p-10">
                <h1 className="text-5xl text-center font-bold text-orange-500 mb-12 uppercase">Students</h1>

                <div className="space-y-12">
                    {/* Life at Springdale Section */}
                    <div className="relative bg-cover bg-center p-6 rounded-lg shadow-lg border" style={{ backgroundImage: "url('/images/lifeofschool.jpg')" }}>
                        <div className="absolute inset-0 bg-black" style={{ opacity: 0.75 }}></div> {/* Increased transparency overlay */}
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold text-white mb-8">Life at Springdale</h2>
                            <div className="mb-8">
                                <h3 className="text-2xl font-semibold text-orange-300 mb-4">Extracurricular Activities</h3>
                                <p className="text-gray-200">
                                    Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold text-orange-300 mb-4">Clubs and Societies</h3>
                                <p className="text-gray-200">
                                    Literary Society, Environmental Club, Astronomy Club, Coding Club
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Achievements Section */}
                    <div className="relative bg-cover bg-center p-6 rounded-lg shadow-lg border border-gray-300" style={{ backgroundImage: "url('/images/achievements.jpg')" }}>
                        <div className="absolute inset-0 bg-black" style={{ opacity: 0.75 }}></div> {/* Increased transparency overlay */}
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold text-white mb-8">Achievements</h2>
                            <div className="space-y-4">
                                <div className="flex items-center mb-4">
                                    <img
                                        src={studentImages["John Smith"]}
                                        alt="John Smith"
                                        className="w-20 h-20 rounded-full object-cover mr-4 bg-gray-200 p-1"
                                    />
                                    <p className="text-lg text-gray-200">
                                        <strong className="text-orange-300">John Smith</strong> - National Level Math Olympiad Winner
                                    </p>
                                </div>
                                <div className="flex items-center mb-4">
                                    <img
                                        src={studentImages["Sarah Lee"]}
                                        alt="Sarah Lee"
                                        className="w-20 h-20 rounded-full object-cover mr-4 bg-gray-200 p-1"
                                    />
                                    <p className="text-lg text-gray-200">
                                        <strong className="text-orange-300">Sarah Lee</strong> - Gold Medalist in State Swimming Championship
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <img
                                        src={studentImages["Tech Innovators Club"]}
                                        alt="Tech Innovators Club"
                                        className="w-20 h-20 rounded-full object-cover mr-4 bg-gray-200 p-1"
                                    />
                                    <p className="text-lg text-gray-200">
                                        <strong className="text-orange-300">Tech Innovators Club</strong> - Winners of Inter-School Robotics Competition
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Student Council Section */}
                    <div className="relative bg-cover bg-center p-6 rounded-lg shadow-lg border" style={{ backgroundImage: "url('/images/studentcouncil.jpg')" }}>
                        <div className="absolute inset-0 bg-black" style={{ opacity: 0.75 }}></div> {/* Increased transparency overlay */}
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold text-white mb-8">Student Council</h2>
                            <div className="space-y-4">
                                <div className="flex items-center mb-4">
                                    <img
                                        src={studentImages["Amy Parker"]}
                                        alt="Amy Parker"
                                        className="w-20 h-20 rounded-full object-cover mr-4 bg-gray-200 p-1"
                                    />
                                    <p className="text-lg text-gray-200">
                                        <strong className="text-orange-300">Amy Parker</strong> - President, Grade 12
                                    </p>
                                </div>
                                <div className="flex items-center mb-4">
                                    <img
                                        src={studentImages["Rajiv Mehta"]}
                                        alt="Rajiv Mehta"
                                        className="w-20 h-20 rounded-full object-cover mr-4 bg-gray-200 p-1"
                                    />
                                    <p className="text-lg text-gray-200">
                                        <strong className="text-orange-300">Rajiv Mehta</strong> - Vice President, Grade 11
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <img
                                        src={studentImages["Lisa Wong"]}
                                        alt="Lisa Wong"
                                        className="w-20 h-20 rounded-full object-cover mr-4 bg-gray-200 p-1"
                                    />
                                    <p className="text-lg text-gray-200">
                                        <strong className="text-orange-300">Lisa Wong</strong> - Secretary, Grade 10
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default Students;
