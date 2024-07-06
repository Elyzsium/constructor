import { CategoryCardProps } from "@/types";
import Card from "./element/card";

const CategoryCard = ({ icon: Icon, label }: CategoryCardProps) => (
  <Card className="flex flex-col items-center justify-center py-6 ">
    <Icon className="text-blue-500 w-8 h-8 mb-2" />
    <span className="text-gray-600 text-sm">{label}</span>
  </Card>
);

export default CategoryCard;
