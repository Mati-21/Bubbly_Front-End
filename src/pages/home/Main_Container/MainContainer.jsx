import { useDispatch, useSelector } from "react-redux";
import ChatActions from "./chatActions/ChatActions";
import ChatContainer from "./chatContainer/ChatContainer";
import ChatHeader from "./chatHeader/ChatHeader";
import { getMessages } from "../../../feature/chat/chatThunk";
import { useEffect } from "react";

function MainContainer() {
  const { activeChat } = useSelector((state) => state.chat);
  const dispatch = useDispatch();

  useEffect(() => {
    if (activeChat._id) {
      dispatch(getMessages(activeChat._id));
    }
  }, [activeChat, dispatch]);

  return (
    <div
      className={`h-screen ${
        activeChat?._id ? "flex flex-col col-span-12" : "hidden"
      }  sm:col-span-7 md:col-span-8 lg:col-span-9  sm:flex flex-col `}
    >
      <ChatHeader />
      <ChatContainer />
      <ChatActions />
    </div>
  );
}

export default MainContainer;
