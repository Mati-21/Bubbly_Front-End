import EmojiPicker from "emoji-picker-react";
import { Smile } from "lucide-react";
import { useState } from "react";

function EmojiComponent({ textRef, setMessage, showEmoji, setShowEmoji }) {
  const handleEmoji = (emojiData) => {
    const { emoji } = emojiData;

    const input = textRef?.current;
    if (!input) return;

    const start = input.selectionStart || 0;
    const end = input.selectionEnd || 0;

    const before = input.value.slice(0, start);
    const after = input.value.slice(end);

    const newText = before + emoji + after;
    setMessage(newText);

    // Set cursor after emoji and focus input
    setTimeout(() => {
      const newCursorPos = before.length + emoji.length;
      input.focus();
      input.selectionStart = input.selectionEnd = newCursorPos;
    }, 0);
  };

  return (
    <div className="cursor-pointer relative">
      {showEmoji && (
        <div className="absolute bottom-20 z-50">
          <EmojiPicker onEmojiClick={handleEmoji} />
        </div>
      )}
      <Smile onClick={() => setShowEmoji((prev) => !prev)} />
    </div>
  );
}

export default EmojiComponent;
