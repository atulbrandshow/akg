// utils/uploadImages.js
import { API_NODE_URL } from "@/configs/config";

export async function uploadImages(files) {
  const formData = new FormData();

  for (const file of files) {
    formData.append("files", file);
  }

  try {
    const response = await fetch(`${API_NODE_URL}upload/`, {
      method: "POST",
      body: formData,
      credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Image upload failed");
    }

    // Only return image path like "/123.png"
    return data.data.fileUrls.map((url) => {
      try {
        const parsedUrl = new URL(url);
        return parsedUrl.pathname;
      } catch {
        // fallback if not a full URL
        const parts = url.split("/");
        return "/" + parts.slice(-2).join("/");
      }
    });
  } catch (error) {
    console.error("Upload error:", error);
    throw error;
  }
}
