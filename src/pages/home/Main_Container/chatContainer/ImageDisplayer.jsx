function ImageDisplayer({ file }) {
  console.log(file);
  return (
    <div className="h-64 w-64">
      <img
        src={file.file.secure_url}
        alt=""
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export default ImageDisplayer;
