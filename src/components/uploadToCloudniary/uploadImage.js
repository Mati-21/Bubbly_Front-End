import axios from "axios";

export const uploadProfile = async (file) => {
  const cloudName = import.meta.env.VITE_CLOUD_NAME;
  const uploadPreset = import.meta.env.VITE_CLOUD_SECRET;

  console.log(cloudName);
  console.log(uploadPreset);

  const formData = new FormData();
  formData.append("file", file); // ✅ add file
  formData.append("upload_preset", uploadPreset); // ✅ unsigned preset
  formData.append("folder", "Bubbly_Profile");

  try {
    const { data } = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, // ✅ use https
      formData, // ✅ send FormData directly
      {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: false,
      }
    );
    return data; // contains secure_url, public_id, etc.
  } catch (error) {
    console.error("Upload error:", error.response?.data || error.message);
  }
};
