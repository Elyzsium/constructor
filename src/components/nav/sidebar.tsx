import Image from "next/image";

import { MenuIcons, UserIcons, UserImages } from "@/constant";
import { IoReorderThreeOutline } from "react-icons/io5";

const SideBar = () => {
  return (
    <aside className="w-32 bg-slate-200 h-screen text-slate-400 flex flex-col items-center mb-10 shadow-md border border-b-gray-300">
      <div className="flex flex-col items-center space-y-4">
        {MenuIcons.map(({ Icon, label }) => (
          <div key={label} className="flex flex-col items-center">
            <div className="w-8 h-8 text-5xl sm:w-16 sm:h-16 bg-white text-slate-300 rounded-full flex items-center justify-center ">
              <Icon className="w-8 h-8 rounded-full" />
            </div>
            <span className="text-xs mt-1">{label}</span>
          </div>
        ))}
      </div>
      <div className="mt-20 flex flex-col items-center space-y-4">
        {/* <div className="grid grid-cols gap-4"> */}
          {UserImages.map(({ Src, label }) => (
            <div
              key={label}
              className="flex flex-col items-center "
            >
              <div className="w-8 h-8 text-5xl sm:w-16 sm:h-16 bg-white text-slate-300 rounded-full flex items-center justify-center">
                <Image
                  src={Src}
                  alt={label}
                  width={50}
                  height={50}
                  className="flex flex-col items-center rounded-full"
                />
              </div>
              <span className="text-xs mt-1">{label}</span>
            </div>
          ))}
      
        {UserIcons.map(({ Icon, label }) => (
          <div
            key={label}
            className="flex flex-col items-center text-slate-400"
          >
            <div className="p-3 rounded-lg bg-gray-100">
              <Icon />
            </div>
            <span className="text-xs mt-1">{label}</span>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SideBar;
