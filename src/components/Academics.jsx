import React, { useState } from 'react';
import { FaBook, FaChalkboardTeacher, FaGraduationCap } from 'react-icons/fa';
import Footer from './Footer';

const Academics = () => {
    const [showCurriculum, setShowCurriculum] = useState(false);
    const [showPrimary, setShowPrimary] = useState(false);
    const [showSecondary, setShowSecondary] = useState(false);
    const [showSeniorSecondary, setShowSeniorSecondary] = useState(false);
    const [showScienceStream, setShowScienceStream] = useState(false);
    const [showCommerceStream, setShowCommerceStream] = useState(false);
    const [showTeachingMethodologies, setShowTeachingMethodologies] = useState(false);
    const [showEducationalResources, setShowEducationalResources] = useState(false);

    return (
        <section className="">
            <div className="container mx-auto p-8">
                <h1 className="text-5xl text-center font-bold text-orange-500 mb-12 uppercase">Academics</h1>

                <div className="flex flex-col space-y-4">
                    {/* Curriculum Card */}
                    <div className="border border-gray-300 rounded-lg p-4 shadow-lg">
                        <h3
                            className="text-3xl text-textc font-bold mb-4 cursor-pointer"
                            onClick={() => setShowCurriculum(!showCurriculum)}
                        >
                            Curriculum
                        </h3>
                        {showCurriculum && (
                            <div>
                                {/* Primary Education */}
                                <div
                                    className="cursor-pointer flex items-center p-4 rounded-lg hover:bg-gray-200 transition"
                                    onClick={() => setShowPrimary(!showPrimary)}
                                >
                                    <FaBook className="text-2xl mr-4 text-orange-500" />
                                    <h4 className="text-xl font-semibold">Primary (Grades 1-5)</h4>
                                </div>
                                {showPrimary && (
                                    <div className="pl-8">
                                        <ul className="list-disc list-inside space-y-2">
                                            <li>English</li>
                                            <li>Mathematics</li>
                                            <li>Science</li>
                                            <li>Social Studies</li>
                                            <li>Art</li>
                                            <li>Physical Education</li>
                                        </ul>
                                    </div>
                                )}

                                {/* Secondary Education */}
                                <div
                                    className="cursor-pointer flex items-center p-4 rounded-lg hover:bg-gray-200 transition"
                                    onClick={() => setShowSecondary(!showSecondary)}
                                >
                                    <FaChalkboardTeacher className="text-2xl mr-4 text-orange-500" />
                                    <h4 className="text-xl font-semibold">Secondary (Grades 6-10)</h4>
                                </div>
                                {showSecondary && (
                                    <div className="pl-8">
                                        <ul className="list-disc list-inside space-y-2">
                                            <li>English</li>
                                            <li>Mathematics</li>
                                            <li>Science (Physics, Chemistry, Biology)</li>
                                            <li>Social Studies</li>
                                            <li>Computer Science</li>
                                            <li>Physical Education</li>
                                            <li>Art</li>
                                        </ul>
                                    </div>
                                )}

                                {/* Senior Secondary Education */}
                                <div
                                    className="cursor-pointer flex items-center p-4 rounded-lg hover:bg-gray-200 transition"
                                    onClick={() => setShowSeniorSecondary(!showSeniorSecondary)}
                                >
                                    <FaGraduationCap className="text-2xl mr-4 text-orange-500" />
                                    <h4 className="text-xl font-semibold">Senior Secondary (Grades 11-12)</h4>
                                </div>
                                {showSeniorSecondary && (
                                    <div className="pl-8">
                                        {/* Science Stream */}
                                        <div
                                            className="cursor-pointer flex items-center p-4 rounded-lg hover:bg-gray-200 transition"
                                            onClick={() => setShowScienceStream(!showScienceStream)}
                                        >
                                            <FaBook className="text-2xl mr-4 text-orange-500" />
                                            <h5 className="text-lg font-semibold">Science Stream</h5>
                                        </div>
                                        {showScienceStream && (
                                            <div className="pl-8">
                                                <ul className="list-disc list-inside space-y-2">
                                                    <li>Physics</li>
                                                    <li>Chemistry</li>
                                                    <li>Biology</li>
                                                    <li>Mathematics</li>
                                                    <li>Computer Science</li>
                                                    <li>English</li>
                                                </ul>
                                            </div>
                                        )}

                                        {/* Commerce Stream */}
                                        <div
                                            className="cursor-pointer flex items-center p-4 rounded-lg hover:bg-gray-200 transition"
                                            onClick={() => setShowCommerceStream(!showCommerceStream)}
                                        >
                                            <FaChalkboardTeacher className="text-2xl mr-4 text-orange-500" />
                                            <h5 className="text-lg font-semibold">Commerce Stream</h5>
                                        </div>
                                        {showCommerceStream && (
                                            <div className="pl-8">
                                                <ul className="list-disc list-inside space-y-2">
                                                    <li>Accountancy</li>
                                                    <li>Business Studies</li>
                                                    <li>Economics</li>
                                                    <li>Mathematics</li>
                                                    <li>English</li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Teaching Methodologies Card */}
                    <div className="border border-gray-300 rounded-lg p-4 shadow-lg">
                        <h3
                            className="text-3xl text-textc font-bold mb-4 cursor-pointer"
                            onClick={() => setShowTeachingMethodologies(!showTeachingMethodologies)}
                        >
                            Teaching Methodologies
                        </h3>
                        {showTeachingMethodologies && (
                            <p>
                                We use a blend of traditional and modern teaching techniques to cater to different learning styles.
                            </p>
                        )}
                    </div>

                    {/* Educational Resources Card */}
                    <div className="border border-gray-300 rounded-lg p-4 shadow-lg">
                        <h3
                            className="text-3xl text-textc font-bold mb-4 cursor-pointer"
                            onClick={() => setShowEducationalResources(!showEducationalResources)}
                        >
                            Educational Resources
                        </h3>
                        {showEducationalResources && (
                            <p>
                                Digital classrooms, interactive learning modules, and access to online educational platforms.
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default Academics;
