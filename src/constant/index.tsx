import { FiCoffee } from "react-icons/fi";
import {
  FaUser,
  FaFileAlt,
  FaLock,
  FaCog,
 
} from "react-icons/fa";
import { SiMcdonalds, SiNike, SiReebok } from "react-icons/si";
import { FaCompass, FaFacebookMessenger, FaStar } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoMdGlobe } from "react-icons/io";
import { BsBuildings } from "react-icons/bs";
import {
  GiAlliedStar,
  GiLipstick,
  GiOstrich,
  GiPalmTree,
} from "react-icons/gi";
import { PiCoffeeLight, PiMonitorPlay } from "react-icons/pi";
import { TbHanger } from "react-icons/tb";
import { CiGift, CiPercent } from "react-icons/ci";
import { FaCcMastercard, FaCcVisa } from 'react-icons/fa'; // Import icons





export const BrandData = [
  { name: "Reebok", logo: SiReebok, type: "icon" },
  { name: "Burlington", logo: "/burlington.png", type: "image" },
  { name: "MOMA", logo: "/moma.png", type: "image" },
  { name: "Nike", logo: SiNike, type: "icon" },
  { name: "TOMMY", logo: "/tommy.png", type: "image" },
  { name: "GAP", logo: "/gap.png", type: "image" },
];

export const categoryItems = [
  { icon: CiPercent, label: "New" },
  { icon: GiAlliedStar, label: "Popular" },
  { icon: GiPalmTree, label: "Travels" },
  { icon: PiCoffeeLight, label: "Cafe & Restaurant" },
  { icon: TbHanger, label: "Clothing" },
  { icon: PiMonitorPlay, label: "Electronics" },
  { icon: CiGift, label: "Gifts" },
  { icon: GiLipstick, label: "Beauty" },
];

export const offerItems = [
  {
    title: "Food Delivery",
    discount: "35%",
    icon: GiOstrich,
    iconBg: "bg-lime-500",
    image: "/food.jpg",
  },
  {
    title: "Hot Lunch",
    discount: "40%",
    icon: SiMcdonalds,
    iconBg: "bg-red-500",
    image: "/McDonald.jpg",
  },
  {
    title: "Second Pair Discount",
    discount: "20%",
    icon: SiReebok,
    iconBg: "bg-black",
    image: "/shoe.jpg",
  },
  {
    title: "Accessories Discounts",
    discount: "10%",
    icon: null,
    iconBg: "bg-black",
    image: "/biker.jpeg",
  },
];

export const MenuIcons = [
  { Icon: FaCompass, label: "Home" },
  { Icon: FaStar, label: "Popular" },
  { Icon: FaFacebookMessenger, label: "Messager" },
  { Icon: FaArrowTrendUp, label: "Trending" },
  { Icon: IoMdGlobe, label: "Global" },
  { Icon: BsBuildings, label: "Office" },
];

export const UserIcons = [{ Icon: FiCoffee, label: "Cafe & Restaurant" }];
export const UserImages = [
  { Src: "/image4.jpg", label: "Home" },
  { Src: "/image4.jpg", label: "Home" },
  { Src: "/image4.jpg", label: "Home" },
  { Src: "/image4.jpg", label: "Home" },
];

export const accountCards = [
  { id: 4405, type: "Master Card", balance: 4560 },
  { id: 1120, type: "Master Card", balance: 1120 },
  { id: 9875, type: "Visa Black Card", balance: 345 },
];

export const menuItems = [
  { icon: FaUser, text: "Personal Information" },
  { icon: FaFileAlt, text: "Documents and References" },
  { icon: FaLock, text: "Security & Codes" },
  { icon: FaCog, text: "Account settings" },
];

export const cardData = [
  { id: 4456, type: 'Master Card', balance: 4560, color: 'bg-purple-400', icon: FaCcMastercard },
  { id: 6753, type: 'Master Card', balance: 1120, color: 'bg-yellow-400', icon: FaCcMastercard },
  { id: 9875, type: 'Visa Black Card', balance: 345, color: 'bg-gray-700', icon: FaCcVisa },
];
