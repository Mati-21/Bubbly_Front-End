import { EllipsisVertical, Menu, Pen, Search } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";

function Header({ openMobileMenu }) {
  const [openSearch, setOpenSearch] = useState(false);
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="w-full ">
      {/* for Desktop */}
      <div className="hidden sm:flex items-center  justify-between p-2 text-white">
        {/* header left */}
        <div className="flex gap-2">
          <div className="size-12 bg-green-200 rounded-full overflow-hidden ">
            <img
              src={user.picture}
              alt=""
              className="h-full w-full object-cover"
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
        </div>
      </div>

      {/* for mobile  */}
      <div className="flex items-center justify-between p-2 text-white sm:hidden border-b border-gray-800">
        <div onClick={() => openMobileMenu()} className="cursor-pointer">
          <Menu />
        </div>
        <div className="flex gap-2  items-center">
          <input
            type="text"
            className={`rounded-full  focus:border-none focus:outline-none border-none duration-500 transition-all ${
              openSearch ? "w-48 px-2 py-1" : "w-0 p-0"
            }`}
          />
          <div>
            <Search onClick={() => setOpenSearch((prev) => !prev)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
