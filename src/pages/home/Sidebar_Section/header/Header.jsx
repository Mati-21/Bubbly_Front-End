import { EllipsisVertical, LogOut, Menu, Pen, Search } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../../feature/auth/authThunk";
import {
  setMobileMenu,
  setOpenProfile,
} from "../../../../feature/user/userSlice";
import MobileSearch from "../Search/MobileSearch/MobileSearch";

function Header() {
  const [openSearch, setOpenSearch] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await dispatch(logout());
  };

  return (
    <div className="w-full ">
      {/* for Desktop */}
      <div className="hidden sm:flex items-center  justify-between p-2 text-white">
        {/* header left */}
        <div className="flex gap-2">
          <div className="size-12 bg-green-200 rounded-full overflow-hidden ">
            <img
              onClick={() => dispatch(setOpenProfile(true))}
              src={user.picture[0]}
              alt=""
              className="h-full w-full object-cover cursor-pointer"
            />
          </div>
          <div className="flex justify-center flex-col">
            <h1 className="font-bold">{user.name}</h1>
            <span className="text-xs">Online</span>
          </div>
        </div>
        {/* header Right */}
        <div className="flex items-center gap-2">
          <Pen size={18} className="cursor-pointer" />
          <EllipsisVertical className="cursor-pointer" />
          <LogOut className="cursor-pointer" onClick={() => handleLogout()} />
        </div>
      </div>

      {/* for mobile  */}
      <div className="flex items-center justify-between p-2 text-white sm:hidden border-b border-gray-800">
        <div
          onClick={() => dispatch(setMobileMenu(true))}
          className="cursor-pointer"
        >
          <Menu />
        </div>
        {/* Mobile Search */}
        <MobileSearch openSearch={openSearch} setOpenSearch={setOpenSearch} />
      </div>
    </div>
  );
}

export default Header;
