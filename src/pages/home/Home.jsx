import Sidebar from "./Sidebar_Section/Sidebar";

function Home() {
  const activeChat = true;
  return (
    <div className="h-screen grid grid-cols-12 bg-green-100">
      {/* sidbar */}
      <Sidebar />
    </div>
  );
}

export default Home;
