import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-gray-300 flex shadow-md  items-center col-span-12 h-16 font-bold text-14 md:text-20 lg:text-24  justify-between lg:px-20 md:px-10 px-6  py-2">
      <motion.h1
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className=" font-bold text-orange-400 text-sm md:text-lg lg:text-2xl"
      >
        Bubbly
      </motion.h1>
      <ul className="items-center hidden lg:flex space-x-6 ">
        <motion.li
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Link className="lg:text-xl md:text-md text-slate-600 relative group">
            About us
            <span className="absolute bottom-0 left-0 border-b-2 border-orange-400 h-0.5 w-0 group-hover:w-full duration-300 transition-all "></span>
          </Link>
        </motion.li>
        <motion.li
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <Link className="lg:text-xl  md:text-md text-slate-600 relative group">
            Contact
            <span className="absolute bottom-0 left-0 border-b-2 border-orange-400 h-0.5 w-0 group-hover:w-full duration-300 transition-all "></span>
          </Link>
        </motion.li>
      </ul>
      <div className="flex gap-2 items-center lg:gap-6">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Link className="lg:text-xl md:text-md text-slate-600">Login</Link>
        </motion.div>
        <divc>
          <Link className="bg-orange-400 px-2 py-1 md:px-4 md:py-2 text-xs md:text-sm lg:text-md text-white rounded-full ">
            Get Started
          </Link>
        </divc>
      </div>
    </div>
  );
}

export default Navbar;
