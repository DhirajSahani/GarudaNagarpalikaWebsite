import React from "react";
import Kanthmuni from "../assets/Kanthmuni.PNG";
import punampic from "../assets/punampic.PNG";
import alampic from "../assets/alampic.PNG";

const cardData = [
  {
    name: "कण्ठमणि प्रसाद जयसवाल",
    title: "नगर प्रमुख",
    contact: "9855042207",
    image: Kanthmuni,
  },
  {
      name: "पुनम कुमारी चौधरी",
    title: "उप– प्रमुख",
    contact: "9855042000",
    image: punampic,
  },
  {
      name: "मो.मुस्ताक आलम",
    title: "प्रमुख प्रशासकीय अधिकृत",
    contact: "9855089111",
    image: alampic,
  },
];

const Card = () => {
  return (
    <div className="flex flex-wrap justify-center  items-center gap-6 w-full px-4 py-6">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl overflow-hidden border border-gray-300 shadow-sm hover:shadow-lg transition w-72 sm:w-80"
        >
          {/* Image */}
          <div className="overflow-hidden">
            <img
              className="w-full h-60 sm:h-72 object-cover object-top transform hover:scale-105 transition duration-300"
              src={card.image}
              alt={card.name}
            />
          </div>

          {/* Text */}
          <div className="flex flex-col  items-center p-4">
            <p className="font-bold text-lg">{card.name}</p>
            <p className="text-gray-500  text-sm">{card.title}</p>
            {card.contact === "message" ? (
              <button className="border text-sm text-gray-600 border-gray-400 w-28 h-8 rounded-full mt-4 hover:bg-gray-100">
                {card.contact}
              </button>
            ) : (
              <p className="mt-2 text-sm">{card.contact}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
