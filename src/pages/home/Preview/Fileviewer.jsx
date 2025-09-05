function Fileviewer({ files, activeIndex }) {
  const file = files[activeIndex];
  console.log(file);

  if (!file) return null;

  return (
    <div className="h-80 min-w-64 sm:h-80 sm:w-[500px] bg-red-100 mx-auto mt-12">
      {file.type === "image" && (
        <img
          src={file.imgData}
          alt="preview"
          className="w-full h-full object-cover object-top"
        />
      )}

      {file.type === "VIDEO" && (
        <video
          src={file.imgData}
          controls
          className="w-full h-full object-cover object-top"
        />
      )}

      {/* Other file types */}
      {file.type !== "image" && file.type !== "video" && (
        <div className="flex items-center justify-center h-full">
          <img
            src={`../../../../../public/images/${file.type}.png`}
            alt={file.type}
            className="w-24 h-24 object-contain"
          />
        </div>
      )}
    </div>
  );
}

export default Fileviewer;
