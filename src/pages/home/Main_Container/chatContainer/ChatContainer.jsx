import { useEffect, useRef } from "react";

import Message from "./Message";
import { useSelector } from "react-redux";
function ChatContainer() {
  const { messages } = useSelector((state) => state.chat);
  const { user } = useSelector((state) => state.auth);

  console.log(messages);

  const endRef = useRef();
  useEffect(() => {
    endRef.current?.scrollIntoView();
  });

  return (
    <div className="flex-1 space-y-2 my-2 overflow-y-scroll scrollbar ">
      {messages?.map((message, i) => {
        const me = message.sender._id === user._id;

        return (
          <div key={i} className="">
            {/* text MEssage */}
            <Message key={message.id} message={message} me={me} />
          </div>
        );
      })}
      <div ref={endRef}></div>
    </div>
  );
}

export default ChatContainer;
