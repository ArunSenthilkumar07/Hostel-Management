import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Avatar,
  Divider,
  useTheme,
} from "@mui/material";

const userProfile = {
  name: "Leo",
  role: "Student",
  department: "CSE",
};

const Report_status = {
  Complaints: 5,
  Resolved: 3,
  Pending: 2,
};

const Room_Details = {
  Assigned_Room: "101",
  Block: "Block A",
};

const Food_Details = [
  {
    type: "Non-Veg",
    items: ["Pasta", "Salad", "Pakora", "Samosa", "Khichris"],
  },
  {
    type: "Veg",
    items: ["Pulao", "Raitas", "Rasam", "Baingan Bharta", "Sambar", "Jalfrezis"],
  },
];

const DashboardComponents = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 2,
        backgroundColor: "#f4f6f8", // Light background color
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h4" color="primary"
        gutterBottom
        sx={{ fontWeight: "bold", mb: 3 }}
      >
        Student Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Profile Info */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar
                sx={{
                  width: 64,
                  height: 64,
                  backgroundColor: "#1e88e5", // Blue color
                  mr: 2,
                }}
              >
                {userProfile.name.charAt(0)}
              </Avatar>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#37474f" }}>
                  {userProfile.name}
                </Typography>
                <Typography variant="body1" color="#607d8b">
                  {userProfile.role}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {userProfile.department}
                </Typography>
                <Divider sx={{ my: 2 }} />
              </Box>
            </Box>
          </Paper>
        </Grid>

        {/* Report Status */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", color: "#37474f" }}>
              Report Status
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Grid container spacing={2}>
              {Object.entries(Report_status).map(([key, value]) => (
                <Grid item xs={4} key={key}>
                  <Box textAlign="center">
                    <Typography variant="body1" color="#607d8b">
                      {key}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1e88e5" }}>
                      {value}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>

        {/* Room Details */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", color: "#37474f" }}>
              Room Details
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Box sx={{ textAlign: "center" }}>
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  border: `4px solid #1e88e5`, // Blue border
                  mx: "auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#e3f2fd", // Light blue background
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", color: "#1e88e5" }}
                >
                  {Room_Details.Assigned_Room}
                </Typography>
              </Box>
              <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
                {Room_Details.Block}
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Food Details */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", color: "#37474f" }}>
              Food Details
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Grid container spacing={2}>
              {/* Veg Column */}
              <Grid item xs={6}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "#1e88e5", mb: 1 }}>
                  Veg
                </Typography>
                {Food_Details[1].items.map((item, index) => (
                  <Typography key={index} variant="body2" sx={{ ml: 2, mt: 0.5 }}>
                    - {item}
                  </Typography>
                ))}
              </Grid>

              {/* Non-Veg Column */}
              <Grid item xs={6}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "#1e88e5", mb: 1 }}>
                  Non-Veg
                </Typography>
                {Food_Details[0].items.map((item, index) => (
                  <Typography key={index} variant="body2" sx={{ ml: 2, mt: 0.5 }}>
                    - {item}
                  </Typography>
                ))}
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardComponents;
