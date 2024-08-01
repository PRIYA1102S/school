import React from 'react';
import Footer from './Footer';

// Example gallery items - replace these with actual image and video paths or URLs
const galleryItems = [
    {
        type: 'photo',
        src: '/images/sports-day.jpg',
        description: 'Students participating in various sports events.'
    },
    {
        type: 'photo',
        src: '/images/science-exhibition.jpg',
        description: 'Students presenting their science projects.'
    },
    {
        type: 'photo',
        src: '/images/cultural-fest.jpg',
        description: 'Students performing in the cultural fest.'
    },
    {
        type: 'photo',
        src: '/images/classroom.jpg',
        description: 'A glimpse of our interactive classrooms.'
    },
    {
        type: 'photo',
        src: '/images/library.jpg',
        description: 'Students reading and studying in the school library.'
    },
    {
        type: 'photo',
        src: '/images/lab.jpg',
        description: 'Students learning and writing code in the computer lab.'
    }
];

const Gallery = () => {
    return (
        <section className="">
            <div className="container mx-auto p-10">
                <h1 className="text-5xl text-center font-bold text-orange-500 mb-12 uppercase">Gallery</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleryItems.map((item, index) => (
                        <div key={index} className="relative bg-gray-200 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                            <img
                                src={item.src}
                                alt={item.description}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <p className="text-lg text-gray-700">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default Gallery;
