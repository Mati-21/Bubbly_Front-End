import { ArrowLeft, ArrowRight, X } from "lucide-react";

function FullScrenProfile({ setOpenFullProfile }) {
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
          src="https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg"
          alt="profile"
          className="w-full h-full  object-cover"
        />
      </div>
      {/* Second row, from col 2 to col 12 */}
      <div className="col-start-2 col-span-10  flex items-center justify-center overflow-hidden">
        <div className="   flex justify-between  items-center p-2">
          <span></span>
          <div className="w-96 gap-2 sideScroll flex overflow-x-scroll">
            <img
              src="https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg"
              alt=""
              className="h-20 w-20 object-cover rounded-lg cursor-pointer "
            />
            <img
              src="https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg"
              alt=""
              className="h-20 w-20 object-cover rounded-lg cursor-pointer "
            />
            <img
              src="https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg"
              alt=""
              className="h-20 w-20 object-cover rounded-lg cursor-pointer "
            />
            <img
              src="https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg"
              alt=""
              className="h-20 w-20 object-cover rounded-lg cursor-pointer "
            />
            <img
              src="https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg"
              alt=""
              className="h-20 w-20 object-cover rounded-lg cursor-pointer "
            />
            <img
              src="https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg"
              alt=""
              className="h-20 w-20 object-cover rounded-lg cursor-pointer "
            />
          </div>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default FullScrenProfile;
