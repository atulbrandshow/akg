import { API_NODE_URL } from "@/configs/config"

export async function uploadImages(files) {
  const formData = new FormData()

  // Handle both single file and array of files
  const fileArray = Array.isArray(files) ? files : [files]

  for (const file of fileArray) {
    formData.append("files", file)
  }

  try {
    const response = await fetch(`${API_NODE_URL}upload/`, {
      method: "POST",
      body: formData,
      credentials: "include",
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || "Image upload failed")
    }

    // Return single URL for single file, array for multiple files
    const urls = data.data.fileUrls.map((url) => {
      try {
        const parsedUrl = new URL(url)
        return parsedUrl.pathname
      } catch {
        // fallback if not a full URL
        const parts = url.split("/")
        return "/" + parts.slice(-2).join("/")
      }
    })

    return Array.isArray(files) ? urls : urls[0]
  } catch (error) {
    console.error("Upload error:", error)
    throw error
  }
}
