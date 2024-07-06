import { RiStarFill } from "react-icons/ri";
import Card from "./element/card";

const CashBack = () => (
  <div className="h-full">
    <Card className="flex items-center space-x-3 h-full">
      <div className="bg-blue-100 p-2 rounded-full">
        <RiStarFill className="text-blue-500 w-5 h-5" />
      </div>
      <span className="text-gray-600">Increased Cashback</span>
    </Card>
  </div>
);

export default CashBack;