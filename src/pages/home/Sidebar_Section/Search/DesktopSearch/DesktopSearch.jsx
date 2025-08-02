import { Search } from "lucide-react";

function DesktopSearch() {
  return (
    <div className="hidden sm:flex items-center gap-2 mt-2 rounded-full border bg-slate-100 p-1  ">
      <input
        type="text"
        className="w-full text-black pl-2 bg-transparent border-none focus:outline-none"
      />
      <div className="bg-white text-black p-2 rounded-full">
        <Search className="size-4" />
      </div>
    </div>
  );
}

export default DesktopSearch;
