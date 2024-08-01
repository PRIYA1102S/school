import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from './Footer';

const HomePage = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000, // Reduced speed for quicker transitions
        arrows: true,
        appendDots: dots => (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center w-full">
                <ul className="flex space-x-2">{dots}</ul>
            </div>
        ),
        customPaging: i => (
            <div
                style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: '#FF6F00', // Custom color for dots
                    border: '1px solid #FF6F00',
                }}
            ></div>
        ),
    };

    return (
        <div className="w-full">
            {/* Introduction Section */}
            <div className="text-center py-8">
                <img src="/images/logo-removebg-preview.png" alt="School Logo" className="mx-auto h-48 transition-transform duration-300 ease-in-out transform hover:scale-105" />
                <h1 className="text-3xl font-bold text-sch mt-4 uppercase">Springdale Public School</h1>
                <p className="text-textc mt-2">Welcome to Springdale Public School where we nurture young minds for a brighter future.</p>
            </div>

            {/* Carousel/Banner Section */}
            <div className="relative py-8">
                <Slider {...settings}>
                    <div className="flex justify-center items-center">
                        <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-md mx-auto">
                            <img src="/images/sports-day.jpg" alt="Annual Sports Day" className="w-full h-48 object-cover rounded-t-lg" />
                            <h3 className="text-lg font-semibold text-textc mt-4">Annual Sports Day</h3>
                            <p className="text-textc mt-2">Celebrating Excellence in Sports</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-md mx-auto">
                            <img src="/images/science-exhibition.jpg" alt="Science Exhibition" className="w-full h-48 object-cover rounded-t-lg" />
                            <h3 className="text-lg font-semibold text-textc mt-4">Science Exhibition</h3>
                            <p className="text-textc mt-2">Showcasing Student Innovations</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-md mx-auto">
                            <img src="/images/cultural-fest.jpg" alt="Cultural Fest" className="w-full h-48 object-cover rounded-t-lg" />
                            <h3 className="text-lg font-semibold text-textc mt-4">Cultural Fest</h3>
                            <p className="text-textc mt-2">Embracing Diversity and Creativity</p>
                        </div>
                    </div>
                </Slider>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default HomePage;
