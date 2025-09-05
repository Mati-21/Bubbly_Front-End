import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Message from "./Message";
import ImageDisplayer from "./ImageDisplayer";
import VideoDisplayer from "./VideoDisplayer";
import FileDisplayer from "./FileDisplayer";
import { getFileType } from "../../../../utils/getFileType";

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
      className="flex-1 space-y-2 my-2 overflow-y-scroll scrollbar relative px-2"
    >
      {messages?.map((message, i) => {
        const me = message.sender._id === user._id;

        return (
          <div key={i}>
            {/* Files */}
            {message.files?.length > 0 && (
              <div
                className={`flex flex-col ${
                  me ? "items-end" : "items-start"
                } gap-2 flex-wrap mt-2`}
              >
                {message.files.map((fileObj, index) => {
                  const fileType = getFileType(fileObj.type);
                  if (fileType === "image") {
                    return <ImageDisplayer key={index} file={fileObj} />;
                  } else if (fileType === "VIDEO") {
                    return <VideoDisplayer key={index} file={fileObj} />;
                  } else {
                    return <FileDisplayer key={index} file={fileObj} />;
                  }
                })}
              </div>
            )}

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
