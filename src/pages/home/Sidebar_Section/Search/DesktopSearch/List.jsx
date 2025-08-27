import { useDispatch } from "react-redux";
import { open_create_chat } from "../../../../../feature/chat/chatThunk";

function List({ chat, setSearchResult }) {
  const dispatch = useDispatch();

  const handleClick = async (receiver_id) => {
    console.log(receiver_id);
    setSearchResult([]);
    dispatch(open_create_chat(receiver_id));
  };

  return (
    <div
      onClick={() => handleClick(chat._id)}
      className="w-full text-white  flex items-center justify-between p-2 bg-gray-800 hover:bg-gray-600 duration-300 transition-all"
    >
      <div className="flex  gap-2">
        <img
          src={chat.picture[0]}
          alt=""
          className="size-12 rounded-full object-cover"
        />
        <div>
          <h2 className="font-bold ">{chat.name}</h2>
          <p className="text-sm font-semibold ">{chat.bio}</p>
        </div>
      </div>
    </div>
  );
}

export default List;
