import CashBack from "@/components/cashback";
import CategoryGrid from "@/components/category-grid";
import ChangeHistory from "@/components/change-history";
import FashionWeek from "@/components/fashion-week";
import OfferList from "@/components/offer-list";
import WashingCard from "@/components/washing-card";
import Profile from "@/components/profile";

const Dashboard = () => {
  return (
    <div className="max-w-[1600px] mx-auto p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 xl:hidden">
        <div className="lg:col-span-2">
          <FashionWeek brandDatas={[]} />
        </div>
        <div className="lg:col-span-2">
          <WashingCard />
        </div>
        <div>
          <CashBack />
        </div>
        <div>
          <ChangeHistory />
        </div>
        <div>
          <CategoryGrid />
        </div>
        <div>
          <OfferList />
        </div>
      </div>

      {/* Desktop layout (1200px and above) */}
      <div className="hidden xl:block">
        <div className="flex justify-center items-center">
          <div className="">
            <div className="flex gap-4 mb-4">
              <div className="w-1/2">
                <FashionWeek brandDatas={[]} />
              </div>
              <div className="w-1/2 flex flex-col justify-between">
                <CashBack />
                <ChangeHistory />
              </div>
              <div className="w-1/2">
                <WashingCard />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1/2">
                <CategoryGrid />
              </div>
              <div className="w-1/2">
                <OfferList />
              </div>
            </div>
          </div>
          <div className="lg:w-1/4 xl:w-1/5">
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

// import CashBack from "@/components/cashback";
// import CategoryGrid from "@/components/category-grid";
// import ChangeHistory from "@/components/change-history";
// import FashionWeek from "@/components/fashion-week";
// import OfferList from "@/components/offer-list";
// import Profile from "@/components/profile";
// import WashingCard from "@/components/washing-card";

// const Dashboard = () => {
//   return (
//     <div className="max-w-[1600px] mx-auto p-4">
//       <div className="flex flex-col lg:flex-row gap-4">
//         <div className="flex-grow">
//           <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4">
//             <div className="lg:col-span-1">
//               <FashionWeek brandDatas={[]} />
//             </div>
//             <div className="lg:col-span-1 flex flex-col justify-between">
//               <CashBack />
//               <ChangeHistory />
//             </div>
//             <div className="lg:col-span-1">
//               <WashingCard />
//             </div>
//             <div className="lg:col-span-1">
//               {/* This empty div maintains the grid structure */}
//             </div>
//           </div>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//             <div className="h-full">
//               <CategoryGrid />
//             </div>
//             <div className="h-full">
//               <OfferList />
//             </div>
//           </div>
//         </div>
// <div className="lg:w-1/4 xl:w-1/5">
//   <Profile />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
// <div className="max-w-[1600px] mx-auto p-4">

//   <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
//     <div className="lg:col-span-2">
//       <FashionWeek brandDatas={[]} />
//     </div>
//     <div className="lg:col-span-1 flex flex-col justify-between">
//       <CashBack />
//       <ChangeHistory />
//     </div>
//     <div className="lg:col-span-1">
//       <WashingCard />
//     </div>
//     <div className="lg:col-span-2">
//       <CategoryGrid />
//     </div>
//     <div className="lg:col-span-1">
//       <OfferList />
//     </div>
//     <div className="lg:col-span-1">
//       <Profile />
//     </div>
//   </div>
// </div>

// import CashBack from "@/components/cashback";
// import CategoryGrid from "@/components/category-grid";
// import ChangeHistory from "@/components/change-history";
// import FashionWeek from "@/components/fashion-week";

// import OfferList from "@/components/offer-list";
// import WashingCard from "@/components/washing-card";

// const Dashboard = () => {
//   return (
//     <div className="max-w-[1600px] mx-auto p-4">
// <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
//   <div className="lg:col-span-2">
//     <FashionWeek brandDatas={[]} />
//   </div>
//   <div className="lg:col-span-2">
//     <WashingCard />
//   </div>
//   <div>
//     <CashBack />
//   </div>
//   <div>
//     <ChangeHistory />
//   </div>
//   <div>
//     <CategoryGrid />
//   </div>
//   <div>
//     <OfferList />
//   </div>
// </div>
//     </div>
//   );
// };

// export default Dashboard;
