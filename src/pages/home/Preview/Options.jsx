import { Plus, X } from "lucide-react";

function Options({ files, setActiveIndex }) {
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
      <div className="h-16 w-16 rounded flex items-center justify-center bg-white cursor-pointer flex-shrink-0">
        <Plus />
      </div>
    </div>
  );
}

export default Options;
