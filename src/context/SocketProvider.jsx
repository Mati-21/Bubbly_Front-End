import { useRef, useState } from "react";
import { SocketContext } from "./useSocket";
import { io } from "socket.io-client";
import { useEffect } from "react";

function SocketProvider({ children }) {
  const SERVER_ENDPOINT = import.meta.env.VITE_SERVER_ENDPOINT;
  const [socket, setSocket] = useState(null);
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io(SERVER_ENDPOINT);
    setSocket(socketRef.current);

    return () => {
      socketRef.current.disconnect();
    };
  }, [SERVER_ENDPOINT]);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
}

export default SocketProvider;
