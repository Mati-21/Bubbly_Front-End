import { useEffect, useRef, useState } from "react";
import MainContainer from "./Main_Container/mainContainer";
import Sidebar from "./Sidebar_Section/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getChats } from "../../feature/chat/chatThunk";
import MobileMenu from "./Sidebar_Section/mobile_menu/MobileMenu";
import { AnimatePresence } from "framer-motion";
import StartingPage from "./Main_Container/StartPage/StartingPage";
import Preview from "./Preview/Preview";

function Home() {
  const dispatch = useDispatch();
  const { activeChat } = useSelector((state) => state.chat);
  const [mobileMenu, setMobileMenu] = useState(false);
  const textRef = useRef();

  const openMobileMenu = () => {
    setMobileMenu(true);
  };
  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

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
      {/* sidbar */}
      <Sidebar openMobileMenu={openMobileMenu} textRef={textRef} />
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
