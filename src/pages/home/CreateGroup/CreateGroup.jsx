import { useDispatch } from "react-redux";
import { setCloseCreateGroup } from "../../../feature/ui/ui";
import { X } from "lucide-react";

import { useState } from "react";
import axios from "axios";
import AsyncSelect from "react-select/async";
import Input from "./Input";

function CreateGroup() {
  const dispatch = useDispatch();
  const [groupName, setGroupName] = useState([]);
  const [selectedUsers, setselectedUsers] = useState([]);

  const handleCloseCreateGroup = (e) => {
    e.stopPropagation();
    dispatch(setCloseCreateGroup());
  };

  // 🔹 Load options dynamically when typing
  const loadOptions = async (inputValue) => {
    if (!inputValue) return [];
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/user/searchUser`,
        { value: inputValue }
      );
      console.log(data);

      // react-select expects { value, label }
      return data.map((user) => ({
        value: user._id,
        label: user.name,
        avatar: user.picture[0], // in case you want to show pictures later
      }));
    } catch (error) {
      console.error("Error searching users:", error);
      return [];
    }
  };

  const create = () => {
    const data = {
      groupName,
      selectedUsers,
    };
    console.log(data);

    // ✅ Reset all state
    setGroupName(""); // clear group name
    setselectedUsers([]); // clear selected users

    // ✅ Optionally close the modal
    dispatch(setCloseCreateGroup());
  };

  return (
    <div
      onClick={handleCloseCreateGroup} // close on backdrop click
      className="absolute inset-0 bg-black/20 flex items-center justify-center p-4"
    >
      {/* Container */}
      <div
        onClick={(e) => e.stopPropagation()} // stop closing when clicking inside modal
        className="min-w-[200px] w-full max-w-md  bg-gray-800 p-6 rounded-md flex flex-col gap-4"
      >
        {/* header */}
        <div className="flex justify-end">
          <button
            onClick={handleCloseCreateGroup}
            className="border-2 rounded-full p-1 border-red-500 cursor-pointer"
          >
            <X color="red" size={20} />
          </button>
        </div>

        {/* Group Name Input */}
        <Input groupName={groupName} setGroupName={setGroupName} />

        {/* 🔹 Async Select for searching users */}
        <AsyncSelect
          cacheOptions
          loadOptions={loadOptions}
          defaultOptions
          isMulti
          value={selectedUsers} // show selected users
          onChange={(selected) => setselectedUsers(selected)} // save selected users
          placeholder="Search and select users..."
          className="bg-gray-700"
        />

        <div
          className="text-white cursor-pointer rounded-md bg-slate-400 p-2 text-center 
             shadow-inner shadow-slate-500/50 hover:shadow-[4px_4px_15px_#00000033, -4px_-4px_15px_#ffffff33] 
             transition-shadow duration-300"
          onClick={() => create()}
        >
          Create Group
        </div>

        {/* Count */}
        {selectedUsers.length ? (
          <p className="text-white">
            {selectedUsers.length} user{selectedUsers.length !== 1 && "s"}{" "}
            selected
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default CreateGroup;
