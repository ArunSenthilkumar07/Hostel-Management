import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Card,
  CardContent,
  Grid,
  Divider,
} from '@mui/material';

// Sample complaint history data
const complaintHistory = {
  maintenance: [
    { id: 1, comment: "Broken fan in room", status: "Resolved" },
    { id: 2, comment: "Leaking faucet in bathroom", status: "Pending" },
  ],
  food: [
    { id: 1, comment: "Stale food served last night", status: "Resolved" },
    { id: 2, comment: "Less variety in vegetarian options", status: "In Progress" },
  ],
  management: [
    { id: 1, comment: "Rude behavior of staff", status: "Resolved" },
    { id: 2, comment: "Delay in room cleaning service", status: "Pending" },
  ],
};

const ComplaintBox = () => {
  const [complaintType, setComplaintType] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = () => {
    if (!complaintType || !comments) {
      alert("Please fill all fields before submitting!");
      return;
    }

    console.log({ complaintType, comments });
    alert("Complaint Submitted Successfully!");
    setComments('');
    setComplaintType('');
  };

  return (
    <Box sx={{ padding: 3 }}>
      {/* Create Complaint Section */}
      <Typography variant="h5" color="primary" sx={{ fontWeight: "bold" }} gutterBottom>
        Create Complaint
      </Typography>
      <FormControl fullWidth>
        <InputLabel>Complaint Type</InputLabel>
        <Select
          value={complaintType}
          onChange={(e) => setComplaintType(e.target.value)}
        >
          <MenuItem value="maintenance">Maintenance Issues</MenuItem>
          <MenuItem value="food">Food Complaints</MenuItem>
          <MenuItem value="management">Hostel Management</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Additional Comments"
        multiline
        rows={4}
        value={comments}
        onChange={(e) => setComments(e.target.value)}
        fullWidth
        sx={{ marginTop: 2 }}
      />
      <Button
        variant="contained"
        sx={{ marginTop: 2 }}
        onClick={handleSubmit}
      >
        Submit Complaint
      </Button>

      {/* Complaint History Section */}
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", marginTop: 4, marginBottom: 2 }}
      >
        Complaint History
      </Typography>

      {/* Render Complaint History */}
      <Grid container spacing={3}>
        {Object.entries(complaintHistory).map(([type, complaints]) => (
          <Grid item xs={12} md={4} key={type}>
            <Card elevation={3} sx={{ borderRadius: 2 }}>
              <CardContent>
                <Typography
                  variant="h6"
                  color="primary"
                  sx={{ fontWeight: "bold", marginBottom: 1 }}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)} Complaints
                </Typography>
                <Divider sx={{ marginBottom: 2 }} />
                {complaints.map((complaint) => (
                  <Box key={complaint.id} sx={{ marginBottom: 2 }}>
                    <Typography variant="body2" sx={{ marginBottom: 0.5 }}>
                      <strong>Comment:</strong> {complaint.comment}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: "bold",
                        color:
                          complaint.status === "Resolved"
                            ? "green"
                            : complaint.status === "In Progress"
                            ? "orange"
                            : "red",
                      }}
                    >
                      Status: {complaint.status}
                    </Typography>
                    <Divider sx={{ marginY: 1 }} />
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ComplaintBox;
