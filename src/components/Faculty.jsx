import React from 'react';
import Footer from './Footer';

// Example images - replace these with actual image paths or URLs
const facultyImages = {
    "John Doe": "/images/john.jpg",
    "Jane Smith": "/images/jane.jpg",
    "Emily Johnson": "/images/emily.jpg",
    "Michael Brown": "/images/michael.jpg",
    "Sophia Davis": "/images/sophia.jpg",
    "David Wilson": "/images/david.jpg"
};

const facultyMembers = [
    {
        name: "John Doe",
        position: "Principal",
        qualifications: "M.Ed",
        experience: "20 years of experience in educational administration"
    },
    {
        name: "Jane Smith",
        position: "Vice Principal",
        qualifications: "M.Sc. in Physics",
        experience: "15 years of teaching experience"
    },
    {
        name: "Emily Johnson",
        position: "English Teacher",
        qualifications: "M.A. in English",
        experience: "10 years of teaching experience"
    },
    {
        name: "Michael Brown",
        position: "Mathematics Teacher",
        qualifications: "M.Sc. in Mathematics",
        experience: "8 years of teaching experience"
    },
    {
        name: "Sophia Davis",
        position: "Science Teacher",
        qualifications: "M.Sc. in Chemistry",
        experience: "12 years of teaching experience"
    },
    {
        name: "David Wilson",
        position: "Computer Science Teacher",
        qualifications: "B.Tech in Computer Science",
        experience: "5 years of teaching experience"
    }
];

const Faculty = () => {
    return (
        <section className="">
            <div className="container mx-auto p-8">
                <h1 className="text-5xl text-center font-bold text-orange-500 mb-12 uppercase">Faculty</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {facultyMembers.map((member) => (
                        <div key={member.name} className="relative bg-white p-6 rounded-lg shadow-lg border border-gray-300 flex items-center">
                            <img
                                src={facultyImages[member.name]}
                                alt={member.name}
                                className="w-24 h-24 rounded-full object-cover mr-6"
                            />
                            <div>
                                <h2 className="text-2xl font-bold text-textc mb-1">{member.name}</h2>
                                <h3 className="text-xl font-semibold text-orange-500 mb-2">{member.position}</h3>
                                <p className="text-gray-700 mb-1"><strong>Qualifications:</strong> {member.qualifications}</p>
                                <p className="text-gray-700"><strong>Experience:</strong> {member.experience}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default Faculty;
