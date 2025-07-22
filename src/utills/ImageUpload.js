// utils/uploadImages.js
import { API_NODE_URL } from "@/configs/config";

export async function uploadImages(files, folderName = "") {
  const formData = new FormData();

  for (const file of files) {
    formData.append("files", file);
  }

  if (folderName) {
    formData.append("folderName", folderName);
  }

  try {
    const response = await fetch(`${API_NODE_URL}upload/`, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Image upload failed");
    }

    return data.data.fileUrls; // array of uploaded image URLs
  } catch (error) {
    console.error("Upload error:", error);
    throw error;
  }
}
