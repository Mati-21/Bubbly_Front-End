function List({ user }) {
  console.log();
  return (
    <div className="flex items-center justify-between p-2">
      {/* left side  */}
      <div className="text-white flex items-center gap-2">
        <div className="overflow-hidden">
          <img
            src={user.picture.large}
            className="h-14 w-14 rounded-full"
            alt=""
          />
        </div>
        <div>
          <h1 className="flex gap-1">
            <span className="text-xs sm:text-md">{user.name.first}</span>
            <span className="text-xs sm:text-md">{user.name.last}</span>
          </h1>

          <span className="text-xs sm:text-md hidden lg:block">
            {user.email.length > 10
              ? user.email.slice(0, 10) + "..."
              : user.email}
          </span>
          <span className="text-xs sm:text-md lg:hidden">
            {user.email.length > 20
              ? user.email.slice(0, 20) + "..."
              : user.email}
          </span>
        </div>
      </div>
    </div>
  );
}

export default List;
