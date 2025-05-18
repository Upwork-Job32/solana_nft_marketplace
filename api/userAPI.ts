import axios from "axios";

export const addUser = async (user: any) => {
    try {
        const apiUrl = process.env.NEXT_PUBLIC_SEVER_API_URL;
        if (!apiUrl) {
            throw new Error("API URL is not defined. Please set NEXT_PUBLIC_SEVER_API_URL in your .env.local file.");
        }
        const response = await axios.post(`${apiUrl}/api/addUser`, {
            email: user?.email.address,
            walletAddress: user?.wallet.address,
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 200) {
            console.log('User added successfully:', response.data);
        } else {
            console.error('Failed to add user:', response.status);
        }
    } catch (error) {
        console.error('Error adding user:', error);
    }
}