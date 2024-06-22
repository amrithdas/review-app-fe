import { useState, useEffect } from "react";
import axios from "axios";

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/accounts/check-auth/', {
                    withCredentials: true
                });
                setIsAuthenticated(response.data.isAuthenticated);
            } catch (error) {
                setIsAuthenticated(false);
            }
        };

        checkAuthStatus();
    }, []);
    return isAuthenticated;
};

export default useAuth;