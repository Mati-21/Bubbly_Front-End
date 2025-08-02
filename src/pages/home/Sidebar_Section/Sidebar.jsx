import ChatList from "./Chat_List/ChatList";
import Header from "./header/Header";
import DesktopSearch from "./Search/DesktopSearch/DesktopSearch";

function Sidebar() {
  return (
    <div className="sm:col-span-5  md:col-span-4 lg:col-span-3 col-span-12 p-2 bg-slate-400 h-screen flex flex-col ">
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
