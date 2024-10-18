import { useLocation } from "react-router-dom";
import { EmailIcon, NotificationIcon } from "../assets/icons";
const NavBar = () => {
  const pageName = useLocation().pathname;

  return (
    <nav className="bg-white p-5 flex justify-between items-center sm:flex-row flex-col gap-4">
      <h3 className="font-medium text-[26px] capitalize">
        {pageName === "/" ? "Home" : pageName.slice(1)}
      </h3>

      <ul className="flex items-center gap-4">
        <li>
          <div className="bg-[#F0F2F5] w-[48px] h-[48px] flex items-center justify-center rounded-full relative">
            <EmailIcon />
            <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
              3+
            </span>
          </div>
        </li>
        <li>
          <li>
            <div className="bg-[#F0F2F5] w-[48px] h-[48px] flex items-center justify-center rounded-full relative">
              <NotificationIcon />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                9+
              </span>
            </div>
          </li>
        </li>
        <li>
          <div className="flex items-center gap-4  px-2 py-1 rounded-md hover:shadow-sm hover:bg-gray-100 cursor-pointer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010"
              alt="profile"
              className="w-[45px] h-[45px] rounded-full"
            />
            <div className="hidden md:block">
              <h4 className="font-bold text-sm">Mohamed Kamal</h4>
              <p className="text-gray-500 text-sm">Admin</p>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
