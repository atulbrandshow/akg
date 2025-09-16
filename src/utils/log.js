import { API_NODE_URL } from "../configs/config";
import { getLocalStorageItem } from "../configs/localstorage";

// utils/logActivity.js
export const logAdminActivity = async ({
    adminId,
    module,
    action,
    targetId,
    targetLabel,
    description,
    token
}) => {
    try {
        let tokenTosent;
        if (!token) {
            tokenTosent = getLocalStorageItem("admin_token").replaceAll('"', "");
        } else {
            tokenTosent = token
        }
        const payload = {
            adminId,
            module,
            action,
            targetId,
            targetLabel,
            description
        }
        await fetch(`${API_NODE_URL}admin-log/save`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...(tokenTosent && { Authorization: `Bearer ${tokenTosent}` })
            },
            credentials:"include",
            body: JSON.stringify(payload)
        });
    } catch (err) {
        console.error('Failed to log activity:', err);
    }
};
