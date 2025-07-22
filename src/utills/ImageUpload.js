// utils/uploadImages.js
import { API_NODE_URL } from "@/configs/config";

// Folder name constants
export const FOLDER_NAMES = {
  BANNER: "bannerImage",
  PROFILE: "profileImage",
  GALLERY: "gallery",
  // add more as needed...
};

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

    // Only return image path like "/123.png"
    return data.data.fileUrls.map((url) => {
      try {
        const parsedUrl = new URL(url);
        return parsedUrl.pathname; // gives "/folder/123.png"
      } catch {
        // fallback if not a full URL
        const parts = url.split("/");
        return "/" + parts.slice(-2).join("/"); // fallback to "/folder/filename"
      }
    });
  } catch (error) {
    console.error("Upload error:", error);
    throw error;
  }
}
