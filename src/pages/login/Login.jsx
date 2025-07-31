import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import { LockKeyhole, Mail, XCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { loginSchema } from "../../utils/validation/validationSchema";
import Input from "../../components/general_ui_components/Input";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../feature/auth/authThunk";
import { Waveform } from "ldrs/react";
import "ldrs/react/Waveform.css";

function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status } = useSelector((state) => state.auth);

  const onSubmit = async (data) => {
    const user = await dispatch(login(data));
    if (user?.payload) {
      navigate("/home");
    }
  };

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

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <Input
            name="email"
            label="Email"
            register={register}
            placeholder="Enter your email"
            type="email"
            Icon={Mail}
            error={errors?.email?.message}
          />

          {/* password */}
          <Input
            name="password"
            label="Password"
            register={register}
            placeholder="Enter your password"
            type="password"
            Icon={LockKeyhole}
            error={errors?.password?.message}
          />

          <p className="text-center mt-4">
            Not a member?{" "}
            <Link to="/signup" className="text-blue-400">
              Register
            </Link>
          </p>
          <button className="w-full px-4 py-2 rounded-full bg-orange-500 text-white font-bold mt-4">
            {status === "loading" ? (
              <Waveform size="35" stroke="3.5" speed="1" color="black" />
            ) : (
              "Login"
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default Login;
