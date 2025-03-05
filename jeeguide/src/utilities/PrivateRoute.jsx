import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const PrivateRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get("https://jee-study-guide.onrender.com/api/auth/check-auth", { withCredentials: true });
                setIsAuthenticated(response.data.authenticated);
            } catch (error) {
                setIsAuthenticated(false);
            }
        };
        checkAuth();
    }, []);

    if (isAuthenticated === null) return null; // Show loading until check is complete

    return isAuthenticated ? children : <Navigate to="/" state={{ message: "Please sign in to access this page." }}/>;
};

export default PrivateRoute;
