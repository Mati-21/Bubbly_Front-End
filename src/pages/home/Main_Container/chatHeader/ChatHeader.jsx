import { ArrowLeftIcon, EllipsisVertical, Search } from "lucide-react";
import { useSelector } from "react-redux";

function ChatHeader() {
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  return (
    <div className="px-4 py-1 flex items-center justify-between bg-slate-500">
      {/* header left */}
      <div className="flex items-center gap-2 text-white/90">
        <div className="sm:hidden">
          <ArrowLeftIcon />
        </div>
        <div className="size-10 rounded-full overflow-hidden ">
          <img src={user.picture} alt="" className="h-10 w-10 object-cover" />
        </div>
        <div className="flex justify-center flex-col ">
          <h1 className="font-bold text-sm tracking-wider">{user.name}</h1>
          <span className="text-xs tracking-wider">Online</span>
        </div>
      </div>
      {/* header Right */}
      <div className="hidden sm:block ">
        <EllipsisVertical className="cursor-pointer text-white/90" />
      </div>

      <div className="sm:hidden ">
        <Search className="cursor-pointer size-6" />
      </div>
    </div>
  );
}

export default ChatHeader;
