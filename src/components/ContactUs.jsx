import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () => {
        let tempErrors = {};
        let isValid = true;

        if (!formData.name) {
            tempErrors.name = 'Name is required.';
            isValid = false;
        }

        if (!formData.email) {
            tempErrors.email = 'Email is required.';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = 'Email is invalid.';
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            setSubmitted(true);
            setFormData({
                name: '',
                email: '',
                message: ''
            });
            setErrors({});
        }
    };

    return (
        <section className=" w-full">
            <div className="container mx-auto max-w-5xl">
                <h1 className="text-4xl text-center font-bold text-orange-500 mb-12">Contact Us</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {/* Address */}
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-orange-500 text-3xl" />
                        </div>
                        <p className="text-lg">Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                            <FontAwesomeIcon icon={faPhone} className="text-orange-500 text-3xl" />
                        </div>
                        <p className="text-lg">
                            <a href="tel:+11234567890" className="text-blue-500 hover:underline">+1 (123) 456-7890</a>
                        </p>
                    </div>

                    {/* Email */}
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                            <FontAwesomeIcon icon={faEnvelope} className="text-orange-500 text-3xl" />
                        </div>
                        <p className="text-lg">
                            <a href="mailto:info@springdale.edu" className="text-blue-500 hover:underline">info@springdale.edu</a>
                        </p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Form</h2>
                    {submitted && (
                        <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg">
                            <p>Thank you for contacting us! We will get back to you shortly.</p>
                        </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 text-lg font-semibold mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`w-full p-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500`}
                                placeholder="Your Name"
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700 text-lg font-semibold mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500`}
                                placeholder="Your Email"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-gray-700 text-lg font-semibold mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="Your Message"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        >
                            Send
                        </button>
                    </form>
                </div>

                {/* Google Maps Integration */}
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Location</h2>
                    <iframe
                        title="Google Maps Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.597766130716!2d-122.07685498468207!3d37.38747477982505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb577f8f2d567%3A0x0!2zU3ByaW5nZGFsZSBFdWNhdGlvbiBMYW5lLCBDaXR5dmlsbGUsIFN0YXRlLCBNSV!5e0!3m2!1sen!2sus!4v1635177093045!5m2!1sen!2sus"
                        className="w-full h-64 border-0 rounded-lg"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default ContactUs;
