import { CheckCheck } from "lucide-react";
import { formatMessageTime } from "../../../../utils/formatDate";

function Message({ message, me }) {
  return (
    <div
      className={`w-full  px-4 py-2 flex ${
        me ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-sm px-4 py-1 rounded-xl ${
          me
            ? "bg-blue-600 text-white rounded-br-none "
            : "bg-slate-400 rounded-bl-none"
        }`}
      >
        {/*Message  */}
        <p
          className="text-sm"
          style={{ wordBreak: "break-word", overflowWrap: "break-word" }}
        >
          {message.message}
        </p>

        {/* Time and Check */}
        <p className="text-[10px] text-gray-100 text-right mt-1 flex gap-2">
          {formatMessageTime(message?.createdAt)}
          {me === "Bob" && <CheckCheck size={14} className="text-blue-100 " />}
        </p>
      </div>
    </div>
  );
}

export default Message;
