function HeaderMenu() {
  const handleHeaderMenu = async () => {};

  return (
    <div className="p-2 rounded-md absolute bg-white -bottom-[210px] right-0 max-w-lg min-w-[300px] w-full">
      {/* Triangle */}
      <div
        className="w-0 h-0 absolute -top-[20px] right-[34px]
          border-l-[10px] border-l-transparent 
          border-r-[10px] border-r-transparent 
          border-b-[20px] border-b-white"
      ></div>

      {/* Menu items */}
      <ul className="list-none flex flex-col gap-2 text-black">
        <li className="font-semibold text-sm p-2 bg-slate-200 hover:bg-slate-100  duration-300 transition-all cursor-pointer">
          Setting
        </li>
        <li className="font-semibold text-sm p-2 bg-slate-200 hover:bg-slate-100  duration-300 transition-all cursor-pointer">
          Create Group
        </li>
        <li className="font-semibold text-sm p-2 bg-slate-200 hover:bg-slate-100  duration-300 transition-all cursor-pointer">
          Create Channel
        </li>
        <li className="font-semibold text-sm p-2 bg-slate-200 hover:bg-slate-100  duration-300 transition-all cursor-pointer">
          Admin Dashboard
        </li>
      </ul>
    </div>
  );
}

export default HeaderMenu;
