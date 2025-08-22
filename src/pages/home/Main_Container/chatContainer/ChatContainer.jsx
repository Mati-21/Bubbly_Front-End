import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Message from "./Message";

function ChatContainer({ setShowEmoji }) {
  const { messages } = useSelector((state) => state.chat);
  const { user } = useSelector((state) => state.auth);

  const endRef = useRef();
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div
      onClick={() => setShowEmoji(false)}
      className="flex-1 space-y-2 my-2 overflow-y-scroll  scrollbar relative px-2"
    >
      {messages?.map((message, i) => {
        const me = message.sender._id === user._id;

        return (
          <div key={i}>
            {/* Files */}
            {message.files?.length > 0 ? (
              <div
                className={`flex flex-col ${
                  me ? "items-end" : "items-start"
                } gap-2 flex-wrap mt-2`}
              >
                {message.files.map((fileObj, index) => (
                  <div
                    key={index}
                    className="w-64 h-64 border rounded overflow-hidden"
                  >
                    <img
                      src={fileObj.file.secure_url}
                      alt="uploaded"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            ) : null}

            {/* Text message */}
            {message?.message && (
              <Message key={message.id} message={message} me={me} />
            )}
          </div>
        );
      })}
      <div ref={endRef}></div>
    </div>
  );
}

export default ChatContainer;
