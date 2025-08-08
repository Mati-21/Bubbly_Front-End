function Fileviewer({ files, activeIndex }) {
  return (
    <div className="h-64 min-w-64 sm:h-96 sm:w-[500px] bg-red-100 mx-auto mt-12 ">
      {files[activeIndex]?.type === "image" && (
        <img
          src={files[activeIndex]?.imgData}
          className="w-full h-full object-cover object-top"
        />
      )}
    </div>
  );
}

export default Fileviewer;
