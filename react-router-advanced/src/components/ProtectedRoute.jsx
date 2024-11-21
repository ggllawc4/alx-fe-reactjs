import React from 'react';
import { Navigate } from 'react-router-dom';

// Simulate authentication status using a custom hook
const useAuth = () => {
    // Simulated authentication logic (replace with real logic as needed)
    const isAuthenticated = true; // Change this to simulate login/logout
    return { isAuthenticated };
};

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/" />; // Redirect unauthenticated users to home
    }

    return children; // Render children if authenticated
};

export default ProtectedRoute;