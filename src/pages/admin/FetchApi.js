
import { API_NODE_URL } from '@/configs/config';

export default async function fetchApi(endPoint, body) {
    const apiUrl = `${API_NODE_URL}${endPoint}`;
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...requestBody }),
        });
        if (!response.ok) {
            return false;
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching API:', error.message);
        throw error;
    }
}