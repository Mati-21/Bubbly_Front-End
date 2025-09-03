import { useEffect, useState } from "react";

function Input({ groupName, setGroupName }) {
  useEffect(() => {}, []);

  return (
    <div className="flex flex-col gap-2">
      <span className=" text-white text-sm ">Group Name</span>
      <input
        type="text"
        className="bg-gray-700 p-2 rounded-sm outline-none text-white"
        placeholder="Enter group name"
        value={groupName}
        onChange={(e) => setGroupName(e.target.value)}
      />
    </div>
  );
}

export default Input;
