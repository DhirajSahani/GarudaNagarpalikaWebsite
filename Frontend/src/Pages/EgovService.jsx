import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import munpic from '../assets/munpic.jpeg';
import Flag from '../assets/Flag.gif';
import { Link, useNavigate } from 'react-router-dom';
import Coin from '../assets/Coin.png';
import Email from '../assets/Email.png';
import notice from '../assets/notice.jpg';

const EgovService = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowPopup(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    const menuItems = [
        { name: "Home", link: "/" },
        {
            name: "Introduction",
            link: "#",
            sub: [
                { name: "Brief Introduction", link: "/intro" },
                { name: "Organization Chart", link: "/intro/chart" },
                { name: "Staff", link: "/Staff" }
            ]
        },
        { name: "Ward Profile", link: "/ward-profile" },
        {
            name: "Program and Project",
            link: "#",
            sub: [
                { name: "Plan & Project", link: "/PlanProject" },
                { name: "Budget and Program", link: "/BudgetProgram" }
            ]
        },
        {
            name: "Reports",
            link: "#",
            sub: [
                { name: "Annual", link: "/reports/annual" },
                { name: "Financial", link: "/reports/financial" }
            ]
        },
        {
            name: "eGov Services",
            link: "#",
            sub: [
                { name: "Service 1", link: "/egov/service1" },
                { name: "Service 2", link: "/egov/service2" }
            ]
        },
        {
            name: "Notice and Information",
            link: "#",
            sub: [
                { name: "Notices", link: "/notice" },
                { name: "Circulars", link: "/notice/circulars" }
            ]
        },
        {
            name: "Gallery",
            link: "#",
            sub: [
                { name: "Photos", link: "/gallery/photos" },
                { name: "Videos", link: "/gallery/videos" }
            ]
        },
        {
            name: "Contact",
            link: "#",
            sub: [
                { name: "Offices", link: "/contact/offices" },
                { name: "Phone Numbers", link: "/contact/phones" }
            ]
        },
        {
            name: "शाखाहरू",
            link: "#",
            sub: [
                { name: "Branch 1", link: "/branch/1" },
                { name: "Branch 2", link: "/branch/2" }
            ]
        }
    ];

    return (
        <div>
            {/* Popup Modal */}
            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg shadow-lg max-w-sm sm:max-w-md md:max-w-lg w-full relative">
                        <button
                            onClick={() => setShowPopup(false)}
                            className="absolute top-2 right-2 text-black bg-white rounded-full p-1 shadow hover:bg-gray-200"
                        >
                            ✕
                        </button>
                        <img src={notice} alt="Popup" className="w-full h-auto rounded-lg object-cover" />
                    </div>
                </div>
            )}

            {/* Top Contact Bar */}
            <div className='flex flex-col sm:flex-row sm:justify-end bg-red-600 text-white p-2 text-xs sm:text-sm md:text-base gap-2 sm:gap-4'>
                <p className='flex items-center gap-2 justify-center sm:justify-start'>
                    <img className='w-5 h-5 sm:w-7 sm:h-7 object-contain' src={Coin} alt="Call Icon" />
                    055-565201
                </p>
                <p className='flex items-center gap-2 justify-center sm:justify-start'>
                    <img className='w-5 h-5 sm:w-7 sm:h-7 object-contain' src={Email} alt="Email Icon" />
                    itofficer.garudamun@gmail.com / info@garudamun.gov.np
                </p>
            </div>

            {/* Header / Navbar */}
            <nav className="flex items-center p-3 sm:p-4 md:p-6 bg-white shadow-md gap-2 relative">
                <img
                    src={logo}
                    alt="Logo"
                    className="h-10 w-12 sm:h-14 sm:w-16 md:h-20 md:w-24 cursor-pointer"
                    onClick={() => navigate('/')}
                />
                <p className="text-sm sm:text-lg md:text-2xl font-bold text-red-700 ml-2 leading-tight">
                    Garuda Municipality <br className="hidden sm:block" />
                    मधेश प्रदेश, नेपाल <br className="hidden sm:block" />
                    Government of Nepal
                </p>
                <div className="ml-auto hidden md:block">
                    <img src={munpic} alt="Municipality" className="h-12 sm:h-16 md:h-20 w-auto" />
                </div>
                <div className="hidden sm:block ml-4">
                    <p className="text-xs sm:text-base md:text-lg font-bold text-gray-700">
                        गरुडा नगरपालिका <br /> नेपाल सरकार
                    </p>
                </div>
                <div className="hidden sm:block ml-2">
                    <img src={Flag} alt='Flag' className='h-10 sm:h-14 md:h-20 w-auto' />
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="ml-auto md:hidden text-red-700 font-bold text-2xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="bg-red-700 text-white p-4 md:hidden">
                    <ul className="flex flex-col gap-2 text-sm sm:text-base">
                        {menuItems.map((item, idx) => (
                            <li key={idx}>
                                <button
                                    className="w-full text-left flex justify-between items-center"
                                    onClick={() =>
                                        setOpenDropdown(openDropdown === item.name ? null : item.name)
                                    }
                                >
                                    {item.link !== "#" ? (
                                        <Link to={item.link}>{item.name}</Link>
                                    ) : (
                                        item.name
                                    )}
                                    {item.sub && <span>{openDropdown === item.name ? "▲" : "▼"}</span>}
                                </button>
                                {item.sub && openDropdown === item.name && (
                                    <ul className="pl-4 mt-1 space-y-1">
                                        {item.sub.map((subItem, subIdx) => (
                                            <li key={subIdx}>
                                                <Link to={subItem.link} className="hover:underline">
                                                    {subItem.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Desktop Menu */}
            <div className="bg-red-700 text-white p-4 hidden md:block">
                <ul className="flex md:flex-row gap-6 text-base justify-center">
                    {menuItems.map((item, idx) => (
                        <li
                            key={idx}
                            className="relative"
                            onMouseEnter={() => setOpenDropdown(item.name)}
                            onMouseLeave={() => setOpenDropdown(null)}
                        >
                            <Link to={item.link}>{item.name}</Link>
                            {item.sub && openDropdown === item.name && (
                                <ul className="absolute top-full left-0 bg-black text-white p-2 rounded shadow-md min-w-[150px] z-50">
                                    {item.sub.map((subItem, subIdx) => (
                                        <li key={subIdx} className="p-1 hover:bg-pink-600 rounded">
                                            <Link to={subItem.link}>{subItem.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* News Section */}
            <div className="flex flex-col sm:flex-row overflow-hidden bg-black text-white gap-2 items-center p-2">
                <p className='font-bold text-sm sm:text-lg md:text-2xl'>सूचना तथा समाचार |</p>
                <marquee className="whitespace-nowrap px-4 py-1 text-xs sm:text-sm md:text-base">
                    स्वास्थ्य विमा सम्बन्धमा । कार्यालय सहयोगी र स्वीपरको अन्तिम नतिजा प्रकाशन सम्बन्धी सूचना ।
                </marquee>
            </div>

            {/* Budget & Program Section */}
            <div className='max-w-7xl mx-auto my-4 border border-gray-300 rounded-lg shadow-md'>
                <div className='p-4 sm:p-6 md:p-8'>
                    <h2 className='font-bold text-lg sm:text-2xl text-green-500 border-b-2 border-gray-400 pb-2'>
                        eGov-Services....
                    </h2>
                    <h2 className='font-bold text-base sm:text-xl md:text-2xl mt-4 border-b-2 border-gray-300 pb-2'>
                        सामाजिक सुरक्षा भत्ता पाउने लाभग्राहीहरुको विवरण |
                    </h2>
                    <a
                        href="https://drive.google.com/file/d/1Dtfcut7M5uvXiYCGzGxfgiAHgYOo3UUq/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 px-3 sm:px-4 py-2 bg-black text-white text-sm sm:text-base font-bold rounded-lg shadow hover:bg-red-700"
                    >
                        📄 सामाजिक सुरक्षा भत्ता पाउने लाभग्राहीहरुको विवरण. PDF
                    </a>
                </div>



            </div>
        </div>
    );
};

export default EgovService
