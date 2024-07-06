
import { categoryItems } from '@/constant'; 
import CategoryCard from './category-card';

const CategoryGrid = () => (
  <div className="grid grid-cols-2 gap-4 h-full">
    {categoryItems.map((item, index) => (
      <CategoryCard key={index} {...item} />
    ))}
  </div>
);

export default CategoryGrid;
