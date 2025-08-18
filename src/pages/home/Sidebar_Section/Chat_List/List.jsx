import { useDispatch, useSelector } from "react-redux";
import { open_create_chat } from "../../../../feature/chat/chatThunk";
import {
  findOtherUser,
  getReceiverId,
} from "../../../../utils/getId/getreceiverId";

function List({ chat, textRef }) {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const otherUser = findOtherUser(chat.users, user._id);

  const handleChat = async (users) => {
    const receiver_id = getReceiverId(users, user._id);
    textRef.current?.focus();

    const activeChat = await dispatch(open_create_chat(receiver_id));
  };

  return (
    <div
      onClick={() => handleChat(chat.users)}
      className="flex items-center justify-between p-2 hover:bg-slate-200/50 duration-300 transition-all hover:rounded cursor-pointer border-b border-gray-200/40"
    >
      {/* left side  */}
      <div className="text-white flex items-center gap-2">
        <div className="overflow-hidden size-12 rounded-full">
          <img
            src={otherUser.picture[0]}
            className="h-full w-full object-cover"
            alt=""
          />
        </div>
        <div className=" flex flex-col ">
          <span className="font-bold text-md sm:text-md">{otherUser.name}</span>

          <span className="text-xs sm:text-md hidden lg:block">
            {chat.latestMessage
              ? chat?.latestMessage?.message.length > 10
                ? chat?.latestMessage?.message.slice(0, 10) + "..."
                : chat?.latestMessage?.message
              : "Start messaging"}
          </span>
          <span className="text-xs sm:text-md lg:hidden">
            {chat.latestMessage
              ? chat?.latestMessage?.length > 20
                ? chat?.latestMessage?.message?.slice(0, 20) + "..."
                : chat?.latestMessage?.message
              : "Start Messaging"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default List;
