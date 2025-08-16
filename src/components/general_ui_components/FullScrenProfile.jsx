import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";

function FullScrenProfile({ setOpenFullProfile }) {
  const { user } = useSelector((state) => state.auth);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="absolute inset-0 grid grid-cols-12 grid-rows-[1fr_100px] bg-slate-800 z-30 ">
      <X
        strokeWidth={3}
        className="cursor-pointer bg-slate-200 lg:size-10 p-2 rounded-full absolute top-5 right-5 z-20 "
        onClick={() => setOpenFullProfile((prev) => !prev)}
      />
      ;
      <ArrowRight
        strokeWidth={3}
        className="cursor-pointer bg-slate-200 size-10 p-2 rounded-full -translate-y-1/2 right-10  absolute top-1/2 z-30"
      />
      <ArrowLeft
        strokeWidth={3}
        className="cursor-pointer bg-slate-200 size-10 p-2 rounded-full -translate-y-1/2 left-10  absolute top-1/2  z-30"
      />
      {/* First row, from col 2 to col 12 */}
      <div className="col-start-2 col-span-10 md:h-[390px] lg:h-[590px] lg:overflow-hidden bg-green-300 grid relative">
        <img
          src={user.picture[activeIndex]}
          alt="profile"
          className="w-full h-[600px] object-bottom"
        />
      </div>
      {/* Second row, from col 2 to col 12 */}
      <div className="col-start-2 col-span-10  flex items-center justify-center overflow-hidden">
        <div className="   flex justify-between  items-center p-2">
          <span></span>
          <div className="w-96 gap-2 sideScroll flex overflow-x-scroll">
            {user.picture.map((image, i) => (
              <img
                src={image}
                onClick={() => setActiveIndex(i)}
                alt=""
                className="h-20 w-20 object-cover rounded-lg cursor-pointer "
              />
            ))}
          </div>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default FullScrenProfile;
