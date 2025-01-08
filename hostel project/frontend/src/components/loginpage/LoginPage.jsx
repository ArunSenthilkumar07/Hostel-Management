import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  AppBar,
  Toolbar,
} from "@mui/material";
import { motion } from "framer-motion";

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

   // users for login
  const dummyUsers = [
    {
      email: "student@gmail.com",
      password: "student123",
      role: "student",
    },
    {
      email: "warden@gmail.com",
      password: "warden123",
      role: "warden",
    }
  ];
  

  const handleLogin = () => {
    let isValid = true;
    setEmailError("");
    setPasswordError("");
    setError("");
  
    if (!validateEmail(email)) {
      setEmailError("Invalid email format.");
      isValid = false;
    }
  
    if (isValid) {
      const trimmedEmail = email.trim();
      const trimmedPassword = password.trim();
  
      // Check if user exists in dummy data
      const user = dummyUsers.find(
        (user) => user.email === trimmedEmail && user.password === trimmedPassword
      );
  
      if (user) {
        const userData = {
          email: user.email,
          role: user.role,
          authToken: "dummyToken123", // Dummy authToken
        };
  
        sessionStorage.setItem("user", JSON.stringify(userData));
        sessionStorage.setItem("authToken", userData.authToken);
        onLogin(userData); // Pass the userData to the parent function
  
        // Role-based routing
        switch (user.role) {
          case "student":
            navigate("/student-dashboard");
            break;
          case "warden":
            navigate("/warden-dashboard");
            break;
          default:
            navigate("/error");
            break;
        }
      } else {
        setError("Invalid email, password, or role.");
      }
    } else {
      setError("Please fix the above errors.");
    }
  };
  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#6c5ce7" }}>
  <Toolbar>
    <Typography 
      variant="h6" 
      component="div" 
      sx={{ flexGrow: 1, color: "#dfe6e9" }} 
    >
      Hostel Management System
    </Typography>
  </Toolbar>
</AppBar>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "calc(90vh - 64px)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Paper elevation={3} sx={{ p: 3, borderRadius: 5, width: 440 }}>
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              align="center"
              sx={{ mb: 3 }}
            >
              Hostel Management System
            </Typography>
            <Box
              component="form"
              sx={{ display: "flex", flexDirection: "column", gap: 3 }}
            >
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!emailError}
                helperText={emailError}
                fullWidth
                required
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!passwordError}
                helperText={passwordError}
                fullWidth
                required
              />
              {error && (
                <Typography variant="body2" color="error" align="center">
                  {error}
                </Typography>
              )}
              <Box sx={{  display: "flex", justifyContent: "center" }}>
                <Button 
                  variant="contained"
                  color="primary"
                  onClick={handleLogin} 
                >
                  Login 
                </Button>
              </Box>
            </Box>
          </Paper>
        </motion.div>
      </Box>
    </Box>
  );
};

export default LoginPage;
