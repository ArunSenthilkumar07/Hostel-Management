import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "../redux/store";
import { AuthProvider } from "../context/AuthContext";
import LoginPage from "../components/loginpage/LoginPage";
import StudentDashboard from "./StudentDashboard";
import WardenDashboard from "./WardenDashboard";

const MainNavigator = () => {
  const [userRole, setUserRole] = useState(() => {
    const user = sessionStorage.getItem("user");
    return user ? JSON.parse(user).role : null;
  });

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem("authToken") !== null;
  });

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (user) setUserRole(JSON.parse(user).role);
    const authToken = sessionStorage.getItem("authToken");
    setIsAuthenticated(authToken !== null);
  }, []);

const handleLogin = (userData) => {
    if (userData && userData.role) {
      setIsAuthenticated(true);
      setUserRole(userData.role);
      sessionStorage.setItem("user", JSON.stringify(userData));
      sessionStorage.setItem("authToken", userData.authToken);
    } else {
      console.error("Invalid user data:", userData);
    }
  };
  
  
  const getDashboardRoute = () => {
    switch (userRole) {
      case "student":
        return <StudentDashboard />;
      case "warden":
        return <WardenDashboard />;
      
      default:
        return <LoginPage onLogin={handleLogin} />;
    }
  };

  return (
    <Provider store={store}>
      <AuthProvider>
        <Router>
          
            <Routes>
              <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
              <Route path="/student-dashboard" element={<StudentDashboard />} />
              <Route path="/warden-dashboard" element={<WardenDashboard />} />
             
            </Routes>
        
        </Router>
      </AuthProvider>
    </Provider>
  );
};

export default MainNavigator;
