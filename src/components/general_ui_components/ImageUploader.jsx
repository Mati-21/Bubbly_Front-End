import { useRef, useState } from "react";
import { Camera } from "lucide-react";
import { uploadProfile } from "../uploadToCloudniary/uploadImage";
import { useDispatch, useSelector } from "react-redux";
import { setOpenFullProfile } from "../../feature/user/userSlice";

function ImageUploader({ setShowSave, setProfileLink, setUploadingStatus }) {
  const imgRef = useRef();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  const [preview, setPreview] = useState("");

  const imageHandler = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Create preview URL

    const imageURL = URL.createObjectURL(file);
    setUploadingStatus(true);
    const { secure_url } = await uploadProfile(file);
    setProfileLink(secure_url);
    setPreview(imageURL);
    setUploadingStatus(false);
    setShowSave(true);

    console.log("Selected File:", file);
  };

  return (
    <div className="mt-8">
      <div className="lg:size-40 size-28 rounded-full relative overflow-hidden">
        <img
          src={preview || user.picture[0]}
          alt="profile"
          className="h-full w-full object-cover rounded-full cursor-pointer"
          onClick={() => dispatch(setOpenFullProfile(true))}
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
