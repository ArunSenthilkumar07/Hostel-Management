import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Divider,
} from "@mui/material";

// Sample health records
const initialHealthRecords = [
  {
    sin_number: "E21CS045",
    studentName: "John Wick",
    department:"CSE",
    healthCondition: "Asthma",
    vaccination: "COVID-19 (2 doses)",
    lastUpdated: "2024-01-15",
  },
  {
    sin_number: "E21IT099",
    studentName: "Karthi",
    department:"IT",
    healthCondition: "None",
    vaccination: "Hepatitis B, Influenza",
    lastUpdated: "2023-12-10",
  },
  {
    sin_number: "E21ME012",
    studentName: "Anjali Sharma",
    department: "Mechanical",
    healthCondition: "Allergy (Pollen)",
    vaccination: "COVID-19 (2 doses), Typhoid",
    lastUpdated: "2024-02-05",
  },
  {
    sin_number: "E21EC034",
    studentName: "Rohan Gupta",
    department: "ECE",
    healthCondition: "Diabetes (Type 1)",
    vaccination: "COVID-19 (2 doses), Influenza",
    lastUpdated: "2024-01-20",
  },
  {
    sin_number: "E21EE056",
    studentName: "Sara Ahmed",
    department: "EEE",
    healthCondition: "Hypertension",
    vaccination: "COVID-19 (2 doses), Yellow Fever",
    lastUpdated: "2024-01-25",
  },
  {
    sin_number: "E21CS078",
    studentName: "Michael Brown",
    department: "CSE",
    healthCondition: "None",
    vaccination: "Hepatitis A, COVID-19 (1 dose)",
    lastUpdated: "2023-11-30",
  },
  {
    sin_number: "E21BT067",
    studentName: "Emily Wilson",
    department: "Biotech",
    healthCondition: "Anemia",
    vaccination: "HPV, COVID-19 (2 doses)",
    lastUpdated: "2024-02-10",
  },
  {
    sin_number: "E21CE090",
    studentName: "Rahul Mehta",
    department: "Civil",
    healthCondition: "None",
    vaccination: "Tetanus, Influenza",
    lastUpdated: "2024-01-18",
  },
  {
    sin_number: "E21IT045",
    studentName: "Sophia Taylor",
    department: "IT",
    healthCondition: "Thalassemia Minor",
    vaccination: "COVID-19 (2 doses), Hepatitis B",
    lastUpdated: "2024-01-28",
  },
];

const StudentHealthRecords = () => {
  const [healthRecords, setHealthRecords] = useState(initialHealthRecords);
  const [openDialog, setOpenDialog] = useState(false);
  const [newRecord, setNewRecord] = useState({
    studentName: "",department:"",
    healthCondition: "",
    vaccination: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRecord({ ...newRecord, [name]: value });
  };

  // Add new health record
  const handleAddRecord = () => {
    const updatedRecords = [
      ...healthRecords,
      {
        ...newRecord,
        sin_number: healthRecords.length + 1,
        lastUpdated: new Date().toISOString().split("T")[0],
      },
    ];
    setHealthRecords(updatedRecords);
    setOpenDialog(false);
    setNewRecord({ studentName: "", department:"",healthCondition: "", vaccination: "" });
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
        Student Health Records
      </Typography>

      <Grid container spacing={3}>
        {/* View Health Records */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#37474f" }}
              gutterBottom
            >
              Access Medical Information
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Sin NO </TableCell>
                    <TableCell>Student Name</TableCell>
                    <TableCell>Department</TableCell>
                    <TableCell>Health Condition</TableCell>
                    <TableCell>Vaccination</TableCell>
                    <TableCell>Last Updated</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {healthRecords.map((record) => (
                    <TableRow key={record.sin_number}>
                      <TableCell>{record.sin_number}</TableCell>
                      <TableCell>{record.studentName}</TableCell>
                      <TableCell>{record.department}</TableCell>
                      <TableCell>{record.healthCondition}</TableCell>
                      <TableCell>{record.vaccination}</TableCell>
                      <TableCell>{record.lastUpdated}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>

        {/* Update Health Records */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#37474f" }}
              gutterBottom
            >
              Update Health Records
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Button
              variant="contained"
              color="primary"
              onClick={() => setOpenDialog(true)}
            >
              Add New Record
            </Button>
          </Paper>
        </Grid>
      </Grid>

      {/* Dialog for Adding New Record */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Add Health Record</DialogTitle>
        <DialogContent>
          <TextField
            label="Student Name"
            name="studentName"
            value={newRecord.studentName}
            onChange={handleInputChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Health Condition"
            name="healthCondition"
            value={newRecord.healthCondition}
            onChange={handleInputChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Vaccination"
            name="vaccination"
            value={newRecord.vaccination}
            onChange={handleInputChange}
            fullWidth
            sx={{ mb: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={handleAddRecord}>
            Add Record
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default StudentHealthRecords;
