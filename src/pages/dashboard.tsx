import CashBack from "@/components/cashback";
import CategoryGrid from "@/components/category-grid";
import ChangeHistory from "@/components/change-history";
import FashionWeek from "@/components/fashion-week";
import OfferList from "@/components/offer-list";
import WashingCard from "@/components/washing-card";
import Profile from "@/components/profile";
import SideBar from "@/components/nav/sidebar";

const Dashboard = () => {
  return (
    <div className="max-w-[1600px] mx-auto  p-2">
        <div className="flex gap-4">
          
          <div className="hidden xl:block w-16">
            <SideBar/>
          </div>
          
          <div className="w-full  grid grid-cols-1 gap-4 md:grid-cols-2 lg:hidden xl:hidden">
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

          <div className="hidden lg:block flex-grow  h-full">
            <div className="flex gap-4 mb-4">
              <div className="w-2/3">
                <FashionWeek brandDatas={[]} />
              </div>
              <div className="w-1/3 flex flex-col gap-4">
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

      
          <div className="hidden xl:block w-64">
            <Profile />
          </div>
        </div>
      </div>
  
  );
};

export default Dashboard;
