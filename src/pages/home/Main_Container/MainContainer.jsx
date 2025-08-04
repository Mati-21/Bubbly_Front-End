import ChatActions from "./chatActions/ChatActions";
import ChatContainer from "./chatContainer/ChatContainer";
import ChatHeader from "./chatHeader/ChatHeader";

function MainContainer() {
  const activeChat = false;
  return (
    <div
      className={`h-screen ${
        activeChat === true ? "flex flex-col col-span-12" : "hidden"
      }  sm:col-span-7 md:col-span-8 lg:col-span-9  sm:flex flex-col bg-yellow-200`}
    >
      <ChatHeader />
      <ChatContainer />
      <ChatActions />
    </div>
  );
}

export default MainContainer;
