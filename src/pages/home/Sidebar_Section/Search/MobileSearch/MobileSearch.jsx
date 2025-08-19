import axios from "axios";
import { Search } from "lucide-react";
import { useState } from "react";

function MobileSearch({ setSearchResult, openSearch, setOpenSearch }) {
  const [search, setSearch] = useState("");

  const handleSearch = async (e) => {
    setSearchResult([]);
    if (e.key === "Enter") {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/user/searchUser`,
        { value: search }
      );
      console.log(data);
      setSearchResult(data);
    }
  };

  return (
    <div className="flex gap-2  items-center">
      <input
        type="text"
        onKeyDown={(e) => handleSearch(e)}
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        className={`rounded-full  focus:border-none focus:outline-none bg-gray-500/55 text-white text-sm py-1 border-none duration-500 transition-all ${
          openSearch ? "w-48 px-2 " : "w-0 p-0"
        }`}
      />
      <div>
        <Search onClick={() => setOpenSearch((prev) => !prev)} />
      </div>
    </div>
  );
}

export default MobileSearch;
