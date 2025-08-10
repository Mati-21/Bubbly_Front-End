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

function Attachment({ setLocalFiles }) {
  const fileRef = useRef();
  const dispatch = useDispatch();

  // 🧠 Store raw files locally in the component

  const handleFile = (e) => {
    const selectedFiles = Array.from(e.target.files);

    // Filter only allowed types
    const filteredFiles = selectedFiles.filter((file) =>
      allowedTypes.includes(file.type)
    );

    // Update local state with raw files
    setLocalFiles((prev) => [...prev, ...filteredFiles]);

    // Loop through and dispatch preview data
    filteredFiles.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        dispatch(
          addFiles({
            imgData: event.target.result, // base64 preview (serializable)
            type: getFileType(file.type),
            name: file.name,
            size: file.size,
          })
        );
      };
    });

    // Clear the file input so same file can be selected again
    e.target.value = "";
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
        onChange={handleFile}
        accept={allowedTypes.join(",")}
      />
    </div>
  );
}

export default Attachment;
