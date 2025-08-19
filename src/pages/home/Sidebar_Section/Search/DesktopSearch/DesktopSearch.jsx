import axios from "axios";
import { Search } from "lucide-react";
import { useState } from "react";

function DesktopSearch({ setSearchResult }) {
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
    <div className="hidden sm:flex items-center gap-2 mt-2 rounded-full border bg-slate-100 p-1  ">
      <input
        type="text"
        onKeyDown={(e) => handleSearch(e)}
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        className="w-full text-black pl-2 bg-transparent border-none focus:outline-none"
      />
      <div className="bg-white text-black p-2 rounded-full">
        <Search className="size-4" />
      </div>
    </div>
  );
}

export default DesktopSearch;
