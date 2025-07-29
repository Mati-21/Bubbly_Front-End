import Navbar from "./header/Navbar";
import Hero from "./hero/Hero";

function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-300 to-gray-400 w-full grid grid-cols-12 grid-rows-[auto_1fr] ">
      <Navbar />
      <Hero />
    </div>
  );
}

export default Landing;
