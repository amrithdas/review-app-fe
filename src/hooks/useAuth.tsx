import { useState, useEffect } from "react";
import axios from "axios";

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                    const baseURL = process.env.NODE_ENV === 'production'
                    ? process.env.REACT_APP_PROD_ENDPOINT
                    : process.env.REACT_APP_DEV_ENDPOINT;

                    const response = await axios.get(`${baseURL}accounts/check-auth/`, {
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