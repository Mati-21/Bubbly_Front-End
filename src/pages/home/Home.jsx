import MainContainer from "./Main_Container/mainContainer";
import Sidebar from "./Sidebar_Section/Sidebar";

function Home() {
  return (
    <div className="h-screen w-screen min-w-[280px] grid grid-cols-12 bg-green-100">
      {/* sidbar */}
      <Sidebar />
      {/* Main Container */}
      <MainContainer />
    </div>
  );
}

export default Home;
