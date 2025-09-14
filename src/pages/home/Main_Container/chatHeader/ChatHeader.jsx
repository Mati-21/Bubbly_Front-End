import { ArrowLeftIcon, EllipsisVertical, Search } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { clearActiveChat } from "../../../../feature/chat/chatSlice";
import { checkOnline } from "../../../../utils/checkOnline";
import { getCurrentUserId } from "../../../../utils/getCurrentUserId";
import { setSelectedUserProfile } from "../../../../feature/ui/ui";

function ChatHeader() {
  const { activeChat, onlineUsers } = useSelector((state) => state.chat);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const otherUserId = getCurrentUserId(user._id, activeChat);

  const isOnline = checkOnline(onlineUsers, otherUserId);

  const handleActiveChat = () => {
    dispatch(clearActiveChat());
  };

  return (
    <div className="px-4 py-1 flex items-center justify-between bg-slate-500">
      {/* header left */}
      <div className="flex items-center gap-2 text-white/90">
        <div onClick={handleActiveChat} className="sm:hidden">
          <ArrowLeftIcon />
        </div>
        <div
          onClick={() => dispatch(setSelectedUserProfile(activeChat._id))}
          className="size-10 cursor-pointer rounded-full overflow-hidden "
        >
          <img
            src={activeChat.picture[0]}
            alt=""
            className="h-10 w-10 object-cover"
          />
        </div>
        <div className="flex justify-center flex-col ">
          <h1 className="font-bold text-sm tracking-wider">
            {activeChat.name}
          </h1>
          {isOnline ? (
            <span className="text-xs tracking-wider">Online</span>
          ) : (
            <p className="text-xs text-white font-semibold">
              last seen recently
            </p>
          )}
        </div>
      </div>
      {/* header Right */}
      <div className="hidden sm:block ">
        <EllipsisVertical className="cursor-pointer text-white/90" />
      </div>

      <div className="sm:hidden ">
        <Search className="cursor-pointer size-6  text-white" />
      </div>
    </div>
  );
}

export default ChatHeader;
