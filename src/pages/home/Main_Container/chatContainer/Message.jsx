import { CheckCheck } from "lucide-react";
import { formatMessageTime } from "../../../../utils/formatDate";

function Message({ message, me }) {
  return (
    <div className={`w-full    flex ${me ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-sm  min-w-[120px] px-2 py-1 rounded-lg ${
          me
            ? "bg-blue-800 text-white rounded-br-none"
            : "bg-slate-600/70 text-white rounded-bl-none"
        }`}
      >
        {/* Message */}
        <p
          className="text-sm"
          style={{ wordBreak: "break-word", overflowWrap: "break-word" }}
        >
          {message.message}
        </p>

        {/* Time and Check */}
        <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-gray-100">
          <span>{formatMessageTime(message?.createdAt)}</span>
          {me && <CheckCheck size={14} className="text-blue-100" />}
        </div>
      </div>
    </div>
  );
}

export default Message;
