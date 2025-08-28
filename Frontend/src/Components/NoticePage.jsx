import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const notices = [
  { title: "करारमा कर्मचारी पदपुर्तिको लागि दरखास्त आह्वान सम्बन्धी सूचना ।", time: "1 day 23 hours", link: "/notice/1" },
  { title: "स्वास्थ्य विमा सम्बन्धमा ।", time: "2 days 22 hours", link: "/notice/2" },
  { title: "कार्यालय सहयोगी र स्वीपरको अन्तिम नतिजा प्रकाशन सम्बन्धी सूचना ।", time: "1 week 4 days", link: "/notice/3" },
  { title: "आ.व.२०८२/०८३ को लागि आन्तिरिक आय ठेक्का सम्बन्धि शिलबन्दी दरभाउ पत्र आह्वानको सूचना ।", time: "2 weeks 5 days", link: "/notice/4" },
  { title: "औषधी उपचार खर्च नविकरण सम्बन्धी सूचना ।", time: "1 month 6 days", link: "/notice/5" },
  { title: "आ.व.२०८१/२०८२ को सम्पत्ति विवरण पेश गर्ने सम्बन्धमा ।", time: "1 month 1 week", link: "/notice/6" },
  { title: "सामाजिक सुरक्षा भत्ता परिचयपत्र नवीकरण तथा लाभग्राही सुचीकरण सम्बन्धमा ।", time: "1 month 1 week", link: "/notice/7" },
  { title: "आ.व.२०८२/०८३ को लागि आन्तिरिक आय ठेक्का सम्बन्धि शिलबन्दी दरभाउ पत्र आह्वानको सूचना ।", time: "2 months 4 days", link: "/notice/8" },
  { title: "आर्थिक वर्ष २०८२/०८३ को नीति तथा कार्यक्रम ।", time: "2 months 1 week", link: "/notice/9" },
  { title: "गरुडा नगरपालिका नगर सभाको १३औं अधिवेशन ९औं बजेट अधिवेशन सम्पन्न गरुडा नगरपालिकाको १३औं नगर सभा तथा नवौं बजेट अधिवेशन २०८२ असार ६ गते, शुक्रबार सफलतापूर्वक सम्पन्न भएको छ ।...", time: "2 months 1 week", link: "/Intro2" },
  { title: "नगर सभा तेह्रौं अधिवेशन तथा नवौं बजेट अधिवेशन पारम्भ हुने मिति परिवर्तन भएको सम्बन्धमा ।", time: "2 months 1 week", link: "/notice/11" },
];

const NoticePage = () => {
  const [visibleCount, setVisibleCount] = useState(5);
  const navigate = useNavigate();

  const loadMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  const handleClick = (link) => {
    navigate(link);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center p-4">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-4 md:p-6">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">सूचना / Notice</h2>

        <div className="divide-y divide-gray-200">
          {notices.slice(0, visibleCount).map((notice, index) => (
            <div
              key={index}
              onClick={() => handleClick(notice.link)}
              className="flex flex-col md:flex-row justify-between items-start md:items-center py-3 cursor-pointer hover:bg-gray-100 transition rounded"
            >
              <p className="text-gray-800 text-sm md:text-base font-medium md:max-w-[75%]">
                {notice.title}
              </p>
              <span className="text-gray-500 text-xs md:text-sm mt-1 md:mt-0">
                {notice.time}
              </span>
            </div>
          ))}
        </div>

        {visibleCount < notices.length && (
          <div className="flex justify-center mt-4">
            <button
              onClick={loadMore}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
            >
              More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NoticePage;
