import { LogOut, Pen, Settings, Sun, User } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { logout } from "../../../../feature/auth/authThunk";
import { clearChatState } from "../../../../feature/chat/chatSlice";
import { setMobileMenu, setOpenProfile } from "../../../../feature/ui/ui";

function MobileMenu() {
  const { user } = useSelector((state) => state.auth);
  const { mobileMenu } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = async (e) => {
    e.stopPropagation();
    dispatch(clearChatState());
    dispatch(logout());
  };

  const handleMobileProfile = () => {
    dispatch(setMobileMenu(false));
    dispatch(setOpenProfile());
  };

  return (
    <motion.div
      onClick={() => dispatch(setMobileMenu(false))}
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      exit={{ x: -300 }}
      transition={{ duration: 0.3 }}
      className={`fixed inset-0 z-50 sm:hidden backdrop-blur-sm transition-opacity duration-300 ${
        mobileMenu ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        exit={{ x: -300 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        onClick={(e) => e.stopPropagation()}
        className="absolute top-0 left-0 h-screen w-56 bg-gray-600 text-white font-raleway px-4 py-2 sm:hidden"
      >
        {/* Upper profile */}
        <div>
          {/* First row */}
          <div className="flex items-center justify-between">
            <img
              src={user.picture[0]}
              className="size-12 rounded-full object-cover"
              alt="Profile"
            />
            <Sun className="text-orange-400 cursor-pointer" />
          </div>

          {/* second row */}
          <div className="mt-2 font-bold tracking-wider">
            <p className="text-xs text-black/90 mt-1">User Info</p>
            <h1>{user.name}</h1>
            <p className="text-xs text-black/90 mt-1">Bio</p>
            <p className="text-xs text-slate-400">{user.bio}</p>
          </div>

          <div className="border-b border-slate-500 mt-2"></div>
        </div>

        {/* setting */}
        <div className="mt-4 flex flex-col items-start">
          <span
            onClick={handleMobileProfile}
            className="flex gap-2 items-center w-full cursor-pointer hover:bg-slate-500/40 duration-300 transition-all  py-1 rounded"
          >
            <User size={16} />
            <p className="text-sm tracking-wider">View Profile</p>
          </span>
          <span className="flex gap-2 items-center w-full cursor-pointer hover:bg-slate-500/40 duration-300 transition-all  py-1 rounded">
            <Pen size={16} />
            <p className="text-sm tracking-wider">Edit Profile</p>
          </span>
          <span className="flex gap-2 items-center w-full cursor-pointer hover:bg-slate-500/40 duration-300 transition-all  py-1 rounded">
            <Settings size={18} />
            <p className="text-sm tracking-wider">Setting</p>
          </span>
          <span
            onClick={handleLogout}
            className="flex gap-2 items-center w-full cursor-pointer hover:bg-slate-500/40 duration-300 transition-all  py-1 rounded"
          >
            <LogOut size={18} />
            <p className="text-sm tracking-wider">Logout</p>
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default MobileMenu;
