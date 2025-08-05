import { useEffect, useRef } from "react";
import { Messages } from "../../../../utils/message";
import Message from "./Message";
function ChatContainer() {
  const endRef = useRef();
  useEffect(() => {
    endRef.current?.scrollIntoView();
  });
  return (
    <div className="flex-1 space-y-2 my-2 overflow-y-scroll scrollbar ">
      {Messages.map((message, i) => {
        return (
          <div key={i} className="">
            {/* text MEssage */}
            <Message key={message.id} message={message} me={message.sender} />
          </div>
        );
      })}
      <div ref={endRef}></div>
    </div>
  );
}

export default ChatContainer;
