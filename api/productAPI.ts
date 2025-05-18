import axios from "axios";

export const buyProductAPI = async (productMetadata: Object, user: Object) => {
    const apiUrl = process.env.NEXT_PUBLIC_SEVER_API_URL;
    if (!apiUrl) {
        throw new Error("API URL is not defined. Please set NEXT_PUBLIC_SEVER_API_URL in your .env.local file.");
    }
    const response = await axios.post(`${apiUrl}/api/buyProduct`, { productMetadata, user });
    if (response.status === 200) {
        console.log('Product bought successfully:', response.data);
    } else {
        console.error('Failed to buy product:', response.status);
    }
    return response.data;
}
