import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Sample notices with createdAt timestamps (use real dates from DB if available)
const notices = [
  {
    title: "करारमा कर्मचारी पदपुर्तिको लागि दरखास्त आह्वान सम्बन्धी सूचना ।",
    createdAt: "2025-08-29T09:00:00Z",
    link: "/notice/1",
  },
  {
    title: "स्वास्थ्य विमा सम्बन्धमा ।",
    createdAt: "2025-08-28T10:30:00Z",
    link: "/notice/2",
  },
  {
    title: "कार्यालय सहयोगी र स्वीपरको अन्तिम नतिजा प्रकाशन सम्बन्धी सूचना ।",
    createdAt: "2025-08-20T14:00:00Z",
    link: "/notice/3",
  },
  {
    title: "आ.व.२०८२/०८३ को लागि आन्तिरिक आय ठेक्का सम्बन्धि शिलबन्दी दरभाउ पत्र आह्वानको सूचना ।",
    createdAt: "2025-08-15T08:00:00Z",
    link: "/notice/4",
  },
  {
    title: "औषधी उपचार खर्च नविकरण सम्बन्धी सूचना ।",
    createdAt: "2025-07-20T09:15:00Z",
    link: "/notice/5",
  },
  {
    title: "आ.व.२०८१/२०८२ को सम्पत्ति विवरण पेश गर्ने सम्बन्धमा ।",
    createdAt: "2025-07-10T07:45:00Z",
    link: "/notice/6",
  },
  {
    title: "सामाजिक सुरक्षा भत्ता परिचयपत्र नवीकरण तथा लाभग्राही सुचीकरण सम्बन्धमा ।",
    createdAt: "2025-07-08T12:00:00Z",
    link: "/notice/7",
  },
  {
    title: "आ.व.२०८२/०८३ को लागि आन्तिरिक आय ठेक्का सम्बन्धि शिलबन्दी दरभाउ पत्र आह्वानको सूचना ।",
    createdAt: "2025-06-25T15:00:00Z",
    link: "/notice/8",
  },
  {
    title: "आर्थिक वर्ष २०८२/०८३ को नीति तथा कार्यक्रम ।",
    createdAt: "2025-06-20T10:00:00Z",
    link: "/notice/9",
  },
  {
    title:
      "गरुडा नगरपालिका नगर सभाको १३औं अधिवेशन ९औं बजेट अधिवेशन सम्पन्न...",
    createdAt: "2025-06-15T09:00:00Z",
    link: "/Intro2",
  },
  {
    title:
      "नगर सभा तेह्रौं अधिवेशन तथा नवौं बजेट अधिवेशन पारम्भ हुने मिति परिवर्तन...",
    createdAt: "2025-06-12T11:30:00Z",
    link: "/notice/11",
  },
];

// Function to calculate relative time
const getTimeAgo = (dateString) => {
  const now = new Date();
  const created = new Date(dateString);
  const diffMs = now - created;

  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);

  if (months > 0) {
    return `${months} month${months > 1 ? "s" : ""} ${days % 30} day${days % 30 > 1 ? "s" : ""} ago`;
  } else if (weeks > 0) {
    return `${weeks} week${weeks > 1 ? "s" : ""} ${days % 7} day${days % 7 > 1 ? "s" : ""} ago`;
  } else if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""} ${hours % 24} hour${hours % 24 > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""} ${minutes % 60} min ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else {
    return "Just now";
  }
};

const NoticePage = () => {
  const [visibleCount, setVisibleCount] = useState(5);
  const [currentTime, setCurrentTime] = useState(new Date());
  const navigate = useNavigate();

  // Auto update every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // 1 min
    return () => clearInterval(interval);
  }, []);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  const handleClick = (link) => {
    navigate(link);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center p-4">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-4 md:p-6">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">
          सूचना / Notice
        </h2>

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
                {getTimeAgo(notice.createdAt)}
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
