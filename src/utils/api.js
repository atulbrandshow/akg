import { API_NODE_URL } from "../configs/config";
import { logAdminActivity } from "./log";

// utils/api.js
export const adminLogin = async ({ email, password }) => {
    const res = await fetch(`${API_NODE_URL}admin/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        credentials:"include",
        body: JSON.stringify({ email, password })
    });

    const result = await res.json();
    // Log Login Details
    if (result.status) {
        logAdminActivity({ adminId: result?.data?.admin?.id, module: "Login", action: 'login', targetId: new Date().toLocaleString(), description: "Admin Login With Role :" + result.data?.admin.role, token: result.data.token })
    }

    return result;
};
