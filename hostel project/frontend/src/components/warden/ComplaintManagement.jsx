import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Grid,
  Chip,
  Snackbar,
  TextField,
} from "@mui/material";

// Sample complaints data
const initialComplaints = [
  {
    sin_number: "E21AI022",
    studentName: "John",
    institution: "Engineering",
    roomNumber: "101",
    type: "Maintenance",
    description: "AC not working in Room 101",
    feedback: "Needs urgent attention",
    status: "Pending",
  },
  {
    sin_number: "E23PH098",
    studentName: "karthi",
    institution: "Pharmacy",
    roomNumber: "202",
    type: "Food",
    description: "Lunch quality was poor today",
    feedback: "Rice was undercooked",
    status: "Resolved",
  },
  {
    sin_number: "E20AH045",
    studentName: "Madhan",
    institution: "AHS",
    roomNumber: "303",
    type: "Hostel Management",
    description: "Water leakage in the bathroom",
    feedback: "Bathroom flooded",
    status: "Pending",
  },
];

const ComplaintManagement = () => {
  const [complaints, setComplaints] = useState(initialComplaints);
  const [filteredComplaints, setFilteredComplaints] = useState(initialComplaints);
  const [notification, setNotification] = useState({ open: false, message: "" });
  const [searchQuery, setSearchQuery] = useState("");

  // Mark complaint as resolved
  const handleResolve = (id) => {
    const updatedComplaints = complaints.map((complaint) =>
      complaint.sin_number === sin_number ? { ...complaint, status: "Resolved" } : complaint
    );
    setComplaints(updatedComplaints);
    setFilteredComplaints(updatedComplaints);

    // Simulate notification
    const resolvedComplaint = complaints.find((complaint) => complaint.sin_number === sin_number);
    setNotification({
      open: true,
      message: `Complaint ID ${sin_number} (${resolvedComplaint.type}) marked as resolved!`,
    });
  };

  // Close notification
  const handleCloseNotification = () => {
    setNotification({ open: false, message: "" });
  };

  // Filter complaints based on search query
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredComplaints(
      complaints.filter(
        (complaint) =>
          complaint.studentName.toLowerCase().includes(query) ||
          complaint.institution.toLowerCase().includes(query) ||
          complaint.roomNumber.includes(query) ||
          complaint.type.toLowerCase().includes(query) ||
          complaint.description.toLowerCase().includes(query)
      )
    );
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 3,
        backgroundColor: "#f4f6f8",
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", mb: 3, color: "#424242" }}
      >
        Complaint Management
      </Typography>

      <Grid container spacing={3}>
        {/* Search Bar */}
        <Grid item xs={12}>
          <TextField
            label="Search Complaints"
            variant="outlined"
            fullWidth
            value={searchQuery}
            onChange={handleSearch}
            sx={{ mb: 3 }}
          />
        </Grid>

        {/* View Complaints Section */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#37474f" }}
              gutterBottom
            >
              View Complaints
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Sin NO</TableCell>
                    <TableCell>Student Name</TableCell>
                    <TableCell>Institution</TableCell>
                    <TableCell>Room Number</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Feedback</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredComplaints.map((complaint) => (
                    <TableRow key={complaint.sin_number}>
                      <TableCell>{complaint.sin_number}</TableCell>
                      <TableCell>{complaint.studentName}</TableCell>
                      <TableCell>{complaint.institution}</TableCell>
                      <TableCell>{complaint.roomNumber}</TableCell>
                      <TableCell>{complaint.type}</TableCell>
                      <TableCell>{complaint.description}</TableCell>
                      <TableCell>{complaint.feedback}</TableCell>
                      <TableCell>
                        <Chip
                          label={complaint.status}
                          color={
                            complaint.status === "Resolved"
                              ? "success"
                              : "warning"
                          }
                        />
                      </TableCell>
                      <TableCell>
                        {complaint.status === "Pending" && (
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={() => handleResolve(complaint.sin_number)}
                          >
                            Resolve
                          </Button>
                        )}
                        {complaint.status === "Resolved" && (
                          <Typography variant="caption" color="textSecondary">
                            Resolved
                          </Typography>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>

      {/* Notification Snackbar */}
      <Snackbar
        open={notification.open}
        message={notification.message}
        autoHideDuration={3000}
        onClose={handleCloseNotification}
      />
    </Box>
  );
};

export default ComplaintManagement;
