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
  Chip,
  TextField,
} from "@mui/material";
import { HealthAndSafety, AddCircleOutline, History } from "@mui/icons-material";

// Static data for health records
const HealthDetails = {
  vaccinations: [
    { name: "COVID-19", date: "2024-03-20", status: "Completed" },
    { name: "Hepatitis B", date: "2023-06-15", status: "Completed" },
    { name: "Flu", date: "2024-10-10", status: "Pending" },
  ],
  medicalHistory: [
    { condition: "Asthma", diagnosisDate: "2023-04-10" },
    { condition: "Allergic Rhinitis", diagnosisDate: "2022-11-05" },
  ],
  medicalReports: [
    { reportType: "Blood Test", date: "2024-05-01", status: "Completed" },
    { reportType: "X-Ray", date: "2023-08-20", status: "Completed" },
  ],
};

const HealthRecordDetails = () => {
  const theme = useTheme();
  const [newReport, setNewReport] = useState("");
  const [selectedAction, setSelectedAction] = useState(null);

  const handleSubmitReport = () => {
    // You can add logic to submit the new report here
    alert(`New report submitted: ${newReport}`);
    setNewReport("");
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" color="primary" gutterBottom>
        Student Health Record
      </Typography>

      {/* View Health Details Section */}
      <Typography variant="h6" sx={{ fontWeight: "bold" }} gutterBottom>
        Health Details
      </Typography>
      <Card elevation={3} sx={{ borderRadius: 2, mb: 3 }}>
        <CardContent>
          {/* Vaccinations */}
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Vaccinations
          </Typography>
          {HealthDetails.vaccinations.map((vaccine, index) => (
            <Box key={index} sx={{ my: 1 }}>
              <Typography variant="body2">
                <strong>{vaccine.name}</strong> - Date: {vaccine.date} -{" "}
                <Chip
                  label={vaccine.status}
                  color={vaccine.status === "Completed" ? "success" : "warning"}
                  size="small"
                  sx={{ ml: 1 }}
                />
              </Typography>
            </Box>
          ))}
          <Divider sx={{ my: 2 }} />

          {/* Medical History */}
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Medical History
          </Typography>
          {HealthDetails.medicalHistory.map((condition, index) => (
            <Box key={index} sx={{ my: 1 }}>
              <Typography variant="body2">
                <strong>{condition.condition}</strong> - Diagnosed on{" "}
                {condition.diagnosisDate}
              </Typography>
            </Box>
          ))}
          <Divider sx={{ my: 2 }} />

          {/* Medical Reports */}
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Medical Reports
          </Typography>
          {HealthDetails.medicalReports.map((report, index) => (
            <Box key={index} sx={{ my: 1 }}>
              <Typography variant="body2">
                <strong>{report.reportType}</strong> - Date: {report.date} -{" "}
                <Chip
                  label={report.status}
                  color={report.status === "Completed" ? "success" : "error"}
                  size="small"
                  sx={{ ml: 1 }}
                />
              </Typography>
            </Box>
          ))}
        </CardContent>
      </Card>

      {/* Update Health Records Section */}
      <Typography variant="h6" sx={{ fontWeight: "bold" }} gutterBottom>
        Update Health Records
      </Typography>
      <Card elevation={3} sx={{ borderRadius: 2 }}>
        <CardContent>
          <Typography variant="body1">
            Submit a new health report or update any medical condition.
          </Typography>
          <TextField
            label="New Report or Condition"
            fullWidth
            multiline
            rows={4}
            value={newReport}
            onChange={(e) => setNewReport(e.target.value)}
            sx={{ mt: 2 }}
          />
          <Box sx={{ mt: 2 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmitReport}
              startIcon={<AddCircleOutline />}
              fullWidth
            >
              Submit Report
            </Button>
          </Box>
        </CardContent>
      </Card>

      {/* Action Selection (for navigation, submitting, etc.) */}
      {selectedAction && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="body1">
            You have selected: <strong>{selectedAction}</strong>
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            sx={{ mt: 2 }}
            href={selectedAction}
            target="_blank"
          >
            Proceed to {selectedAction}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default HealthRecordDetails;
