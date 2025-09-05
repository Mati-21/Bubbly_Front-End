function Fileviewer({ files, activeIndex }) {
  const file = files[activeIndex];
  console.log(file);

  if (!file) return null;

  return (
    <div className="h-80 min-w-64 sm:h-80 sm:w-[500px] mx-auto mt-12">
      {file.type === "image" && (
        <div>
          <img
            src={file.imgData}
            alt="preview"
            className="w-full h-full object-cover object-top"
          />
        </div>
      )}

      {file.type === "VIDEO" && (
        <video
          src={file.imgData}
          controls
          className="w-full h-full object-cover object-top"
        />
      )}

      {/* Other file types */}
      {file.type !== "image" && file.type !== "VIDEO" && (
        <div className="flex flex-col gap-1 items-center justify-center h-full">
          <img
            src={`../../../../../public/images/${file.type}.png`}
            alt={file.type}
            className="w-24 h-24 object-contain"
          />
          <h3 className="font-semibold">{file.name}</h3>
          <p className="text-xs font-bold">
            {(file.size / 1024).toFixed(2)} kb
          </p>
        </div>
      )}
    </div>
  );
}

export default Fileviewer;
