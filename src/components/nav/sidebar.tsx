import Image from "next/image";
import { MenuIcons, UserIcons, UserImages } from "@/constant";

const SideBar = () => {
  return (
    <aside className="  text-slate-400 h-full flex flex-col items-center mb-10 shadow-md border border-b-gray-300">
      <div className="flex flex-col items-center space-y-4">
        {MenuIcons.map(({ Icon, label }) => (
          <div key={label} className="flex flex-col items-center">
            <div className="w-8 h-8 text-5xl sm:w-12 sm:h-12 bg-white text-slate-300 rounded-full flex items-center justify-center ">
              <Icon className="w-8 h-8 rounded-full" />
            </div>
            {/* <span className="text-xs mt-1">{label}</span> */}
          </div>
        ))}
      </div>
      <div className="mt-20 flex flex-col items-center space-y-4">
        {UserImages.map(({ Src, label }) => (
          <div key={label} className="flex flex-col items-center ">
            <div className="w-8 h-8 text-5xl sm:w-12 sm:h-12 bg-white text-slate-300 rounded-full flex items-center justify-center">
              <Image
                src={Src}
                alt={label}
                width={50}
                height={50}
                className="flex flex-col w-8 h-8 items-center rounded-full"
              />
            </div>
            {/* <span className="text-xs mt-1">{label}</span> */}
          </div>
        ))}

        {UserIcons.map(({ Icon, label }) => (
          <div
            key={label}
            className="flex flex-col items-center text-slate-400"
          >
            <div className="w-8 h-8 text-5xl sm:w-12 sm:h-12 bg-white text-slate-300 rounded-full flex items-center justify-center">
              <Icon />
            </div>
            {/* <span className="text-xs mt-1">{label}</span> */}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SideBar;
