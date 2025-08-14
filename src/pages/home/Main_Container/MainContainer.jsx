import { useDispatch, useSelector } from "react-redux";
import ChatActions from "./chatActions/ChatActions";
import ChatContainer from "./chatContainer/ChatContainer";
import ChatHeader from "./chatHeader/ChatHeader";
import { getMessages } from "../../../feature/chat/chatThunk";
import { useEffect, useState } from "react";
import Preview from "../Preview/Preview";
import { useSocket } from "../../../context/useSocket";

function MainContainer({ textRef }) {
  const { activeChat, files } = useSelector((state) => state.chat);
  const dispatch = useDispatch();
  const [showEmoji, setShowEmoji] = useState(false);
  const { socket } = useSocket();
  console.log(socket);

  useEffect(() => {
    if (activeChat._id) {
      dispatch(getMessages(activeChat._id));
    }
  }, [activeChat, dispatch]);

  return (
    <div
      className={`h-screen ${
        activeChat?._id ? "flex flex-col col-span-12" : "hidden"
      }  sm:col-span-7 md:col-span-8 lg:col-span-9  sm:flex flex-col relative`}
    >
      {/* <Preview /> */}
      <ChatHeader />
      {files.length > 0 ? (
        <Preview />
      ) : (
        <ChatContainer setShowEmoji={setShowEmoji} />
      )}
      <ChatActions
        showEmoji={showEmoji}
        setShowEmoji={setShowEmoji}
        textRef={textRef}
      />
    </div>
  );
}

export default MainContainer;
