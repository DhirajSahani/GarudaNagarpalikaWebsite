import React, { useState } from 'react';
import logo from '../assets/logo.png';
import munpic from '../assets/munpic.jpeg';
import flag from '../assets/flag.gif';
import { Link, useNavigate } from 'react-router-dom';

const Intro = () => {
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
                    <img src={flag} alt='Flag' className='h-12 sm:h-16 md:h-20 w-auto' />
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
                    This text moves continuously to the right!
                </p>
            </div>

            {/* Intro Section */}
            <div className="p-4 sm:p-6 md:p-8">
                <div className='flex pt-5 text-base md:text-lg font-bold'>संक्षिप्त परिचय</div>
                <p className="text-sm sm:text-base leading-relaxed mt-2">
                    भौगोलिक अवस्था :- संघिय लोकतान्त्रिक गणतन्त्र नेपालको मधेश  प्रदेश  अन्तर्गत पर्ने तराई क्षेत्रको जिल्ला रौतहट सदरमुकाम गौर भन्दा उतर २२ कि.मी र चंद्रपुर भन्दा २० कि.मी दक्षिणमा रहेको रौतहट जिल्लाको मध्य भागमा रहेको गरुडा नगरपालिकाको पूर्वमा गढ़िमाइ नगरपालिका, पश्चिममा कटहरिया नगरपालिका, उत्तरमा वृन्दावन नगरपालिका र दक्षिणमा माधवनारायण नगरपालिका रहेको छ । विं. स. २०७१ मंसिर १६ गतेको नेपाल सरकार मन्त्रिपरिषदको निर्णय बमोजिम विं. स.२०७१ पुस २१ गते औपचारिक रुपमा साविकको गा.बि.स.हरु गरुडा बैरिया , महमदपुर, जयनगर, गेडहीगुठी, मलाही, पोठियाही र बसबिट्टी जिगडिया समायोजन भै गरुडा नगरपालिकाको स्थापना भएको हो । यसपश्चात लोकतान्त्रिक गणतन्त्रात्मक राज्य व्यवस्था पश्चात स्थानीय तह पूर्नसंरचनाका लागि गरिएको निर्णयानुसार साविक गा.बि.स. पिपरिया दोस्तिया र रघुनाथपुर् गाविसको समायोजन भइ ९ वटा वडा सहितको नगरपालिको प्रवद्धिकरण भएको हो । यस नगरपालिकाको क्षेत्रफल ४४ .४६ वर्ग कि.मी. रहेको छ । जातिय, धार्मिक, भाषिक, साँस्कृतिक, सामाजिक तथा राजनैतिक महत्व तथा विशेषता बोकेको यस गरुडा नगरपालिकाले आफ्नै खालको धार्मिक, राजनैतिक र सामाजिक महत्व र विशेषता बोकेको छ । सामाजिक अवस्था :- गरुडा न.पा. रौतहटकै प्रगति उन्मुख नगर हो । जहाँ बिजुली, बत्ती, खानेपानी, बाटो घाटो, पुल, अस्पताल, विद्यालय उच्चशिक्षा खेलकुद लगायत सम्पूर्ण दृष्टिले  सु सम्पन्न नगर हो ।यहाँ मुख्यत व्यापार ब्यबशाय ,कृषि मुख्य आम्दानीको स्रोत रहेको छ  । यहाँ मुस्लिम,यादव,कलवार लगायत बिभिन्न जातजातिको बसोबास रहेको छ l। यस नगरपालिकाको वडा नम्बर ५ शिवनगरमा रहेको शिव मन्दिर आकर्षण को केन्द्र रहेको छ ।बिभिन्न धर्म सस्कृती मान्ने व्यक्तिहरुको बसोबास रहेको  यस नगरपालिकामा एक अर्का प्रति सहयोग र अपनत्वको भावना देखिन्छ।बिभिन्न भाषाभाषी को बासोबास रहेको यस नगरपालिकामा मुख्यत बज्जिका भाषा बोलिन्छ ।
                    {/* Rest of your Nepali paragraph content */}
                </p>
           
            </div>

         

        </div>
    );
};

export default Intro;
