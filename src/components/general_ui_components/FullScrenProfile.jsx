import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenFullProfile } from "../../feature/user/userSlice";

function FullScrenProfile() {
  const { user } = useSelector((state) => state.auth);
  const [activeIndex, setActiveIndex] = useState(0);
  const dispatch = useDispatch();
  return (
    <div className="absolute overflow-hidden inset-0 z-30">
      {/* the image */}
      <div className=" grid grid-cols-12 grid-rows-[1fr_100px] bg-slate-800 z-30 ">
        <X
          strokeWidth={3}
          className="cursor-pointer bg-slate-200 lg:size-10 p-2 rounded-full absolute top-2 right-2 md:top-5 md:right-5 z-20 "
          onClick={() => dispatch(setOpenFullProfile(false))}
        />
        ;
        <ArrowRight
          strokeWidth={3}
          className="cursor-pointer bg-slate-200 size-6 md:size-8  lg:size-10 p-2 rounded-full -translate-y-1/2 sm:right-2 right-0 absolute top-1/2 z-30"
        />
        <ArrowLeft
          strokeWidth={3}
          className="cursor-pointer bg-slate-200 size-6 md:size-8  lg:size-10 p-2 rounded-full -translate-y-1/2 sm:left-2 left-0  absolute top-1/2  z-30"
        />
        {/* First row, from col 2 to col 12 */}
        <div className="col-start-2 col-span-10 sm:col-span-6  md:col-span-4 lg:col-start-5 h-[390px]    md:h-[390px] lg:h-[550px] lg:overflow-hidden grid relative pt-6">
          <img
            src={user.picture[activeIndex]}
            alt="profile"
            className="h-full w-full object-cover"
          />
        </div>
        {/* Second row, from col 2 to col 12 */}
      </div>

      {/* the menu slider */}
      <div className="flex justify-between items-center p-2">
        <span></span>
        <div className="w-96 h-10 gap-2 sideScroll flex overflow-x-scroll">
          {user.picture.map((image, i) => (
            <img
              key={i}
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
  );
}

export default FullScrenProfile;
