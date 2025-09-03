function ListOfSelectedUsers({ users }) {
  console.log(users);
  return (
    <div className="p-2 h-[450px] overflow-y-scroll scrollbar bg-slate-400 flex flex-col gap-2">
      {users.map((user) => (
        <div key={user.id || user.name}>{user.label}</div>
      ))}
    </div>
  );
}

export default ListOfSelectedUsers;
