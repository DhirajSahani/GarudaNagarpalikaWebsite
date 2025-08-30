import React, { useState } from 'react';
import logo from '../assets/logo.png';
import munpic from '../assets/munpic.jpeg';
import Flag from '../assets/Flag.gif';
import { Link, useNavigate } from 'react-router-dom';
import Gallery from './Gallery';

const Intro2 = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleHome = () => {
        navigate('/');
    };

    return (
        <div>
            {/* NAVBAR */}
            <nav className="flex items-center p-4 md:p-6 bg-white shadow-md gap-2 relative">
                {/* Logo and Municipality Name */}
                <img
                    onClick={handleHome}
                    src={logo}
                    alt="Logo"
                    className="h-12 w-14 sm:h-16 sm:w-20 md:h-20 md:w-24 cursor-pointer"
                />
                <p className="text-base sm:text-lg md:text-2xl font-bold text-red-700">
                    Garuda Municipality <br className="hidden sm:block" /> Government of Nepal
                </p>

                {/* Municipality Image */}
                <div className="ml-auto hidden md:block">
                    <img src={munpic} alt="Municipality" className="h-12 sm:h-16 md:h-20 w-auto" />
                </div>

                {/* Nepali Name */}
                <div className="hidden sm:block ml-4">
                    <p className="text-sm sm:text-base md:text-lg font-bold text-gray-700">
                        गरुडा नगरपालिका <br /> नेपाल सरकार
                    </p>
                </div>

                {/* Flag */}
                <div className="hidden sm:block ml-2">
                    <img src={Flag} alt='Flag' className='h-12 sm:h-16 md:h-20 w-auto' />
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="ml-auto md:hidden p-2 focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="absolute top-full left-0 w-full bg-red-700 text-white md:hidden">
                        <ul className="flex flex-col gap-2 p-4 text-sm">
                            <li><Link to="/">Home</Link></li>
                            <li><a href="#">Introduction</a></li>
                            <li><a href="#">Ward Profile</a></li>
                            <li><a href="#">Program and Project</a></li>
                            <li><a href="#">Reports</a></li>
                            <li><a href="#">eGov Services</a></li>
                            <li><a href="#">Notice and Information</a></li>
                            <li><a href="#">Gallery</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">शाखाहरू</a></li>
                        </ul>
                    </div>
                )}
            </nav>

            {/* Desktop Menu */}
            <div className="bg-red-700 text-white p-4 hidden md:block">
                <ul className="flex md:flex-row gap-4 text-base justify-center">
                    <li><Link to="/">Home</Link></li>
                    <li><a href="#">Introduction</a></li>
                    <li><a href="#">Ward Profile</a></li>
                    <li><a href="#">Program and Project</a></li>
                    <li><a href="#">Reports</a></li>
                    <li><a href="#">eGov Services</a></li>
                    <li><a href="#">Notice and Information</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">शाखाहरू</a></li>
                </ul>
            </div>

            {/* News Section */}
            <div className="flex flex-col sm:flex-row overflow-hidden bg-black text-white gap-2 items-center p-2">
                <p className='font-bold text-lg md:text-2xl'>News & Events</p>
                <p className="whitespace-nowrap animate-marquee-right px-4 py-2 text-sm md:text-base">
                    <marquee>स्वास्थ्य विमा सम्बन्धमा । कार्यालय सहयोगी र स्वीपरको अन्तिम नतिजा प्रकाशन सम्बन्धी सूचना । </marquee>
                </p>
            </div>

            {/* Intro Section */}
            <div className="p-4 sm:p-6 md:p-8">
                <div className='flex pt-5 text-base md:text-lg font-bold'>१३औं अधिवेशन ९औं बजेट</div>
                <p className="text-sm sm:text-base leading-relaxed mt-2">
                    गरुडा नगरपालिकाको १३औं नगर सभा तथा नवौं बजेट अधिवेशन २०८२ असार ६ गते, शुक्रबार सफलतापूर्वक सम्पन्न भएको छ ।
नगरसभाको अध्यक्षता गरुडा नगरपालिकाका नगरप्रमुख कन्थमणी प्रसाद जयसवालज्यूले गर्नुभएको थियो।
कार्यक्रमको प्रमुख अतिथि संघीय मामिला तथा सामान्य प्रशासन मन्त्री माननीय राजकुमार गुप्ताज्यू रहनुभएको थियो ।
शिक्षा, स्वास्थ्य, कृषि, सडक, रोजगारी, लघु उद्यम, महिला, बालबालिका, दलित, अपाङ्ग र पछाडि पारिएका वर्गको हितमा नीति तथा कार्यक्रममार्फत अगाडि बढ्ने प्रतिवद्धता व्यक्त गरिएको छ ।
कार्यक्रममा सहभागी हुनुभएको सांसद, वडाध्यक्षहरू, जनप्रतिनिधिहरू, राजनीतिक दलका प्रतिनिधिहरू, नागरिक समाज, सञ्चारकर्मी, सुरक्षा निकाय, कर्मचारी तथा आदरणीय नगरवासी सबैप्रति गरुडा नगरपालिका हार्दिक आभार व्यक्त गर्दछ ।
                    {/* Rest of your Nepali paragraph content */}
                </p>
           
            </div>
            <div>
                <Gallery/>
            </div>

         

        </div>
    );
};

export default Intro2;
