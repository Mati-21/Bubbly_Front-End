function Input({ message, setMessage, textRef }) {
  console.log(textRef.current);
  return (
    <div className="flex-1">
      <input
        type="text"
        ref={textRef}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full outline-none border-none bg-gray-800/80 rounded-md text-white px-2 py-1"
      />
    </div>
  );
}

export default Input;
