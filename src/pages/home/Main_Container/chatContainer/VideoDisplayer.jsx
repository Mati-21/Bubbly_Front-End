function VideoDisplayer({ file }) {
  return (
    <div className="h-96 w-[500px]">
      <video
        src={file.file.secure_url}
        controls
        className="w-full h-full object-cover object-top"
      />
    </div>
  );
}

export default VideoDisplayer;
