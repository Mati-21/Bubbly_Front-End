import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="grid grid-cols-12 col-span-12 ">
      {/* left side hero */}
      <div className="lg:col-span-6 order-2 lg:order-1 lg:space-y-8 lg:mt-20 col-span-12 flex flex-col px-2 md:px-4 lg:px-6">
        <motion.h1
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.6, duration: 1.5 }}
          className="lg:text-5xl font-cursive lg:ml-10 font-bold text-center lg:text-left my-4 text-3xl"
        >
          Let's Connect <br /> With Your Family <br /> And Friends In Real-Time
        </motion.h1>
        <motion.p
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 2.8, duration: 1.5 }}
          className="lg:ml-10 font-abril text-xl text-center lg:text-left"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
          repellat aspernatur iusto, optio sit delectus fugiat tenetur dicta
          inventore hic rerum earum dignissimos incidunt dolorem? Eius provident
          laborum minus perspiciatis.
        </motion.p>
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 3, duration: 1.5 }}
          className="mx-auto mt-10 w-72 lg:ml-0 "
        >
          <Link className="bg-orange-400 lg:ml-10 px-4 py-4 text-xl md:px-4 md:py-4 lg:py-3 my-4  md:text-md lg:text-lg md:text-xl    text-center font-bold md:mx-auto hover:bg-orange-500 duration-300 transition-all  text-white rounded-full w-full block  ">
            Get Start
          </Link>
        </motion.div>
      </div>
      {/* Right side hero */}
      <div className="lg:col-span-6 order-1 lg:order-2 col-span-12 flex items-center justify-center ">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2.4, duration: 1.5 }}
          className="lg:h-[500px] md:h-[400px] h-[300px] w-full flex justify-center relative "
        >
          <div className="absolute top-10 lg:w-[400px] lg:h-[400px] md:w-[300px] md:h-[300px] w-[200px] h-[200px]  rounded-full bg-gradient-to-r from-orange-300 to-orange-600"></div>
          <img
            src="../../../public/images/image3.png"
            alt=""
            className="lg:w-[70%] md:w-[50%] h-auto  object-cover object-top rlative z-40"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
