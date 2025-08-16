import { useRef, useState } from "react";
import { Camera } from "lucide-react";
import { uploadProfile } from "../uploadToCloudniary/uploadImage";
import { useSelector } from "react-redux";

function ImageUploader({ setOpenFullProfile, setShowSave, setProfileLink }) {
  const imgRef = useRef();
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  const [preview, setPreview] = useState(
    "https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg"
  );

  const imageHandler = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Create preview URL

    const imageURL = URL.createObjectURL(file);
    const { secure_url } = await uploadProfile(file);
    setProfileLink(secure_url);
    setPreview(imageURL);
    setShowSave(true);

    console.log("Selected File:", file);
  };

  return (
    <div className="mt-8">
      <div className="size-40 rounded-full relative overflow-hidden">
        <img
          src={user.picture[0] || preview}
          alt="profile"
          className="h-full w-full object-cover rounded-full cursor-pointer"
          onClick={() => setOpenFullProfile((prev) => !prev)}
        />

        {/* Overlay camera button */}
        <div
          onClick={() => imgRef.current.click()}
          className="absolute bottom-0 w-full h-10 flex items-center justify-center cursor-pointer bg-black/40 z-20"
        >
          <Camera color="white" />
        </div>

        {/* Hidden input */}
        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={imgRef}
          onChange={imageHandler}
        />
      </div>
    </div>
  );
}

export default ImageUploader;
