import { useState, useEffect } from "react";
import baseURL from '../config';
import axios from "axios";

const UserAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
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

export default UserAuth;