import { useEffect } from "react";
import MainContainer from "./Main_Container/mainContainer";
import Sidebar from "./Sidebar_Section/Sidebar";
import { useDispatch } from "react-redux";
import { getChats } from "../../feature/chat/chatThunk";

function Home() {
  const dispatch = useDispatch();
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
      <Sidebar />
      {/* Main Container */}
      <MainContainer />
      {/* Home */}
    </div>
  );
}

export default Home;
