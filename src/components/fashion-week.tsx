import { FiSearch, FiMenu, FiDownload, FiMoreHorizontal } from "react-icons/fi";
import Image from "next/image";
import { BrandData } from "@/constant";
import { BrandDataProps } from "@/types";

interface FashionWeekProps {
  brandDatas: BrandDataProps[];
}

const FashionWeek = ({ brandDatas }: FashionWeekProps) => {
  return (
    <div className="w-full">
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search Company and Stock"
          className="w-full py-3 px-4 pr-10 rounded-md border border-gray-300 focus:outline-none focus:shadow focus:shadow-slate-500"
        />
        <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      <div className="rounded-xl overflow-hidden relative h-[280px] sm:h-[300px] md:h-[470px]">
        <Image
          src="/fashion.jpg"
          alt="Fashion Week"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />

        <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
          <h2 className="text-white text-2xl font-bold">Fashion Week</h2>
          <FiMoreHorizontal className="text-white text-2xl" />
        </div>

        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center gap-20 p-4 sm:p-6">
          <div className="grid grid-cols-3 gap-8 mt-10">
            {BrandData.map((brand, index) => (
              <div
                key={index}
                className="bg-black w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center"
              >
                {brand.type === "image" ? (
                  <Image
                    src={brand.logo as string}
                    alt={`${brand.name} logo`}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                ) : (
                  <brand.logo className="w-8 h-8 text-white text-sm" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FashionWeek;
