import { useDispatch } from "react-redux";
import { logout } from "../../feature/auth/authThunk";

function Home() {
  const dispatch = useDispatch();
  return (
    <div className="h-screen bg-green-300 flex items-center justify-center">
      <h1 className="text-4xl">Home</h1>
      <button onClick={() => dispatch(logout())} className="p-2 bg-slate-200">
        Logout
      </button>
    </div>
  );
}

export default Home;
