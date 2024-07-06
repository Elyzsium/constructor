import { offerItems } from "@/constant";
import OfferCard from "./offer-card";


const OfferList = () => (
  <div className="h-full overflow-y-auto">
    {offerItems.map((item, index) => (
      <OfferCard  key={index} {...item} />
    ))}
  </div>
);

export default OfferList;
