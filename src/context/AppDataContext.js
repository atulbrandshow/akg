// AppDataContext.js
import { createContext, useState, useEffect } from "react";
import { API_NODE_URL } from "@/configs/config";

export const AppDataContext = createContext();

export function AppDataProvider({ children }) {
    const [homeData, setHomeData] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchHomeData = async () => {
        try {
            const response = await fetch(`${API_NODE_URL}slug?path=/`);
            const result = await response.json();
            if (result.status && result.data) {
                setHomeData(result.data);
            }
        } catch (err) {
            console.error("API error:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchHomeData();
    }, []);

    return (
        <AppDataContext.Provider value={{ homeData, loading }}>
            {children}
        </AppDataContext.Provider>
    );
}
