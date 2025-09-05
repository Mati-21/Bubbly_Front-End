import { Send, Smile } from "lucide-react";
import Input from "./Input/Input";
import Attachment from "./Attachment/Attachment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { send_Message } from "../../../../feature/chat/chatThunk";
import EmojiComponent from "./EmojiPicker/EmojiComponent";
import { uploadFiles } from "../../../../utils/UploadFiles";
import { clearFiles } from "../../../../feature/chat/chatSlice";
import { useSocket } from "../../../../context/useSocket";
import { Tailspin } from "ldrs/react";

function ChatActions({ showEmoji, setShowEmoji, textRef }) {
  const [message, setMessage] = useState("");
  const [localFiles, setLocalFiles] = useState([]);
  const { activeChat, status } = useSelector((state) => state.chat);
  const { socket } = useSocket();
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  // const inpRef = useRef;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    const uploaded_images = await uploadFiles(localFiles);
    setUploading(false);

    dispatch(clearFiles());

    const msg = {
      chat_id: activeChat._id,
      message,
      files: uploaded_images || [],
    };

    const { payload } = await dispatch(send_Message(msg));
    console.log(payload);

    socket.emit("sendMessage", payload);

    setMessage("");
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="px-4 py-2 bg-slate-500 w-full flex items-center gap-3 relative"
    >
      <EmojiComponent
        showEmoji={showEmoji}
        setShowEmoji={setShowEmoji}
        message={message}
        setMessage={setMessage}
        textRef={textRef}
      />
      <Input setMessage={setMessage} message={message} textRef={textRef} />
      <Attachment setLocalFiles={setLocalFiles} />
      {uploading === true || status === "loading" ? (
        <Tailspin size="20" stroke="5" speed="0.9" color="black" />
      ) : (
        <button type="submit">
          <Send color="yellow" />
        </button>
      )}
    </form>
  );
}

export default ChatActions;
