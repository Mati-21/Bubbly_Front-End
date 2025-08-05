import { useSelector } from "react-redux";
import ChatList from "./Chat_List/ChatList";
import Header from "./header/Header";
import DesktopSearch from "./Search/DesktopSearch/DesktopSearch";

function Sidebar() {
  const { activeChat } = useSelector((state) => state.chat);
  const istrue = activeChat._id ? true : false;

  return (
    <div
      className={`${
        istrue ? "hidden" : "flex flex-col flex-1"
      } sm:col-span-5 sm:flex flex-col flex-1  md:col-span-4 lg:col-span-3 col-span-12 p-2 bg-gray-700 h-screen   `}
    >
      {/* header for desktop */}
      <Header />
      {/* Search for Desktop */}
      <DesktopSearch />
      {/* Chat List for Desktop */}
      <ChatList />
    </div>
  );
}

export default Sidebar;
