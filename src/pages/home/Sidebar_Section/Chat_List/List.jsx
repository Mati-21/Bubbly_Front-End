import { useDispatch, useSelector } from "react-redux";
import {
  open_create_chat,
  updateAndGetChats,
} from "../../../../feature/chat/chatThunk";
import {
  findOtherUser,
  getReceiverId,
} from "../../../../utils/getId/getreceiverId";
import { formatMessageTime } from "../../../../utils/formatDate";
import { checkOnline } from "../../../../utils/checkOnline";
import { useSocket } from "../../../../context/useSocket";

function List({ chat, textRef }) {
  const { user } = useSelector((state) => state.auth);
  const { onlineUsers } = useSelector((state) => state.chat);
  const dispatch = useDispatch();
  const { socket } = useSocket();

  const otherUser = findOtherUser(chat.users, user._id);
  const otherUserId = otherUser._id;

  const isOnline = checkOnline(onlineUsers, otherUserId);

  const handleChat = async (chat) => {
    const users = chat.users;
    const receiver_id = getReceiverId(users, user._id);
    textRef.current?.focus();

    await dispatch(updateAndGetChats(chat._id));
    const value = { receiver_id, isGroup: chat.isGroup ? chat._id : false };

    await dispatch(open_create_chat(value));

    if (chat.isGroup === true) {
      socket.emit("joinGroupChat", chat._id);
    }
  };

  const isCountForMe = chat?.latestMessage?.readby.includes(user._id);

  return (
    <div
      onClick={() => handleChat(chat)}
      className="flex items-center justify-between p-2 hover:bg-slate-200/50 duration-300 transition-all hover:rounded cursor-pointer border-b border-gray-200/40"
    >
      {/* left side  */}
      <div className="text-white flex items-center gap-2">
        <div className=" size-12 rounded-full relative">
          {isOnline && (
            <span className="absolute bottom-0 right-0 size-3 rounded-full bg-green-400 "></span>
          )}
          <img
            src={chat.isGroup ? chat.picture[0] : otherUser.picture[0]}
            className="h-full w-full rounded-full object-cover"
            alt=""
          />
        </div>
        <div className=" flex flex-col ">
          <span className="font-bold text-md sm:text-md">
            {chat.isGroup ? chat.name : otherUser.name}
          </span>

          <span className="text-xs sm:text-md ">
            {chat?.latestMessage?.message
              ? chat.latestMessage.message.length > 20
                ? chat.latestMessage.message.slice(0, 20) + "..."
                : chat.latestMessage.message
              : "Start Messaging"}
          </span>
        </div>
      </div>

      {/* Right Side */}
      <div className="text-xs text-white items-center gap-1 flex flex-col">
        <p>
          {chat?.latestMessage &&
            formatMessageTime(chat?.latestMessage?.createdAt)}
        </p>

        {chat.unreadCount > 0 && !isCountForMe && (
          <p className="size-5 bg-green-400 rounded-full flex justify-center items-center">
            {chat.unreadCount}
          </p>
        )}
      </div>
    </div>
  );
}

export default List;
