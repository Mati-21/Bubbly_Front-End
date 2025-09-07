import { useDispatch } from "react-redux";
import {
  setOpenCreateGroup,
  setShowHeaderMenu,
} from "../../../../feature/ui/ui";
import { Megaphone, Settings, Shield, Users } from "lucide-react";

function HeaderMenu() {
  const dispatch = useDispatch();
  const openClose = () => {
    dispatch(setOpenCreateGroup(true));
    dispatch(setShowHeaderMenu());
  };

  // Example user (change role to "system_admin" to test admin menu)
  const User = {
    role: "system_admin",
  };

  return (
    <div className="p-2 rounded-md absolute bg-gray-600 top-full mt-2 right-0 max-w-lg min-w-[300px] w-full z-30 shadow-lg">
      {/* Triangle */}
      <div
        className="w-0 h-0 absolute -top-[9px] right-[34px]
          border-l-[10px] border-l-transparent 
          border-r-[10px] border-r-transparent 
          border-b-[10px] border-b-gray-600"
      ></div>

      {/* Menu items */}
      <ul className="list-none flex flex-col gap-2 text-white">
        <li className="font-semibold text-sm p-2 bg-gray-500 hover:bg-gray-700 flex items-center gap-2 duration-300 transition-all cursor-pointer rounded-md">
          <span>
            <Settings />
          </span>
          Setting
        </li>
        <li
          onClick={() => openClose()}
          className="font-semibold text-sm p-2 bg-gray-500 hover:bg-gray-700 flex items-center gap-2 duration-300 transition-all cursor-pointer rounded-md"
        >
          <span>
            <Users />
          </span>
          Create Group
        </li>
        <li className="font-semibold text-sm p-2 bg-gray-500 hover:bg-gray-700 flex items-center gap-2 duration-300 transition-all cursor-pointer rounded-md">
          <span>
            <Megaphone />
          </span>
          Create Channel
        </li>
        {User.role === "system_admin" && (
          <li className="font-semibold text-sm p-2 bg-gray-500 hover:bg-gray-700 flex items-center gap-2 duration-300 transition-all cursor-pointer rounded-md">
            <span>
              <Shield />
            </span>
            Admin Dashboard
          </li>
        )}
      </ul>
    </div>
  );
}

export default HeaderMenu;
