import { useEffect, useRef, useState } from "react";
import MainContainer from "./Main_Container/mainContainer";
import Sidebar from "./Sidebar_Section/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getChats } from "../../feature/chat/chatThunk";
import MobileMenu from "./Sidebar_Section/mobile_menu/MobileMenu";
import { AnimatePresence } from "framer-motion";
import StartingPage from "./Main_Container/StartPage/StartingPage";
import Preview from "./Preview/Preview";
import { useSocket } from "../../context/useSocket";
import { updateMessage } from "../../feature/chat/chatSlice";
import UserProfile from "../../components/general_ui_components/UserProfile";
import FullScrenProfile from "../../components/general_ui_components/FullScrenProfile";

function Home() {
  const dispatch = useDispatch();
  const { activeChat } = useSelector((state) => state.chat);

  // local states
  const { user } = useSelector((state) => state.auth);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [openFullProfile, setOpenFullProfile] = useState(false);

  // sockets
  const textRef = useRef();
  const { socket } = useSocket();

  const openMobileMenu = () => {
    setMobileMenu(true);
  };
  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  // Join User
  useEffect(() => {
    socket.emit("user joins", user._id);

    socket.on("receiveMessage", (Message) => {
      console.log(Message);
      dispatch(updateMessage(Message));
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
    <div className="h-screen min-h-screen w-screen min-w-[280px] grid grid-cols-12 bg-green-100 relative">
      {/* full screen profile */}
      {openFullProfile ? (
        <FullScrenProfile setOpenFullProfile={setOpenFullProfile} />
      ) : null}

      {/* profile picture */}
      {openProfile ? (
        <UserProfile
          setOpenProfile={setOpenProfile}
          setOpenFullProfile={setOpenFullProfile}
        />
      ) : null}
      {/* sidbar */}
      <Sidebar
        openMobileMenu={openMobileMenu}
        textRef={textRef}
        setOpenProfile={setOpenProfile}
      />
      {/* Main Container if there is active chat */}
      {activeChat._id ? <MainContainer textRef={textRef} /> : <StartingPage />}
      {/* mobile menu */}
      <AnimatePresence>
        {mobileMenu && (
          <MobileMenu
            mobileMenu={mobileMenu}
            closeMobileMenu={closeMobileMenu}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Home;
