import { motion } from "framer-motion";
import {
  EyeClosed,
  EyeIcon,
  LockKeyhole,
  Mail,
  User2Icon,
  XCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center px-6 justify-center">
      {/* form */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white text-black max-w-sm w-full p-6 rounded shadow-xl relative"
      >
        <Link to="/" className="absolute top-4 right-4">
          <XCircle className="cursor-pointer h-6 w-6 text-red-500" />
        </Link>
        <h2 className="text-2xl text-center font-bold  mb-2">Login</h2>

        <p className="text-center text-md">Welcome back to the Chat App!</p>

        <form>
          <label htmlFor="email" className="block mt-2">
            Email:
          </label>
          <div className="w-full flex items-center mt-1 border border-slate-700 space-y-1 px-4 rounded-md">
            <div>
              <Mail />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className=" text-black px-4 py-1 bg-transparent w-full outline-none placeholder:text-slate-800 placeholder:text-sm"
            />
          </div>
          <label htmlFor="password" className="block mt-2">
            Password:
          </label>
          <div className="w-full flex items-center mt-1 border border-slate-700 space-y-1 px-4 rounded-md">
            <div>
              <LockKeyhole />
            </div>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className=" text-black px-4 py-1 bg-transparent w-full outline-none placeholder:text-slate-800 placeholder:text-sm"
            />
          </div>
        </form>
        <p className="text-center mt-4">
          Not a member?{" "}
          <Link to="/signup" className="text-blue-400">
            Register
          </Link>
        </p>
        <button className="w-full px-4 py-2 rounded-full bg-orange-500 text-white font-bold mt-4">
          Register
        </button>
      </motion.div>
    </div>
  );
}

export default Login;
