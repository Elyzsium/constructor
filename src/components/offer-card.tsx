import { OfferCardProps } from "@/types";
import Image from "next/image";
import Button from "./element/button";

const OfferCard = ({
  image,
  title,
  discount,
  icon: Icon,
  iconBg,
}: OfferCardProps) => (
  <div className="relative rounded-lg overflow-hidden h-full w-full"> 
    <Image
      src={image}
      alt={title}
      layout="fill"
      objectFit="cover"
      className="brightness-75"
    />
    <div className="absolute inset-0 bg-black bg-opacity-40" />
    <div className="relative z-10 flex flex-col h-full justify-between p-4">
      <div className="flex justify-between items-start gap-2">
        <div>
          <span className="text-white text-sm font-semibold">{title}</span>
          <p className="text-white text-2xl font-bold">{discount}</p>
        </div>
        <div className={`${iconBg} p-2 rounded-full`}>
          {typeof Icon === "function" ? (
            <Icon className="text-white w-6 h-6" />
          ) : Icon === "burlington" ? (
            <Image
              src="/burlington.png"
              alt="burlington"
              width={24}
              height={24}
            />
          ) : Icon === "sky" ? (
            <Image src="/skylogo.png" alt="sky" width={24} height={24} />
          ) : Icon === "harley" ? (
            <Image src="/Harley.png" alt="Harley" width={24} height={24} />
          ) : null}
        </div>
      </div>
      <Button className="mt-2">Activate Now</Button>
    </div>
  </div>
); 

export default OfferCard;