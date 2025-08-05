import { Data, Picker } from "emoji-mart";
import { Send, Smile } from "lucide-react";
import Input from "./Input/Input";
import Attachment from "./Attachment/Attachment";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { send_Message } from "../../../../feature/chat/chatThunk";

function ChatActions() {
  const [message, setMessage] = useState("");
  const { activeChat } = useSelector((state) => state.chat);
  const dispatch = useDispatch();
  // const inpRef = useRef;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const msg = {
      chat_id: activeChat._id,
      message,
      files: [],
    };
    await dispatch(send_Message(msg));
    setMessage("");
  };

  return (
    <form
      onClick={(e) => handleSubmit(e)}
      className="px-4 py-2 bg-slate-500 w-full flex items-center gap-3"
    >
      <Smile color="yellow" className="cursor-pointer" />
      <Input setMessage={setMessage} message={message} />
      <Attachment />
      <button type="submit">
        <Send color="yellow" />
      </button>
    </form>
  );
}

export default ChatActions;
