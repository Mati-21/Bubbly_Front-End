import { useDispatch, useSelector } from "react-redux";
import { closeSelectedUserProfile } from "../../feature/ui/ui";

import { FiPhone, FiMessageSquare, FiHeart, FiShare2 } from "react-icons/fi";
import { ArrowLeftIcon, ArrowRightIcon, X } from "lucide-react";
import { useState } from "react";

function SelectedUserProfile() {
  const dispatch = useDispatch();
  const [selectedPic, setSelectedPic] = useState(0);
  const { activeChat } = useSelector((state) => state.chat);
  const profile = activeChat.picture;

  const forward = () => {
    console.log(activeChat);
    if (selectedPic < profile.length - 1) {
      setSelectedPic((prev) => prev + 1);
    }
  };
  const backward = () => {
    if (selectedPic > 0) {
      setSelectedPic((prev) => prev - 1);
    }
  };

  return (
    <div
      onClick={() => dispatch(closeSelectedUserProfile())}
      className="absolute inset-0 flex justify-center items-center bg-black/20 z-40"
    >
      <div
        className="max-w-sm mx-auto rounded-3xl overflow-hidden shadow-lg bg-white"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        {/* Top image */}
        <div className="relative">
          <img
            src={activeChat.picture[selectedPic]}
            alt="Profile"
            className="w-full h-64 object-cover bg-top"
          />

          {/* Action buttons (top-right) */}
          <div className="absolute top-3 right-3 flex space-x-2">
            <button className="bg-white/80 p-2 rounded-full shadow">
              <X
                onClick={() => dispatch(closeSelectedUserProfile())}
                className="text-gray-700"
              />
            </button>
          </div>
          <div className="absolute top-1/2 right-3 flex space-x-2 ">
            <button className="bg-white/80 p-2 rounded-full shadow">
              <ArrowRightIcon
                onClick={() => forward()}
                className="text-gray-700"
              />
            </button>
          </div>
          <div className="absolute top-1/2 left-3 flex space-x-2">
            <button className="bg-white/80 p-2 rounded-full shadow">
              <ArrowLeftIcon
                onClick={() => backward()}
                className="text-gray-700"
              />
            </button>
          </div>
        </div>

        {/* Bottom content */}
        <div className="p-5">
          {/* Avatar + Name */}
          <div className="flex items-center space-x-3">
            <img
              src={activeChat.picture[0]}
              alt="Avatar"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <h2 className="text-xl font-semibold">{activeChat.name}</h2>
              <p className="text-sm text-gray-600">
                Makeup Artist at{" "}
                <span className="font-medium">Beat By DAJ</span>
              </p>
              <p className="text-xs text-gray-400">
                926 Mohr Brook, California, USA
              </p>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center mt-3 space-x-1">
            <span className="text-yellow-500">⭐</span>
            <span className="font-medium text-gray-700">4.2/5</span>
            <span className="text-gray-500 text-sm">(120 reviews)</span>
          </div>

          {/* Bio */}
          <p className="mt-4 text-gray-700 text-sm leading-relaxed">
            Hi Girls and Guys! I’m K; originally from South Carolina and I’ve
            been residing in Atlanta for 3 years. I hope you book me for all of
            your hair and beauty.
          </p>

          {/* Action buttons */}
          <div className="flex space-x-4 mt-5">
            <button className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full shadow">
              <FiPhone className="text-gray-600" />
            </button>
            <button className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full shadow">
              <FiMessageSquare className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectedUserProfile;
