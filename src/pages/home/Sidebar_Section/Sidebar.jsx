import { useSelector } from "react-redux";
import ChatList from "./Chat_List/ChatList";
import Header from "./header/Header";
import DesktopSearch from "./Search/DesktopSearch/DesktopSearch";
import { useState } from "react";
import SearchResult from "./Search_Result/SearchResult";

function Sidebar({ textRef }) {
  const { activeChat } = useSelector((state) => state.chat);
  const [searchResult, setSearchResult] = useState([]);

  return (
    <div
      className={`${
        activeChat?._id ? "hidden" : "flex flex-col flex-1"
      } sm:col-span-5 sm:flex flex-col flex-1  md:col-span-4 lg:col-span-3 col-span-12 p-2 bg-gray-700 h-screen   `}
    >
      {/* header for desktop */}
      <Header />
      {/* Search for Desktop */}
      <DesktopSearch setSearchResult={setSearchResult} />
      {/* Chat List for Desktop */}
      {searchResult.length > 0 ? (
        <SearchResult searchResult={searchResult} />
      ) : (
        <ChatList textRef={textRef} />
      )}
    </div>
  );
}

export default Sidebar;
