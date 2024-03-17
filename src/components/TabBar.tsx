import { BiMoneyWithdraw, BiStore } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const TabBar = () => {
  return (
    <div className="">
      <div className="flex items-center justify-start">
        <div className="link md:px-12 p-4 text-[#FFFFFF3D]  flex items-center gap-3  text-sm md:text-base">
          <BiStore className="text-xl" />
          <NavLink to="/" className={" "}>
            {" "}
            All Stores
          </NavLink>
        </div>
        <div className="link md:px-12 p-4 text-sm md:text-base text-[#FFFFFF3D]  flex items-center gap-3 ">
          <BiStore className="text-xl" />
          <NavLink to="/liveStores" className={" "}>
            {" "}
            Live Stores
          </NavLink>
        </div>
        <div className="link md:px-12 p-4 text-sm md:text-base text-[#FFFFFF3D]  flex items-center gap-3 ">
          <BiMoneyWithdraw className="text-xl" />
          <NavLink to="/revShare" className={" "}>
            {" "}
            Revenue Sharing
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default TabBar;
