import { Plus, X } from "lucide-react";
import { useRef } from "react";
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

function Options({ files, setActiveIndex }) {
  const fileRef = useRef();

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
    <div className="w-full bg-slate-200 h-24 mx-auto mt-2 px-4 py-1 overflow-x-auto flex flex-nowrap gap-4 items-center sm:w-[80%] sm:mt-10 rounded">
      <div className="flex gap-4">
        {files.map((file, i) => {
          console.log(file);
          return (
            <div
              key={i}
              onClick={() => setActiveIndex(i)}
              className="h-16 w-16 rounded overflow-hidden cursor-pointer shadow-lg relative flex-shrink-0"
            >
              <div className="absolute top-0 right-0 h-4 w-4 bg-white flex items-center justify-center">
                <X size={14} color="red" />
              </div>

              {/* Image */}
              {file.type === "image" && (
                <img
                  src={file.imgData}
                  alt="preview"
                  className="w-full h-full object-cover object-top"
                />
              )}
              {/* Video */}
              {file.type === "VIDEO" && (
                <img
                  src={`/images/${file.type}.png`}
                  alt="preview"
                  className="w-full h-full object-cover object-top"
                />
              )}

              {file.type !== "image" && file.type !== "video" && (
                <div className="flex items-center justify-center h-full">
                  <img
                    src={`/images/${file.type}.png`}
                    alt={file.type}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Plus button */}
      <div
        onClick={() => fileRef.current.click()}
        className="h-16 w-16 rounded flex items-center justify-center bg-white cursor-pointer flex-shrink-0"
      >
        <Plus />
        <input
          type="file"
          multiple
          className="hidden"
          ref={fileRef}
          onChange={handleFile}
          accept={allowedTypes.join(",")}
        />
      </div>
    </div>
  );
}

export default Options;
