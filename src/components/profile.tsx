import {
  FaArrowRight,
  FaCreditCard,
  FaQuestionCircle,
  FaUserAlt,
  FaEllipsisH,
  
} from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import Image from "next/image";
import Card from "./element/card";
import { cardData, menuItems } from "@/constant";
import { PiHandWithdrawFill } from "react-icons/pi";

const Profile = () => {
  return (
    <div className="w-full max-w-[360px] mx-auto border border-slate-300 rounded-lg  p-2">
      <div className="relative mb-4">
        <div className="flex justify-between mb-4">
          <FaUserAlt className="text-gray-400 text-xl" />
          <FaEllipsisH className="text-gray-400 text-xl" />
        </div>
        <div className="relative w-32 h-32 mx-auto sm:w-40 sm:h-40">
          <div className="w-full h-full bg-blue-100 rounded-full overflow-hidden">
            <Image
              src="/.png"
              alt="Profile"
              width={50}
              height={50}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="w-full h-full border-4 border-purple-500 rounded-full border-t-transparent rotate-45"></div>
          </div>
          <span className="absolute flex justify-center items-center top-[-12px] right-[-12px] bg-orange-600 rounded-full p-1.5 w-8 h-8 sm:top-[-16px] sm:right-[-16px] sm:p-2 sm:w-10 sm:h-10">
            <FaCirclePlus className="text-white h-5 w-5 sm:h-6 sm:w-6" />
          </span>
        </div>
        <h2 className="text-xl font-semibold text-center mt-4 text-gray-700 sm:text-2xl">
          Clayton Santos
        </h2>
      </div>
      <div className="p-2">
        <span className="text-sm font-bold text-gray-700 mb-4 flex justify-between items-center">
          Accounts and Cards
          <FaEllipsisH className="text-gray-400 text-xl" />
        </span>


       <div className="">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="flex items-center justify-between mb-4"
            >
              <div className="flex items-center">
                <div
                  className={`w-14 h-9 ${card.color} rounded-lg mr-3 flex flex-col items-center justify-center text-white font-bold sm:w-16 sm:h-10 sm:mr-4`}
                >
                  {card.id}
                  <card.icon className="mb-1" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {card.type}
                  </p>
                  <p className="font-semibold text-gray-800 text-sm sm:text-base">
                    {card.balance} $
                  </p>
                </div>
              </div>
              <div className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center sm:w-8 sm:h-8">
                <FaArrowRight className="text-gray-400 text-sm sm:text-base" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4 text-gray-600 ">
        <h3 className="font-bold mb-2 text-sm sm:text-base">Settings</h3>
        {menuItems.map((item, index) => (
          <div key={index} className="flex gap-8 items-center py-1.5 sm:py-2">
            <span className="w-12 h-12 text-sm text-gray-600 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center">
              <item.icon />
            </span>
            <span className="text-sm sm:text-base">{item.text}</span>
          </div>
        ))}
      </div>
      <div className="bg-orange-100  rounded-lg flex flex-col py-20 gap-8 items-center">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-600 rounded-full flex items-center justify-center ">
          <PiHandWithdrawFill className="text-xl text-yellow sm:text-2xl" />
        </div>
        <div className="flex flex-col gap-3 items-center">
          <p className="font-bold text-red-500 text-sm sm:text-base">
            Do you need help?
          </p>
          <p className="text-purple-600 text-xs font-bold sm:text-sm">1-800-MY-BANK</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
