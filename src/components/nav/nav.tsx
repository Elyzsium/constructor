import Navbar from "./navbar";
import Sidebar from "./sidebar";

const Nav = () => {
  return (
    <div className="flex">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className="flex-1">
        <Navbar />
      </div>
    </div>
  );
};

export default Nav;
