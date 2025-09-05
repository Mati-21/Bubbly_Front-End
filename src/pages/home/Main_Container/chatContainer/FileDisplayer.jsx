import { getFileType } from "../../../../utils/getFileType";

function FileDisplayer({ file }) {
  console.log(file);
  const fileType = getFileType(file.type);
  console.log(fileType);
  return (
    <div className="w-64 bg-gray-700 flex gap-2 items-center p-2 rounded-md">
      <div>
        <img
          src={`../../../../../../public/images/${fileType}.png`}
          className=""
          alt=""
        />
      </div>
      <div className=" h-full flex-1 p-1 text-white font-semibold">
        <h3>{file.file.original_filename}</h3>
        <p className="text-xs">{(file.file.bytes / 1024).toFixed(2)} kb</p>
      </div>
    </div>
  );
}

export default FileDisplayer;
