import { LockKeyhole, Mail, User2Icon, XCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { signupSchema } from "../../utils/validation/validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/general_ui_components/Input";
import { registerUser } from "../../feature/auth/authThunk";
import { useDispatch, useSelector } from "react-redux";
import { Waveform } from "ldrs/react";
import "ldrs/react/Waveform.css";

// Default values shown

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, status, error } = useSelector((state) => state.auth);

  const handleSignup = async (data) => {
    const user = await dispatch(registerUser(data));
    if (user?.payload) {
      navigate("/home");
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center px-6 justify-center">
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white text-black max-w-sm w-full p-6 rounded shadow-xl relative"
      >
        <Link to="/" className="absolute top-4 right-4">
          <XCircle className="cursor-pointer h-6 w-6 text-red-500" />
        </Link>
        <h2 className="text-2xl text-center font-bold mb-2">Sign up</h2>
        <p className="text-center text-md">Welcome to the Chat App!</p>
        {error && <p className="text-center text-sm text-red-500">{error}</p>}

        <form onSubmit={handleSubmit(handleSignup)}>
          <Input
            name="name"
            label="Name"
            register={register}
            placeholder="Enter your name"
            error={errors?.name?.message}
            type="text"
            Icon={User2Icon}
          />
          <Input
            name="email"
            label="Email"
            register={register}
            placeholder="Enter your email"
            type="email"
            Icon={Mail}
            error={errors?.email?.message}
          />
          <Input
            name="password"
            label="Password"
            register={register}
            placeholder="Enter your password"
            type="password"
            Icon={LockKeyhole}
            error={errors?.password?.message}
          />
          <Input
            name="confirm_password"
            label="Confirm Password"
            register={register}
            placeholder="Confirm Password"
            type="password"
            Icon={LockKeyhole}
            error={errors?.confirm_password?.message}
          />
          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-400">
              Login Now
            </Link>
          </p>
          <button
            type="submit"
            className="w-full px-4 py-2 rounded-full bg-orange-500 text-white font-bold mt-4"
          >
            {status === "loading" ? (
              <Waveform size="35" stroke="3.5" speed="1" color="black" />
            ) : (
              "Register"
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default Signup;
