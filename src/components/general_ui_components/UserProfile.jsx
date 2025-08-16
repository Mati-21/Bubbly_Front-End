import { Check, Pen, X } from "lucide-react";
import ImageUploader from "./ImageUploader";
import { useState } from "react";

function UserProfile({ setOpenProfile, setOpenFullProfile }) {
  const [showSave, setShowSave] = useState(false);
  const [profileLink, setProfileLink] = useState();
  const handleSave = async () => {
    console.log(profileLink);
    setShowSave(false);
  };

  return (
    <div className="absolute inset-0 flex bg-gray-900/70 z-20 justify-center">
      <div className="min-w-xs max-w-lg h-fit mt-36  w-full bg-slate-200 px-8 py-4 rounded-md">
        {/* Header for the profile */}
        <div className="w-full flex items-center justify-between">
          <h1 className="font-bold text-xl">My Profile</h1>
          <div className="flex gap-4">
            {showSave ? (
              <Check
                strokeWidth={3}
                onClick={handleSave}
                className="cursor-pointer bg-green-500 text-white size-10 p-2 rounded-full"
              />
            ) : null}
            <div className=" bg-slate-200 rouded size-10 rounded-full flex items-center justify-center">
              <Pen strokeWidth={3} size={20} className="cursor-pointer " />
            </div>
            <X
              strokeWidth={3}
              onClick={() => setOpenProfile(false)}
              className="cursor-pointer bg-slate-200 size-10 p-2 rounded-full"
            />
          </div>
        </div>

        {/* image */}
        <div className="flex justify-center items-center flex-col gap-2">
          <ImageUploader
            setShowSave={setShowSave}
            setOpenFullProfile={setOpenFullProfile}
            setProfileLink={setProfileLink}
          />
          <h1 className="font-bold text-2xl">Mati Melkamu</h1>
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
