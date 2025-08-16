import { Camera } from "lucide-react";

function ImageUploader({ setOpenFullProfile }) {
  return (
    <div className="mt-8">
      <div className="size-40 rounded-full relative overflow-hidden ">
        <img
          src="https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg"
          alt=""
          className="h-full w-full object-cover rounded-full cursor-pointer"
          onClick={() => setOpenFullProfile((prev) => !prev)}
        />
        <div className="absolute cursor-pointer bottom-0 w-full flex items-center justify-center h-10 z-20  bg-black/40">
          <Camera color="white" />
        </div>
        <input type="file" className=" hidden" />
      </div>
    </div>
  );
}

export default ImageUploader;
