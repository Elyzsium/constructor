
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
  <div className="relative rounded-lg overflow-hidden mb-4 max-w-[800px] mx-auto h-40">
    <Image
      src={image}
      alt={title}
      layout="fill"
      objectFit="cover"
      className="brightness-75 w-full h-full "
    />
    <div className="absolute inset-0 bg-black bg-opacity-40" />
    <div className="relative z-10 flex flex-col h-full justify-between p-4">
      <div className="flex justify-between items-start gap-2 ">
        <div>
          <span className="text-white text-sm font-semibold">{title}</span>
          <p className="text-white text-3xl font-bold">{discount}</p>
        </div>
        <div className={`${iconBg} p-2 rounded-full`}>
    {Icon ? (
      <Icon className="text-white w-6 h-6" />
    ) : (
      <Image src="/Harley.png" alt="Harley" width={24} height={24} />
    )}
  </div>
        
      </div>
      <Button>Activate Now</Button>
    </div>
  </div>
);

export default OfferCard;
