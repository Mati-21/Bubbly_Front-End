import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Landing from "./pages/landing/Landing";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "./feature/auth/authThunk";
import { io } from "socket.io-client";

function App() {
  const SERVER_ENDPOINT = import.meta.env.VITE_SERVER_ENDPOINT;

  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = io(SERVER_ENDPOINT);

    return () => {
      socketRef.current.disconnect();
    };
  }, [SERVER_ENDPOINT]);

  const dispatch = useDispatch();
  const { isAuthenticated, hasLoaded } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  if (!hasLoaded) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}>
          <Route
            path="login"
            element={isAuthenticated ? <Navigate to="/home" /> : <Login />}
          />
          <Route
            path="signup"
            element={isAuthenticated ? <Navigate to="/home" /> : <Signup />}
          />
        </Route>

        <Route
          path="/home"
          element={isAuthenticated ? <Home /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
