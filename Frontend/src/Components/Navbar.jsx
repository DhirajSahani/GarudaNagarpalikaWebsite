import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import munpic from '../assets/munpic.jpeg';
import flag from '../assets/flag.gif';
import Card from './Card';
import ImageSlider from './ImageSlider';
import { Link, useNavigate } from 'react-router-dom';
import Coin from '../assets/Coin.png';
import Email from '../assets/Email.png';
import notice from '../assets/notice.jpg';
import NoticePage from './NoticePage';
import OfficialLinksPage from './OfficialLinksPage';
import Footer from './Footer';

const Navbar = () => {
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
            <button onClick={() => setShowPopup(false)} className="absolute top-2 right-2 text-black bg-white rounded-full p-1 shadow hover:bg-gray-200">✕</button>
            <img src={notice} alt="Popup" className="w-120 h-160 rounded-lg object-cover" />
          </div>
        </div>
      )}

      {/* Top Contact Bar */}
      <div className='flex justify-end bg-red-600 text-white p-2 text-sm md:text-base gap-4'>
        <p className='flex items-center gap-2'>
          <img className='w-7 h-7 object-contain' src={Coin} alt="Call Icon" />
          055-565201
        </p>
        <p className='flex items-center gap-2'>
          <img className='w-7 h-7 object-contain' src={Email} alt="Email Icon" />
          itofficer.garudamun@gmail.com / info@garudamun.gov.np
        </p>
      </div>

      {/* Header / Navbar */}
      <nav className="flex items-center p-4 md:p-6 bg-white shadow-md gap-2 relative">
        <img src={logo} alt="Logo" className="h-12 w-14 sm:h-16 sm:w-20 md:h-20 md:w-24 cursor-pointer" onClick={() => navigate('/')} />
        <p className="text-base sm:text-lg md:text-2xl font-bold text-red-700 ml-2">
          Garuda Municipality <br className="hidden sm:block" />
          मधेश प्रदेश, नेपाल <br className="hidden sm:block" />
          Government of Nepal
        </p>
        <div className="ml-auto hidden md:block">
          <img src={munpic} alt="Municipality" className="h-12 sm:h-16 md:h-20 w-auto" />
        </div>
        <div className="hidden sm:block ml-4">
          <p className="text-sm sm:text-base md:text-lg font-bold text-gray-700">
            गरुडा नगरपालिका <br /> नेपाल सरकार
          </p>
        </div>
        <div className="hidden sm:block ml-2">
          <img src={flag} alt='Flag' className='h-12 sm:h-16 md:h-20 w-auto' />
        </div>
        <button className="ml-auto md:hidden p-2 focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-red-700 text-white md:hidden z-50">
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
      </nav>

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

      {/* News Section */}
      <div className="flex flex-col sm:flex-row overflow-hidden bg-black text-white gap-2 items-center p-2">
        <p className='font-bold text-lg md:text-2xl'>सूचना तथा समाचार |</p>
        <marquee className="whitespace-nowrap px-4 py-2 text-sm md:text-base">
          स्वास्थ्य विमा सम्बन्धमा । कार्यालय सहयोगी र स्वीपरको अन्तिम नतिजा प्रकाशन सम्बन्धी सूचना ।
        </marquee>
      </div>

      <ImageSlider />
      <div className='p-6 md:p-10'>
        <Card />
      </div>

      {/*Inrto section */}
      <div className='flex flex-col gap-4 md:gap-0 md:flex-row justify-between border-t border-b border-gray-300'> <div className='p-6 md:p-10 gap-4'> <h1 className='font-bold text-base md:text-xl'>संक्षिप्त परिचय</h1> <p className='p-2 text-sm md:text-base leading-relaxed'> भौगोलिक अवस्था :- संघिय लोकतान्त्रिक गणतन्त्र नेपालको मधेश प्रदेश <br /> अन्तर्गत पर्ने तराई क्षेत्रको जिल्ला रौतहट सदरमुकाम गौर भन्दा उतर २२ कि.मी... </p> <Link to="/intro" className="text-blue-600 underline">Read More</Link> </div> <div className='flex-col md:flex-row flex'> <div className='p-6 md:p-10 gap-4'> <h1 className='font-bold text-base md:text-xl'>१३औं अधिवेशन ९औं बजेट</h1> <p className='p-2 text-sm md:text-base leading-relaxed'> गरुडा नगरपालिकाको १३औं नगर सभा तथा नवौं बजेट अधिवेशन<br /> २०८२ असार ६ गते, शुक्रबार सफलतापूर्वक सम्पन्न भएको छ । नगरसभाको अध्यक्षता गरुडा नगरपालिकाका नगरप्रमुख कन्थमणी प्रसाद </p> <Link to="/intro2" className="text-blue-600 underline">Read More</Link> </div> </div> <div className='flex-col md:flex-row flex'> <div className='p-6 md:p-10 gap-4'> <h1 className='font-bold text-base md:text-xl'>गरुडा नगरपालिकाको नगर सभाको १२ औ <br /> अधिवेशनको बैठक सम्पन्न</h1> <p className='p-2 text-sm md:text-base leading-relaxed'> रौतहट जिल्लाको गरुडा नगरपालिका आफ्नो हिउँदे अधिवेशन सोमबार सम्पन्न गरेको छ । गरुडा नगरपालिकाको सभाहलमा एक कार्यक्रमका बीच नगरसभाको (१२)<br /> बाह्रौँ अधिवेशन–२०८१ सम्पन्न गरेको हो । गरुडा नगरपालिकाको .... </p> <Link to="/intro3" className="text-blue-600 underline">Read More</Link> </div> </div> </div>
      {/* ...rest sections */}
      <div className='flex flex-col md:flex-row gap-4 md:gap-0 justify-between border-b border-gray-300'>
        <NoticePage />
        <OfficialLinksPage />
      </div>
      <Footer />
    </div>
  );
};

export default Navbar;
