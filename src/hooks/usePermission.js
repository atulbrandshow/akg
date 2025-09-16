import { useEffect, useState } from "react";
import { API_NODE_URL } from "../configs/config";

export default function usePermission() {
    const [permissions, setPermissions] = useState([]);
    const [isSuperAdmin, setIsSuperAdmin] = useState(false);
    const [loading, setLoading] = useState(true);
    const [submodules, setSubModules] = useState([])
    const [adminId, setAdminId] = useState("")
    const [adminData, setAdminData] = useState("")
    useEffect(() => {
        const token = localStorage.getItem("admin_token")?.replaceAll('"', '');
        console.log(token);

        const fetchPermissions = async () => {
            try {
                const res = await fetch(`${API_NODE_URL}admin/me`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    credentials: "include",
                });
                const data = await res.json();
                console.log(data);

                if (data.status) {
                    setAdminData(data?.data)
                    setIsSuperAdmin(data?.data?.role === "SuperAdmin")
                    setPermissions(data?.data?.permissions || []);
                    const subModule = data.data.permissions.filter((e) => e.module === 'Pages')
                    if (data?.data?.role != "SuperAdmin") {
                        setAdminId("")
                        setSubModules(subModule[0]?.subModule)
                    }
                    setAdminId(data?.data?._id)
                }
            } catch (err) {
                console.error("Permission fetch error:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchPermissions();
    }, []);

    const hasPermission = (module1, action) => {
        const mod = permissions.find(p => p.module === module1);
        return isSuperAdmin ? true : mod?.actions.includes(action);
    };

    return { permissions, hasPermission, loading, isSuperAdmin, submodules, adminId, adminData };
}
