import {  RiStarFill } from "react-icons/ri";
import Card from "./element/card";
import { IoMdWallet } from "react-icons/io";

const ChangeHistory = () => (
 <div className="w-full">
    <Card className="flex items-center space-x-3">
      <div className="bg-orange-100 p-2 rounded-full">
        <IoMdWallet className="text-orange-500 w-5 h-5" />
      </div>
      <span className="text-gray-600">Charge History</span>
    </Card>
  </div>
);

export default ChangeHistory;
