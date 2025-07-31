// components/GuestRoute.jsx
import { Navigate } from "react-router-dom";

function GuestRoute({ isAuthenticated, status, children }) {
  if (status === "loading") {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return !isAuthenticated ? children : <Navigate to="/home" />;
}

export default GuestRoute;
