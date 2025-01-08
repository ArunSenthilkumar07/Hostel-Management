import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Avatar,
  Divider,
  Chip,
  Card,
  CardContent,
  useTheme,
} from '@mui/material';

// Sample data for the dashboard
const reportStatus = {
  complaints: 15,
  resolved: 10,
  pending: 5,
};

const roomAvailability = {
  totalRooms: 200,
  occupied: 150,
  available: 50,
};

const healthUpdates = [
  { title: 'Vaccination', description: 'COVID-19 booster dose due', status: 'Pending' },
  { title: 'Medical Reports', description: 'Annual physical report submitted', status: 'Completed' },
  { title: 'Allergies', description: 'No recent updates', status: 'No Updates' },
];

const Dashboard = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 3,
        backgroundColor: "#f4f6f8",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3, color: "#424242" }}>
      Warden Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Report Status Section */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#37474f" }} gutterBottom>
              Report Status
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Grid container spacing={2}>
              {Object.entries(reportStatus).map(([key, value]) => (
                <Grid item xs={4} key={key}>
                  <Box textAlign="center">
                    <Typography variant="body1" color="#607d8b">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", color: theme.palette.primary.main }}
                    >
                      {value}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>

        {/* Room Availability Section */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#37474f" }} gutterBottom>
              Room Availability
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h6" sx={{ color: theme.palette.primary.main }}>
                Total Rooms: {roomAvailability.totalRooms}
              </Typography>
              <Grid container spacing={1} sx={{ mt: 2 }}>
                <Grid item xs={6}>
                  <Chip
                    label={`Occupied: ${roomAvailability.occupied}`}
                    color="secondary"
                    variant="outlined"
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Chip
                    label={`Available: ${roomAvailability.available}`}
                    color="success"
                    variant="outlined"
                    sx={{ width: "100%" }}
                  />
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>

        {/* Health Updates Section */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#37474f" }} gutterBottom>
              Student Health Updates
            </Typography>
            <Divider sx={{ mb: 2 }} />
            {healthUpdates.map((update, index) => (
              <Card
                elevation={2}
                key={index}
                sx={{
                  mb: 2,
                  borderLeft: `4px solid ${
                    update.status === 'Completed'
                      ? theme.palette.success.main
                      : update.status === 'Pending'
                      ? theme.palette.warning.main
                      : theme.palette.info.main
                  }`,
                }}
              >
                <CardContent>
                  <Typography variant="body1" sx={{ fontWeight: "bold", color: "#37474f" }}>
                    {update.title}
                  </Typography>
                  <Typography variant="body2" color="#607d8b">
                    {update.description}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: "bold",
                      color:
                        update.status === 'Completed'
                          ? "green"
                          : update.status === 'Pending'
                          ? "orange"
                          : "#0288d1",
                    }}
                  >
                    Status: {update.status}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
