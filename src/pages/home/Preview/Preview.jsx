import { useDispatch, useSelector } from "react-redux";
import Fileviewer from "./Fileviewer";
import Options from "./Options";
import { useState } from "react";
import { X } from "lucide-react";
import { clearFiles } from "../../../feature/chat/chatSlice";

function Preview() {
  const { files } = useSelector((state) => state.chat);
  const [activeIndex, setActiveIndex] = useState(0);
  const dispatch = useDispatch();
  return (
    <div className="flex-1 bg-gray-400 relative ">
      <div className="absolute top-1 right-1 p-1 sm:top-5 sm:right-5 bg-white rounded-full sm:p-2 cursor-pointer shadow-lg">
        <X color="red" onClick={() => dispatch(clearFiles())} />
      </div>
      <Fileviewer files={files} activeIndex={activeIndex} />
      <div className="border border-b-slate-300 mt-8"></div>
      <Options files={files} setActiveIndex={setActiveIndex} />
    </div>
  );
}

export default Preview;
