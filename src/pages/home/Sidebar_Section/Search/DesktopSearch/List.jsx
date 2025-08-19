function List({ chat }) {
  console.log(chat);
  return (
    <div className="w-full  flex items-center justify-between p-2 bg-gray-500 hover:bg-gray-600 duration-300 transition-all">
      <div className="flex  gap-2">
        <img
          src={chat.picture[0]}
          alt=""
          className="size-12 rounded-full object-cover"
        />
        <div>
          <h2 className="font-bold text-gray-800">{chat.name}</h2>
          <p className="text-sm font-semibold text-gray-800">{chat.bio}</p>
        </div>
      </div>
    </div>
  );
}

export default List;
