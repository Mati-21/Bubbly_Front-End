import { Check, CloudSnow, Pen, X } from "lucide-react";
import ImageUploader from "./ImageUploader";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadProfileImage } from "../../feature/auth/authThunk";
import { Tailspin } from "ldrs/react";
import "ldrs/react/Tailspin.css";
import { toast } from "react-toastify";
import { setOpenProfile } from "../../feature/ui/ui";

function UserProfile() {
  const dispatch = useDispatch();
  const [showSave, setShowSave] = useState(false);
  const [profileLink, setProfileLink] = useState();
  const [uploadingStatus, setUploadingStatus] = useState(false);
  const { isUploadingProfile } = useSelector((state) => state.auth);

  const handleSave = async () => {
    setShowSave(false);
    setUploadingStatus(true);
    const res = await dispatch(uploadProfileImage({ profileLink })).unwrap();
    if (!isUploadingProfile) {
      setUploadingStatus(false);
      setOpenProfile(false);
      toast.success("Profile updated Successfully!");
    }
  };

  return (
    <div className="absolute inset-0 flex text-white bg-gray-900/70 z-20 justify-center">
      <div className="min-w-xs max-w-lg h-fit mt-36  w-full bg-gray-600 lg:px-8 px-2 py-4 rounded-md">
        {/* Header for the profile */}
        <div className="w-full flex items-center justify-between">
          <h1 className="font-bold lg:text-xl text-sm lg:text-white">
            My Profile
          </h1>
          <div className="flex items-center lg:gap-4 gap-2">
            {(uploadingStatus || isUploadingProfile) && (
              <Tailspin size="20" stroke="5" speed="0.9" color="white" />
            )}
            {showSave && (
              <Check
                strokeWidth={3}
                onClick={handleSave}
                className="cursor-pointer bg-green-500 text-white size-6 p-2 rounded-full"
              />
            )}

            {/* edit pen */}
            <div className=" bg-slate-200/30 rouded lg:size-8 size-6 p-2 rounded-full flex items-center justify-center">
              <Pen strokeWidth={3} size={20} className="cursor-pointer " />
            </div>
            <X
              strokeWidth={3}
              onClick={() => dispatch(setOpenProfile(false))}
              className="cursor-pointer bg-slate-200/30 lg:size-8 size-6 p-2 rounded-full"
            />
          </div>
        </div>

        {/* image */}
        <div className="flex justify-center items-center flex-col gap-2">
          <ImageUploader
            setShowSave={setShowSave}
            setProfileLink={setProfileLink}
            setUploadingStatus={setUploadingStatus}
          />
          <h1 className="font-bold lg:text-2xl text-lg">Mati Melkamu</h1>
          <p className="font-semibold flex items-center gap-2">
            <span className="size-4 rounded-full bg-green-500 block"></span>
            Online
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
