import {
  FaArrowRight,
  FaCreditCard,
  FaQuestionCircle,
  FaUserAlt,
  FaEllipsisH,
  
} from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import Image from "next/image";
import { cardData, menuItems } from "@/constant";
import { PiHandWithdrawFill } from "react-icons/pi";


const Profile = () => {
 
  
  return (
    <div className="w-full max-w-md mx-auto  shadow-lg rounded-lg overflow-hidden">
      <div className="relative p-6">
        <div className="flex justify-between mb-4">
          <FaUserAlt className="text-gray-400 text-xl" />
          <FaEllipsisH className="text-gray-400 text-xl" />
        </div>
        <div className="relative w-32 h-32 mx-auto">
          <div className="w-full h-full bg-blue-100 rounded-full overflow-hidden">
            <Image
              src="/profile.png"
              alt="Profile"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="w-full h-full border-4 border-purple-500 rounded-full border-t-transparent rotate-45"></div>
          </div>
          <span className="absolute top-10 right-[-10px] bg-orange-500 rounded-full p-2">
            <FaCirclePlus className="text-white h-5 w-5" />
          </span>
        </div>
        <h2 className="text-xl font-semibold text-center mt-4 text-gray-700">
          Clayton Santos
        </h2>
      </div>

      <div className="px-6 py-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-bold text-gray-700">Accounts and Cards</span>
          <FaEllipsisH className="text-gray-400 text-xl" />
        </div>

        {cardData.map((card) => (
          <div key={card.id} className="flex items-center justify-between mb-4">
            <div className="flex items-center text-[10px]">
            <div className={`w-14 h-9 ${card.color} rounded-lg mr-3 flex flex-col items-center justify-center text-white font-bold`}
              style={{ backgroundColor: card.color }}
            >
                <span className="pr-1">{card.id }</span>
                <card.icon className="mb-1 pl-1" />
              </div>
              <div> 
                <p className="text-gray-600 text-[10px]">{card.type}</p>
                <p className="font-semibold text-gray-800 text-[10px]">{card.balance} $</p>
              </div>
            </div>
            <div className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center">
              <FaArrowRight className="text-gray-400 text-sm" />
            </div>
          </div>
        ))}
      </div>

      <div className="px-6 py-4">
        <h3 className="font-bold mb-4 text-sm text-gray-700">Settings</h3>
        {menuItems.map((item, index) => (
          <div key={index} className="flex items-center py-3">
            <span className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-4">
              <item.icon className="text-gray-500" />
            </span>
            <span className="text-sm text-gray-600">{item.text}</span>
          </div>
        ))}
      </div>

      <div className="bg-orange-100 m-6 rounded-lg flex flex-col py-8 items-center">
        <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4">
          <PiHandWithdrawFill className="text-2xl text-yellow-400" />
        </div>
        <p className="font-bold text-red-500 text-sm mb-2">Do you need help?</p>
        <p className="text-purple-600 text-xs font-bold">1-800-MY-BANK</p>
      </div>
    </div>
  );
};


export default Profile;
