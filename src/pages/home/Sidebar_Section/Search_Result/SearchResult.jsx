import { useSelector } from "react-redux";
import List from "../Search/DesktopSearch/List";

function SearchResult({ searchResult, setSearchResult }) {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="space-y-2 mt-4 flex-1 overflow-scroll scrollbar overflow-x-hidden bg-gray-700 rounded ">
      {searchResult.map((chat, i) => {
        if (chat._id !== user._id) {
          return <List key={i} chat={chat} setSearchResult={setSearchResult} />;
        }
      })}
    </div>
  );
}

export default SearchResult;
