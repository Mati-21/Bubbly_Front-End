import { EllipsisVertical, Menu, Search } from "lucide-react";
import { useSelector } from "react-redux";

function Header() {
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  return (
    <div className="w-full">
      {/* for Desktop */}
      <div className="hidden sm:flex items-center  justify-between p-2 ">
        {/* header left */}
        <div className="flex gap-2">
          <div className="size-10 rounded-full overflow-hidden ">
            <img src={user.picture} alt="" className="h-10 w-10 object-cover" />
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold">{user.name}</h1>
            <span className="text-xs">{user.bio}</span>
          </div>
        </div>
        {/* header Right */}
        <div>
          <EllipsisVertical className="cursor-pointer" />
        </div>
      </div>

      {/* for mobile  */}
      <div className="flex items-center  justify-between p-2 sm:hidden">
        <div>
          <Menu />
        </div>
        <div>
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Header;
