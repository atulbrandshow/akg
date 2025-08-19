import { API_NODE_URL } from "@/configs/config"


class NoticeService {
    constructor() {
        this.baseURL = API_NODE_URL
    }

    async getAllNotices(params = {}) {
        try {
            const queryParams = new URLSearchParams()

            // Add pagination parameters
            if (params.page) queryParams.append("page", params.page)
            if (params.limit) queryParams.append("limit", params.limit)

            // Add filter parameters
            if (params.category) queryParams.append("category", params.category)
            if (params.priority) queryParams.append("priority", params.priority)
            if (params.department) queryParams.append("department", params.department)
            if (params.search) queryParams.append("search", params.search)

            // Add sorting parameters
            if (params.sortBy) queryParams.append("sortBy", params.sortBy)
            if (params.sortOrder) queryParams.append("sortOrder", params.sortOrder)

            const response = await fetch(`${this.baseURL}notices?${queryParams}`)
            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || "Failed to fetch notices")
            }

            return data
        } catch (error) {
            console.error("Error fetching notices:", error)
            throw error
        }
    }

    async getNoticeById(id) {
        try {
            const response = await fetch(`${this.baseURL}notices/${id}`)
            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || "Failed to fetch notice")
            }

            return data
        } catch (error) {
            console.error("Error fetching notice:", error)
            throw error
        }
    }

    async createNotice(noticeData) {
        try {
            const response = await fetch(`${this.baseURL}notices`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(noticeData),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || "Failed to create notice")
            }

            return data
        } catch (error) {
            console.error("Error creating notice:", error)
            throw error
        }
    }

    async updateNotice(id, noticeData) {
        try {
            const response = await fetch(`${this.baseURL}notices/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(noticeData),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || "Failed to update notice")
            }

            return data
        } catch (error) {
            console.error("Error updating notice:", error)
            throw error
        }
    }

    async deleteNotice(id) {
        try {
            const response = await fetch(`${this.baseURL}notices/${id}`, {
                method: "DELETE",
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || "Failed to delete notice")
            }

            return data
        } catch (error) {
            console.error("Error deleting notice:", error)
            throw error
        }
    }

    async getNoticeStats() {
        try {
            const response = await fetch(`${this.baseURL}notices/stats`)
            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || "Failed to fetch statistics")
            }

            return data
        } catch (error) {
            console.error("Error fetching statistics:", error)
            throw error
        }
    }
}

export default new NoticeService()
