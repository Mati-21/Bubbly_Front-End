import { Paperclip } from "lucide-react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addFiles } from "../../../../../feature/chat/chatSlice";
import { getFileType } from "../../../../../utils/getFileType";

const allowedTypes = [
  "image/png",
  "image/jpeg",
  "video/mp4",
  "audio/mpeg",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.ms-powerpoint",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
];

function Attachment() {
  const fileRef = useRef();
  const dispatch = useDispatch();

  const handlefile = (e) => {
    const files = Array.from(e.target.files);

    const filteredFiles = files.filter((file) =>
      allowedTypes.includes(file.type)
    );

    filteredFiles.map((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        dispatch(
          addFiles({
            file,
            imgData: e.target.result,
            type: getFileType(file.type),
          })
        );
      };
    });
  };

  return (
    <div>
      <Paperclip
        onClick={() => fileRef.current.click()}
        color="yellow"
        className="cursor-pointer"
      />
      <input
        type="file"
        multiple
        className="hidden"
        ref={fileRef}
        onChange={handlefile}
      />
    </div>
  );
}

export default Attachment;
