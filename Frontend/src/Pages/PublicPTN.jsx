import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import munpic from '../assets/munpic.jpeg';
import Flag from '../assets/Flag.gif';
import { Link, useNavigate } from 'react-router-dom';
import Coin from '../assets/Coin.png';
import Email from '../assets/Email.png';
import notice from '../assets/notice.jpg';
import Footer from '../Components/Footer';


const PublicPTN = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [language, setLanguage] = useState("english"); // default Nepali

    useEffect(() => {
        const timer = setTimeout(() => setShowPopup(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    const toggleLanguage = () => {
        setLanguage(language === "nepali" ? "english" : "nepali");
    };

    // Example translated menu (you can expand for full site text)
    const menuItems = language === "english" ? [
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
            name: "Programs & Projects",
            link: "#",
            sub: [
                { name: "Plans & Projects", link: "/PlanProject" },
                { name: "Budget & Programs", link: "/BudgetProgram" }
            ]
        },
        {
            name: "Reports",
            link: "#",
            sub: [
                { name: "Annual Progress Report", link: "/reports/annual" },
                { name: "Trimester Progress Report", link: "/reports/financial" },
                { name: "Audit Report", link: "/reports/financial" },
                { name: "Monitoring Report", link: "/reports/financial" },
                { name: "Public Hearing", link: "/reports/financial" },
                { name: "Public Aduit", link: "/reports/financial" },
                { name: "Social Audit", link: "/reports/financial" },
                { name: "Publications", link: "/reports/financial" }

            ]
        },
        {
            name: "eGov Services",
            link: "#",
            sub: [
                { name: "eGov Services", link: "/EgovService" },
                { name: "Vital Registration", link: "/reports/annual" },
                { name: "Social Security", link: "/reports/annual" }
            ]
        },

        {
            name: "Notices & Information",
            link: "#",
            sub: [
                { name: "News & Notices", link: "/notice" },
                { name: "Public Procurement/Tenders Notice", link: "/PublicPTN" },
                { name: "Acts, Laws & Directives", link: "/notice" },
                { name: "Tax & Fees", link: "/notice" }

            ]

        },
        { name: "Gallery", link: "/gallery" },
        { name: "Contact", link: "/contact" },
        { name: "Branches", link: "/branch" },
    ] : [
        { name: "गृहपृष्ठ", link: "/" },
        {
            name: "परिचय",
            link: "#",
            sub: [
                { name: "संक्षिप्त परिचय", link: "/intro" },
                { name: "संगठन चार्ट", link: "/intro/chart" },
                { name: "कर्मचारी", link: "/Staff" }
            ]
        },
        { name: "वडा प्रोफाइल", link: "/ward-profile" },
        {
            name: "कार्यक्रम र परियोजना",
            link: "#",
            sub: [
                { name: "योजना तथा परियोजना", link: "/PlanProject" },
                { name: "बजेट र कार्यक्रम", link: "/BudgetProgram" }
            ]
        },
        {
            name: "प्रतिवेदन",
            link: "#",
            sub: [
                { name: "वार्षिक", link: "/reports/annual" },
                { name: "वित्तीय", link: "/reports/financial" }
            ]
        },
        { name: "ई-सरकार सेवा", link: "/egov" },
        { name: "सूचना तथा जानकारी", link: "/notice" },
        { name: "ग्यालरी", link: "/gallery" },
        { name: "सम्पर्क", link: "/contact" },
        { name: "शाखाहरू", link: "/branch" },
    ];

    return (
        <div>
            {/* Popup Modal */}
            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg shadow-lg max-w-sm sm:max-w-md md:max-w-lg w-full relative">
                        <button onClick={() => setShowPopup(false)} className="absolute top-2 right-2 text-black bg-white rounded-full p-1 shadow hover:bg-gray-200">✕</button>
                        <img src={notice} alt="Popup" className="w-120 h-160 rounded-lg object-cover" />
                    </div>
                </div>
            )}

            {/* Top Contact Bar */}
            <div className='flex justify-between items-center bg-red-600 text-white p-2 text-sm md:text-base gap-4'>
                <div className='flex gap-4'>
                    <p className='flex items-center gap-2'>
                        <img className='w-7 h-7 object-contain' src={Coin} alt="Call Icon" />
                        055-565201
                    </p>
                    <p className='flex items-center gap-2'>
                        <img className='w-7 h-7 object-contain' src={Email} alt="Email Icon" />
                        itofficer.garudamun@gmail.com / info@garudamun.gov.np
                    </p>
                </div>
                {/* Language Toggle */}
                <button
                    onClick={toggleLanguage}
                    className="bg-white text-red-600 px-3 py-1 rounded shadow hover:bg-gray-100 text-xs sm:text-sm"
                >
                    {language === "nepali" ? "English" : "नेपाली"}
                </button>
            </div>

            {/* Header / Navbar */}
            <nav className="flex items-center p-4 md:p-6 bg-white shadow-md gap-2 relative">
                <img src={logo} alt="Logo" className="h-12 w-14 sm:h-16 sm:w-20 md:h-20 md:w-24 cursor-pointer" onClick={() => navigate('/')} />
                <p className="text-base sm:text-lg md:text-2xl font-bold text-red-700 ml-2">
                    {language === "nepali" ? (
                        <>
                            गरुडा नगरपालिका <br className="hidden sm:block" />
                            मधेश प्रदेश, नेपाल <br className="hidden sm:block" />
                            नेपाल सरकार
                        </>
                    ) : (
                        <>
                            Garuda Municipality <br className="hidden sm:block" />
                            Madhesh Province, Nepal <br className="hidden sm:block" />
                            Government of Nepal
                        </>
                    )}
                </p>
                <div className="ml-auto hidden md:block">
                    <img src={munpic} alt="Municipality" className="h-12 sm:h-16 md:h-20 w-auto" />
                </div>
                <div className="hidden sm:block ml-2">
                    <img src={Flag} alt='Flag' className='h-12 sm:h-16 md:h-20 w-auto' />
                </div>
                <button className="ml-auto md:hidden p-2 focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="bg-red-700 text-white md:hidden z-50">
                    <ul className="flex flex-col gap-2 p-4 text-sm">
                        {menuItems.map((item, idx) => (
                            <li key={idx}>
                                <details>
                                    <summary className="cursor-pointer">{item.name}</summary>
                                    {item.sub && (
                                        <ul className="pl-4 mt-1 flex flex-col gap-1">
                                            {item.sub.map((subItem, subIdx) => (
                                                <li key={subIdx}><Link to={subItem.link}>{subItem.name}</Link></li>
                                            ))}
                                        </ul>
                                    )}
                                </details>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Desktop Menu */}
            <div className="bg-red-700 text-white p-4 hidden md:block">
                <ul className="flex md:flex-row gap-4 text-base justify-center">
                    {menuItems.map((item, idx) => (
                        <li key={idx} className="relative"
                            onMouseEnter={() => setOpenDropdown(item.name)}
                            onMouseLeave={() => setOpenDropdown(null)}>
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

            {/* Budget & Program Section */}
            <div className='max-w-7xl mx-auto my-4 border border-gray-300 rounded-lg shadow-md'>
                <div className='p-4 sm:p-6 md:p-8'>
                    <h2 className='font-bold text-lg sm:text-2xl text-green-500 border-b-2 border-gray-400 pb-2'>
                        Public Procurement/Tender Notices
                    </h2>
                    <h2 className='font-bold text-base sm:text-xl md:text-2xl mt-4 border-b-2 border-gray-300 pb-2'>
                        आ.व. २०७९/०८० को लागि आन्तरिक आय ठेक्का सम्बन्धि बोल पत्र आह्वानको सुचना |
                    </h2>
                    <p className='mt-4 font-semibold text-sm sm:text-base'>Supporting Documents:</p>
                    <a
                        href="https://drive.google.com/file/d/1Dtfcut7M5uvXiYCGzGxfgiAHgYOo3UUq/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 px-3 sm:px-4 py-2 bg-pink-500 text-white text-sm sm:text-base font-bold rounded-lg shadow hover:bg-red-700"
                    >
                        📄 a आ व २०८९ ०८० को लागि आन्तरिक आय ठेक्का सम्बन्धि बोल पत्र आह्वानको सुचना. PDF
                    </a>
                </div>

                <div className='p-4 sm:p-6 md:p-8'>
                    <h2 className='font-bold text-base sm:text-xl md:text-2xl mt-4 border-b-2 border-gray-300 pb-2'>
                        आ.व. २०७९/०८० को लागि आन्तरिक आय ठेक्का सम्बन्धि बोल पत्र आह्वानको सुचना |
                    </h2>
                    <p className='mt-4 font-semibold text-sm sm:text-base'>Supporting Documents:</p>
                    <a
                        href="https://drive.google.com/file/d/1Dtfcut7M5uvXiYCGzGxfgiAHgYOo3UUq/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 px-3 sm:px-4 py-2 bg-pink-500 text-white text-sm sm:text-base font-bold rounded-lg shadow hover:bg-red-700"
                    >
                        📄 a आ व २०८९ ०८० को लागि आन्तरिक आय ठेक्का सम्बन्धि बोल पत्र आह्वानको सुचना.PDF
                    </a>
                </div>

                <div className='p-4 sm:p-6 md:p-8'>
                    <p className='mt-3 font-bold text-lg sm:text-xl md:text-2xl'>
                        डर रेट उपलब्ध गराईदिने सम्बन्धमा |
                    </p>
                    <p className='mt-4 font-semibold text-sm sm:text-base'>Supporting Documents:</p>
                    <a
                        href="https://drive.google.com/file/d/1Dtfcut7M5uvXiYCGzGxfgiAHgYOo3UUq/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 px-3 sm:px-4 py-2 bg-pink-500 text-white text-sm sm:text-base font-bold rounded-lg shadow hover:bg-red-700"
                    >
                        📄  डर रेट उपलब्ध गराईदिने सम्बन्धमा. PDF
                    </a>
                </div>
            </div>
            <Footer />
        </div>

    );
};

export default PublicPTN
