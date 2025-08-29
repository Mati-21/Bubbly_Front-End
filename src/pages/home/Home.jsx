import { useEffect, useRef } from "react";
import MainContainer from "./Main_Container/mainContainer";
import Sidebar from "./Sidebar_Section/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getChats, updateAndGetChats } from "../../feature/chat/chatThunk";
import MobileMenu from "./Sidebar_Section/mobile_menu/MobileMenu";
import { AnimatePresence } from "framer-motion";
import StartingPage from "./Main_Container/StartPage/StartingPage";

import { useSocket } from "../../context/useSocket";
import { updateMessage, updateOnlineUsers } from "../../feature/chat/chatSlice";
import UserProfile from "../../components/general_ui_components/UserProfile";
import FullScrenProfile from "../../components/general_ui_components/FullScrenProfile";

function Home() {
  const dispatch = useDispatch();
  const { activeChat } = useSelector((state) => state.chat);
  const { mobileMenu, openProfile, openFullProfile } = useSelector(
    (state) => state.user
  );
  console.log("Active ", activeChat);

  // local states
  const { user } = useSelector((state) => state.auth);

  // sockets
  const textRef = useRef();
  const { socket } = useSocket();

  // Join User
  useEffect(() => {
    socket.emit("user joins", user._id);

    socket.on("receiveMessage", (Message) => {
      if (activeChat._id === Message.chat._id) {
        console.log("straon");
        dispatch(updateAndGetChats(Message.chat._id));
      }
      dispatch(updateMessage(Message));
    });

    // get online user
    socket.on("get-online-users", (users) => {
      dispatch(updateOnlineUsers(users));
    });
  }, [user, dispatch, socket]);

  // fetch chats for the user
  useEffect(() => {
    try {
      dispatch(getChats());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  return (
    <div className="h-screen min-h-screen w-screen min-w-[280px] grid grid-cols-12 bg bg-slate-600 relative">
      {/* full screen profile */}
      {openFullProfile ? <FullScrenProfile /> : null}

      {/* profile picture */}
      {openProfile ? <UserProfile /> : null}
      {/* sidbar */}
      <Sidebar textRef={textRef} />
      {/* Main Container if there is active chat */}
      {activeChat._id ? <MainContainer textRef={textRef} /> : <StartingPage />}
      {/* mobile menu */}
      <AnimatePresence>{mobileMenu && <MobileMenu />}</AnimatePresence>
    </div>
  );
}

export default Home;
