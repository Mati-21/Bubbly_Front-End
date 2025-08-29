import { Check, CheckCheck } from "lucide-react";
import { formatMessageTime } from "../../../../utils/formatDate";
import { getOtherUserId } from "../../../../utils/getCurrentUserId";
import { useSelector } from "react-redux";

function Message({ message, me }) {
  const { user } = useSelector((state) => state.auth);

  const otherUser = getOtherUserId(user._id, message.chat);

  const isRead = message.readby.includes(otherUser);

  return (
    <div className={`w-full    flex ${me ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-sm  min-w-[120px] px-2 py-1 rounded-lg ${
          me
            ? "bg-blue-800 text-white rounded-br-none"
            : "bg-slate-800/70 text-white rounded-bl-none"
        }`}
      >
        {/* Message */}
        <p
          className="text-sm"
          style={{ wordBreak: "break-word", overflowWrap: "break-word" }}
        >
          {message.message}
        </p>
        {/* <Check/> */}

        {/* Time and Check */}
        <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-gray-100">
          <span>{formatMessageTime(message?.createdAt)}</span>
          {me ? isRead ? <CheckCheck size={14} /> : <Check size={14} /> : ""}
        </div>
      </div>
    </div>
  );
}

export default Message;
