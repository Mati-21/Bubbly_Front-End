import { useEffect, useState } from "react";
import List from "./List";
import axios from "axios";

function ChatList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("https://randomuser.me/api/?results=50", {
          withCredentials: false,
        });
        setUsers(res.data.results);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchUsers();
  }, []);
  console.log(users);
  console.log(users[0]);

  return (
    <div className="space-y-2 mt-4 flex-1 overflow-scroll scrollbar overflow-x-hidden  ">
      {users.map((user, i) => (
        <List key={i} user={user} />
      ))}
    </div>
  );
}
export default ChatList;
