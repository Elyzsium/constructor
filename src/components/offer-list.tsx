import { offerItems } from "@/constant";
import OfferCard from "./offer-card";

const OfferList = () => (
  <div className="h-full w-full overflow-y-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
    {offerItems.map((item, index) => (
      <div
        key={index}
        className={`h-[-160px] ${
          index >= offerItems.length - 2 ? "hidden lg:block" : ""
        }`}
      >
        <OfferCard {...item} />
      </div>
    ))}
  </div>
);

export default OfferList;
