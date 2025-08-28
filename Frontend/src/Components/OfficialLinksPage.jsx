const officialLinks = [
  { name: "नेपाल सरकार,मुख्यमन्त्री तथा मन्त्रिपरिषदको कार्यालय", url: "https://www.opmcm.gov.np/ministries/" },
  { name: "मधेश प्रदेश पोर्टल", url: "https://madhesh.gov.np/" },
  { name: "मधेश प्रदेश, प्रमुखको कार्यालय", url: "https://ocs.p2.gov.np/" },
  { name: "मधेश प्रदेश, मुख्यमन्त्री तथा मन्त्रिपरिषद्को कार्यालय", url: "https://ocmcm.madhesh.gov.np//" },
  { name: "मधेश प्रदेश, सभा सचिवालय", url: "#" },
  { name: "मधेश प्रदेश, आन्तरिक मामिला तथा सञ्चार मन्त्रालय", url: "#" },
  { name: "मधेश प्रदेश, अर्थ मन्त्रालय", url: "#" },
  { name: "मधेश प्रदेश, उद्योग, पर्यटन, वन तथा वातावरण मन्त्रालय", url: "#" },
  { name: "मधेश प्रदेश, सामाजिक विकास मन्त्रालय", url: "#" },
  { name: "मधेश प्रदेश, भौतिक पूर्वाधार विकास मन्त्रालय", url: "https://mopid.p2.gov.np/" },
  { name: "मधेश प्रदेश, भुमि व्यवस्था, कृषि तथा सहकारी मन्त्रालय", url: "#" },
  { name: "मधेश प्रदेश, मुख्य न्यायाधिवक्ताको कार्यालय", url: "#" },
  { name: "मधेश प्रदेश, प्रदेश लेखा नियन्त्रक कार्यालय", url: "#" },
  { name: "मधेश प्रदेश, प्रदेश नीति तथा योजना आयोग", url: "#" },
  { name: "मधेश प्रदेश, महिला, बालबालिका, युवा तथा खेलकुद मन्त्रालय", url: "http://mowcys.p2.gov.np/" },
  { name: "प्रदेश लोक सेवा आयोग, मधेश प्रदेश", url: "https://ppsc.p2.gov.np/" },
  { name: "अनलाइन जन्म दर्ता प्रणाली (सेवाग्राही)", url: "https://public.donidcr.gov.np/" },
  { name: "स्थानीय तहको वेवसाईटको विवरण", url: "#" },
  { name: "स्थानीय तहको नक्साहरु", url: "#" },
  { name: "संघीय मामिला तथा स्थानीय विकास मन्त्रालय", url: "#" },
  { name: "नेपाल सरकारको आधिकारिक पोर्टल", url: "https://www.nepal.gov.np/" },
  { name: "राजस्वको हिसाब गर्नुहोस", url: "https://web.ird.gov.np/pit_new/" },
  { name: "कर्मचारी संचयकोष ई–अकाउन्ट (व्यक्तिगत)", url: "#" },
  { name: "कर्मचारी संचयकोष ई–अकाउन्ट (कार्यालय प्रयोजन)", url: "#" },
];

const OfficialLinksPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 flex justify-center">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl md:text-2xl font-bold mb-6 text-center">Official <br/>
केहि महत्वपूर्ण लिंङ्कहरु</h1>

        <ul className="divide-y divide-gray-200">
          {officialLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-3 px-2 md:px-4 text-gray-800 font-medium hover:bg-gray-100 rounded transition flex justify-between items-center"
              >
                {link.name}
                <span className="text-gray-400 text-sm md:text-base">&#8594;</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OfficialLinksPage;
