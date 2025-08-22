import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenFullProfile } from "../../feature/user/userSlice";

function FullScrenProfile() {
  const { user } = useSelector((state) => state.auth);
  const [activeIndex, setActiveIndex] = useState(0);
  const dispatch = useDispatch();

  const handleNext = () => {
    if (activeIndex < user.picture.length - 1) {
      setActiveIndex((prev) => prev + 1);
    }
  };
  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="absolute flex flex-col justify-between overflow-hidden inset-0  bg-slate-800 z-30 ">
      {/* the image */}
      <div className=" grid grid-cols-12  ">
        <X
          strokeWidth={3}
          className="cursor-pointer bg-slate-200 lg:size-10 p-2 rounded-full absolute top-1 right-1 md:top-5 md:right-5 z-20 "
          onClick={() => dispatch(setOpenFullProfile(false))}
        />
        ;
        <ArrowRight
          strokeWidth={3}
          onClick={handleNext}
          className="cursor-pointer bg-slate-200 size-6 md:size-8  lg:size-10 p-2 rounded-full -translate-y-1/2 sm:right-2 right-0 absolute top-1/2 z-30"
        />
        <ArrowLeft
          strokeWidth={3}
          onClick={handlePrev}
          className="cursor-pointer bg-slate-200 size-6 md:size-8  lg:size-10 p-2 rounded-full -translate-y-1/2 sm:left-2 left-0  absolute top-1/2  z-30"
        />
        {/* First row, from col 2 to col 12 */}
        <div className="col-span-10 sm:col-span-8 sm:col-start-3  h-[400px] md:h-[400px] lg:h-[550px] relative pt-6">
          <img
            src={user.picture[activeIndex]}
            alt="profile"
            className="h-full w-full object-cover sm:object-contain"
          />
        </div>
      </div>

      {/* the menu slider */}
      <div className="flex justify-between items-center p-2">
        <span></span>
        <div className="gap-2 sideScroll flex overflow-x-scroll">
          {user.picture.map((image, i) => (
            <img
              key={i}
              src={image}
              onClick={() => setActiveIndex(i)}
              alt=""
              className={`h-20 w-20 object-cover rounded-lg cursor-pointer ${
                i === activeIndex ? "border-2 border-green-400 p-2 " : ""
              } `}
            />
          ))}
        </div>
        <span></span>
      </div>
    </div>
  );
}

export default FullScrenProfile;
