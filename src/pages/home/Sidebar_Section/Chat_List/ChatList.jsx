import List from "./List";
import { useSelector } from "react-redux";

function ChatList({ textRef }) {
  const { chats } = useSelector((state) => state.chat);
  console.log(chats);

  return (
    <div className="space-y-2 mt-4 flex-1 overflow-scroll scrollbar overflow-x-hidden  ">
      {chats.map((chat, i) => (
        <List key={i} chat={chat} textRef={textRef} />
      ))}
    </div>
  );
}
export default ChatList;
