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
          className="w-full py-3 px-4 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      <div className="rounded-xl overflow-hidden relative h-[470px]">
        <Image
          src="/fashion.jpg"
          alt="Fashion Week"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />

        <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
          <h2 className="text-white text-2xl font-bold">Fashion Week</h2>
          <FiMoreHorizontal className="text-white text-2xl" />
        </div>

        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex justify-between items-center">
            {BrandData.slice(0, 5).map((brand, index) => (
              <div
                key={index}
                className="bg-black/70 w-16 h-16 rounded-full flex items-center justify-center"
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
                  <brand.logo className="w-8 h-8 text-white" />
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