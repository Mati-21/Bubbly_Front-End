import { useDispatch, useSelector } from "react-redux";
import { closeSelectedUserProfile } from "../../feature/ui/ui";

// function SelectedUserProfile() {
//   const dispatch = useDispatch();
//   const { activeChat } = useSelector((state) => state.chat);
//   console.log(activeChat);

//   return (
//     <div
//       onClick={() => dispatch(closeSelectedUserProfile())}
//       className="absolute inset-0 flex justify-center items-center bg-black/20 z-40"
//     >
//       {/* Modal content */}
//       <div
//         onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
//         className="w-[400px]  bg-gray-50 flex flex-col  rounded-xl shadow-lg"
//       >
//         <div className="w-full">
//           <img
//             src={activeChat.picture[0]}
//             className="h-[400px] w-full object-cover bg-top"
//             alt=""
//           />
//         </div>
//         <div className="flex-1">
//           <p>Some profile details go here...</p>
//           <p>Some profile details go here...</p>
//           <p>Some profile details go here...</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SelectedUserProfile;

import { FiPhone, FiMessageSquare, FiHeart, FiShare2 } from "react-icons/fi";
import { X } from "lucide-react";

function SelectedUserProfile() {
  const dispatch = useDispatch();
  const { activeChat } = useSelector((state) => state.chat);
  console.log(activeChat);

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
            src={activeChat.picture[0]}
            alt="Profile"
            className="w-full h-64 object-cover bg-top"
          />

          {/* Action buttons (top-right) */}
          <div className="absolute top-3 right-3 flex space-x-2">
            <button className="bg-white/80 p-2 rounded-full shadow">
              <X className="text-gray-700" />
            </button>
          </div>
        </div>

        {/* Bottom content */}
        <div className="p-5">
          {/* Avatar + Name */}
          <div className="flex items-center space-x-3">
            <img
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
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
