import axios from "axios";

const cloudName = import.meta.env.VITE_CLOUD_NAME;
const CloudSecret = import.meta.env.VITE_CLOUD_SECRET;

export const uploadFiles = async (files) => {
  const formData = new FormData();
  formData.append("upload_preset", CloudSecret);
  formData.append("folder", "Bubbly_Chat_App");

  let uploadedFiles = [];

  for (const f of files) {
    console.log(f);
    const { type } = f;
    formData.append("file", f);
    let response = await uploadToCloudinary(formData, type);

    uploadedFiles.push({ file: response, type });
  }
  return uploadedFiles;
};

const uploadToCloudinary = async (formData, type) => {
  const mimeType = type; // e.g. "image/jpeg", "video/mp4", "application/pdf"
  let resourceType;

  if (mimeType.startsWith("image/")) {
    resourceType = "image";
  } else if (mimeType.startsWith("video/") || mimeType.startsWith("audio/")) {
    resourceType = "video";
  } else {
    resourceType = "raw";
  }

  try {
    const { data } = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`,
      formData,
      {
        withCredentials: false, // 🚀 disable sending cookies/auth
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    return data;
  } catch (err) {
    console.log("Cloudinary upload failed:", err);
    throw err;
  }
};
