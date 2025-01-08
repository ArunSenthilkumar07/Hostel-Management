import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Divider,
  useTheme,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { DirectionsBus, Alarm, AddCircleOutline } from "@mui/icons-material";

// Static data for transport management
const TransportSchedules = {
  pickup: "7:00 AM",
  drop: "7:00 PM",
  emergency: "Available 24/7",
  outings: "9:00 AM - 5:00 PM",
};

const TransportRequests = [
  { type: "Late Night Pickup", status: "Pending" },
  { type: "Bus Pass Application", status: "Completed" },
  { type: "Transport for Outing", status: "Approved" },
];

const TransportManagementDetails = () => {
  const theme = useTheme();
  const [requestType, setRequestType] = useState("");
  const [requestDetails, setRequestDetails] = useState("");

  const handleRequestSubmit = () => {
    // Simulate request submission
    alert(`Request Submitted: ${requestType} - Details: ${requestDetails}`);
    setRequestType("");
    setRequestDetails("");
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" color="primary" gutterBottom sx={{fontWeight:899}}>
        Transport Management
      </Typography>

      {/* View Transport Schedule Section */}
      <Typography variant="h6" sx={{fontWeight:899 }} gutterBottom>
        Transport Schedules
      </Typography>
      <Card elevation={3} sx={{ borderRadius: 2, mb: 3 }}>
        <CardContent>
          <Typography variant="body1">
            <strong>Pickup Time: </strong>{TransportSchedules.pickup}
          </Typography>
          <Typography variant="body1">
            <strong>Drop Time: </strong>{TransportSchedules.drop}
          </Typography>
          <Typography variant="body1">
            <strong>Emergency Transport: </strong>{TransportSchedules.emergency}
          </Typography>
          <Typography variant="body1">
            <strong>Outings: </strong>{TransportSchedules.outings}
          </Typography>
        </CardContent>
      </Card>

      {/* Track Transport Availability Section */}
      <Typography variant="h6" sx={{ fontWeight:899}} gutterBottom>
        Track Transport Availability
      </Typography>
      <Card elevation={3} sx={{ borderRadius: 2, mb: 3 }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ fontWeight:"bold" }}>
                Current Transport Availability
              </Typography>
              <Typography variant="body1" >
                Available for Outings: <strong >Yes</strong>
              </Typography>
              <Typography variant="body1">
                Available for Emergencies: <strong>Yes</strong>
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Next Transport Availability
              </Typography>
              <Typography variant="body1">
                Outings: <strong>9:00 AM</strong>
              </Typography>
              <Typography variant="body1">
                Emergency: <strong>Available 24/7</strong>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Submit Transport Request Section */}
      <Typography variant="h6" sx={{ fontWeight: "bold" }} gutterBottom>
        Submit Transport-Related Request
      </Typography>
      <Card elevation={3} sx={{ borderRadius: 2 }}>
        <CardContent>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Submit a request for transport-related needs, such as late night pickups or bus pass applications.
          </Typography>

          {/* Request Type Selection */}
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Request Type</InputLabel>
            <Select
              value={requestType}
              onChange={(e) => setRequestType(e.target.value)}
              label="Request Type"
            >
              <MenuItem value="Late Night Pickup">Late Night Pickup</MenuItem>
              <MenuItem value="Bus Pass Application">Bus Pass Application</MenuItem>
              <MenuItem value="Transport for Outing">Transport for Outing</MenuItem>
            </Select>
          </FormControl>

          {/* Request Details */}
          <TextField
            label="Request Details"
            fullWidth
            multiline
            rows={4}
            value={requestDetails}
            onChange={(e) => setRequestDetails(e.target.value)}
            sx={{ mb: 2 }}
          />

          {/* Submit Button */}
          <Button
            variant="contained"
            color="primary"
            onClick={handleRequestSubmit}
            startIcon={<AddCircleOutline />}
            fullWidth
          >
            Submit Request
          </Button>
        </CardContent>
      </Card>

      {/* Transport Request Status */}
      <Typography variant="h6" sx={{ fontWeight: "bold" }} gutterBottom>
        Transport Requests Status
      </Typography>
      <Card elevation={3} sx={{ borderRadius: 2 }}>
        <CardContent>
          {TransportRequests.map((request, index) => (
            <Box key={index} sx={{ my: 1 }}>
              <Typography variant="body1">
                <strong>{request.type}</strong> - Status:{" "}
                <span style={{ fontWeight: "bold", color: request.status === "Pending" ? "orange" : request.status === "Completed" ? "green" : "blue" }}>
                  {request.status}
                </span>
              </Typography>
            </Box>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};

export default TransportManagementDetails;
