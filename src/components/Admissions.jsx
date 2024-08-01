import React, { useState } from 'react';
import { FaFileAlt, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';
import Footer from './Footer';

const Admissions = () => {
    const [showProcess, setShowProcess] = useState(false);
    const [showCriteria, setShowCriteria] = useState(false);
    const [showImportantDates, setShowImportantDates] = useState(false);

    return (
        <section className="">
            <div className="container mx-auto p-8">
                <h1 className="text-5xl text-center font-bold text-orange-500 mb-12 uppercase">Admissions</h1>

                <div className="space-y-8">
                    {/* Admission Process Section */}
                    <div className="relative p-6 bg-white rounded-lg shadow-lg border border-gray-300">
                        <div
                            className="absolute top-0 left-0 w-1.5 h-full bg-orange-500 rounded-r-lg"
                        ></div>
                        <h2
                            className="text-3xl text-textc font-bold mb-4 cursor-pointer flex items-center"
                            onClick={() => setShowProcess(!showProcess)}
                        >
                            <FaFileAlt className="text-3xl mr-4 text-orange-500" />
                            Admission Process
                        </h2>
                        {showProcess && (
                            <p className="text-lg text-gray-700">
                                Admission forms are available for download. Submit the completed form along with required documents at the school office.
                            </p>
                        )}
                    </div>

                    {/* Admission Criteria Section */}
                    <div className="relative p-6 bg-white rounded-lg shadow-lg border border-gray-300">
                        <div
                            className="absolute top-0 left-0 w-1.5 h-full bg-orange-500 rounded-r-lg"
                        ></div>
                        <h2
                            className="text-3xl text-textc font-bold mb-4 cursor-pointer flex items-center"
                            onClick={() => setShowCriteria(!showCriteria)}
                        >
                            <FaCheckCircle className="text-3xl mr-4 text-orange-500" />
                            Admission Criteria
                        </h2>
                        {showCriteria && (
                            <p className="text-lg text-gray-700">
                                Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.
                            </p>
                        )}
                    </div>

                    {/* Important Dates Section */}
                    <div className="relative p-6 bg-white rounded-lg shadow-lg border border-gray-300">
                        <div
                            className="absolute top-0 left-0 w-1.5 h-full bg-orange-500 rounded-r-lg"
                        ></div>
                        <h2
                            className="text-3xl text-textc font-bold mb-4 cursor-pointer flex items-center"
                            onClick={() => setShowImportantDates(!showImportantDates)}
                        >
                            <FaCalendarAlt className="text-3xl mr-4 text-orange-500" />
                            Important Dates
                        </h2>
                        {showImportantDates && (
                            <div className="text-lg text-gray-700">
                                <div className="flex items-center mb-2">
                                    <FaCalendarAlt className="text-xl mr-2 text-orange-500" />
                                    <span><strong>Admission Form Availability:</strong> March 1st</span>
                                </div>
                                <div className="flex items-center mb-2">
                                    <FaCalendarAlt className="text-xl mr-2 text-orange-500" />
                                    <span><strong>Last Date for Submission:</strong> March 31st</span>
                                </div>
                                <div className="flex items-center mb-2">
                                    <FaCalendarAlt className="text-xl mr-2 text-orange-500" />
                                    <span><strong>Entrance Test:</strong> April 15th</span>
                                </div>
                                <div className="flex items-center">
                                    <FaCalendarAlt className="text-xl mr-2 text-orange-500" />
                                    <span><strong>Announcement of Results:</strong> April 30th</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default Admissions;
