import Image from "next/image";
import { FaCar } from "react-icons/fa";
import { RiMotorbikeLine } from "react-icons/ri";
import Button from "./element/button";

const WashingCard = () => {
  return (
    <div className="w-full ">
      <div className="rounded-xl overflow-hidden relative h-[400px] sm:h-[500px] md:h-[530px]">
        <Image
          src="/car.jpg"
          alt="washing image"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />

        <div className="absolute inset-0  z-10 flex flex-col h-full justify-center items-center gap-20 p-4 sm:p-6">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-600 rounded-full flex items-center justify-center ">
            <span>
              <FaCar />
            </span>
          </div>

          <div className="text-white flex flex-col gap-8 items-center justify-center mt-4 sm:mt-6">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center">
              Washing & Dry Cleaning
            </h3>
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
              35%
            </p>
            <Button className="py-2 mt-6 ml-16 sm:mt-8 bg-orange-500 text-white rounded-full text-sm sm:text-base hover:bg-orange-600 transition-colors duration-300">
              Activate Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WashingCard;
