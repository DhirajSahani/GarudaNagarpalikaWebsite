
import { Link } from 'react-router-dom';
import munpic from '../assets/munpic.jpeg';
import planimg from '../assets/planimg.jpg';



const Footer = () => {
  const linkSections = [
    {
      title: "Notices",
      links: [
        { label: "News and Notices", url: "/intro" },
        { label: "Public Procurement/ Tender Notices", url: "/tender-notices" },
        { label: "Act, law and directives", url: "/acts-laws" },
        { label: "Tax and Fees", url: "/tax-fees" },
        { label: "FAQs", url: "/faqs" },
      ],
    },
    {
      title: "eGov services",
      links: [
        { label: "Vital Registration", url: "/vital-registration" },
        { label: "Social Security", url: "/social-security" },
        { label: "Application Letter", url: "/application-letter" },
        { label: "न्यायिक समिति", url: "/judicial-committee" },
      ],
    },
    {
      title: "Contact Details",
      links: [
        { label: "गरुडा नगरपालिका", url: "#" },
        { label: "नगर कार्यपालिकाको  कार्यालय गरुडा, रौतहट ", url: "#" },
        { label: "मधेश प्रदेश, नेपाल", url: "#" },
        { label: "टोल फ्री नं.: १६६०५५५२००१", url: "tel:16605552001" },
        { label: "फोन नं. : +९७७ ०५५-५६५२०१", url: "tel:+977055565201" },
        { label: "इमेल: info@garudamun.gov.np", url: "mailto:info@garudamun.gov.np" },
        { label: "फ्याक्स:नं.  +९७७ ०५५-५६५२०१", url: "#" },
      ],
    },
    {
      title: "Reports",
      links: [
        { label: "Annual Progress Report", url: "/annual-report" },
        { label: "Trimester Progress Report", url: "/trimester-report" },
        { label: "Public Hearing", url: "/public-hearing" },
        { label: "Public Audit", url: "/public-audit" },
      ],
    },
  ];

  return (
    <footer
      className="relative text-white"
      style={{
        backgroundImage: `url(${planimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-8 sm:py-12">
        {/* Top section */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-10">
          
          {/* Logo & Description */}
          <div className="flex-1 text-center md:text-left">
            <img className="mx-auto md:mx-0 w-20 md:w-24 lg:w-28 rounded-md shadow" src={munpic} alt="Garuda Municipality Logo" />
            <p className="text-xs sm:text-sm md:text-base mt-4 leading-relaxed text-gray-200">
              गरुडा नगरपालिका रौतहट जिल्लाका १६ नगरपालिकाहरू मध्ये एक हो। 
              स्थानीय विकास मन्त्रालयले थप ६१ वटा नयाँ नगरपालिका थप्दा रौतहट जिल्लामा 
              गरुडा बैरीया, महम्मदपुर, पोठीयाही, गेडही गुठी, मलाही , बसविट्टी जिगडीया र जयनगर 
              गरी ७ गाउँ विकास समितिहरू लाई समेटेर गरुडा नगरपालिका घोषणा गरेको थियो। 
              २७ फागुन २०७३ मा क्षेत्र विस्तार गर्दा रधुनाथपुर र पिपरीया दोस्तीया गाविसलाई 
              पनि यसमा गाभिएको थियो। गरुडा नगरपालिकाको केन्द्र गरुडा बैरीया बजारमा रहेको छ।
            </p>
          </div>

          {/* Links Section */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center md:text-left">
            {linkSections.map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-white text-sm sm:text-base mb-2 sm:mb-4">{section.title}</h3>
                <ul className="space-y-1 text-xs sm:text-sm text-gray-300">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      {link.url.startsWith('http') || link.url.startsWith('mailto') || link.url.startsWith('tel') ? (
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline hover:text-yellow-300 transition"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          to={link.url}
                          className="hover:underline hover:text-yellow-300 transition"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-gray-500 mt-8 sm:mt-10 pt-3 sm:pt-4 text-center">
          <p className="text-[10px] sm:text-xs md:text-sm text-gray-400">
            © {new Date().getFullYear()} Garuda Municipality, Rautahat. All rights reserved. Developed by 
            <a href="https://www.facebook.com/babu.engineer.7" target="_blank" rel="noopener noreferrer" className="hover:underline ml-1 text-yellow-300"> Engineer Dhiraj </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
