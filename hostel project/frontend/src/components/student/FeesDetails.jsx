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
} from "@mui/material";
import { CheckCircle, Payment, History } from "@mui/icons-material";

// Static data for fee status and payment options
const FeeStatus = {
  currentBalance: 5000,
  pendingDues: 1500,
  feeHistory: [
    { date: "2024-09-01", amount: 2000, status: "Paid" },
    { date: "2024-08-01", amount: 3000, status: "Paid" },
  ],
};

const PaymentOptions = [
  { label: "Online Payment", link: "/online-payment" },
  { label: "View Payment History", link: "/payment-history" },
];

const FeesDetails = () => {
  const theme = useTheme();
  const [selectedPayment, setSelectedPayment] = useState(null);

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" color="primary" gutterBottom>
        Fees Details
      </Typography>

      {/* Fee Status Section */}
      <Typography variant="h6" sx={{ fontWeight: "bold" }} gutterBottom>
        Fee Status
      </Typography>
      <Card elevation={3} sx={{ borderRadius: 2, mb: 3 }}>
        <CardContent>
          {/* Current Balance */}
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">Current Balance</Typography>
              <Typography variant="body1" sx={{ color: theme.palette.primary.main }}>
                ₹ {FeeStatus.currentBalance}
              </Typography>
            </Grid>

            {/* Pending Dues */}
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">Pending Dues</Typography>
              <Typography variant="body1" sx={{ color: "red" }}>
                ₹ {FeeStatus.pendingDues}
              </Typography>
            </Grid>
          </Grid>

          {/* Fee History */}
          <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2 }}>
            Fee Payment History
          </Typography>
          {FeeStatus.feeHistory.map((payment, index) => (
            <Box key={index} sx={{ my: 1 }}>
              <Typography variant="body2">
                <strong>{payment.date}</strong> - ₹ {payment.amount} -{" "}
                <Chip
                  label={payment.status}
                  color={payment.status === "Paid" ? "success" : "error"}
                  size="small"
                  sx={{ ml: 1 }}
                />
              </Typography>
            </Box>
          ))}
        </CardContent>
      </Card>

      {/* Payment Options Section */}
      <Typography variant="h6" sx={{ fontWeight: "bold" }} gutterBottom>
        Payment Options
      </Typography>
      <Grid container spacing={2}>
        {PaymentOptions.map((option, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Button
              variant="contained"
              color={index % 2 === 0 ? "primary" : "secondary"}
              fullWidth
              sx={{ padding: 2, textTransform: "none" }}
              onClick={() => setSelectedPayment(option.link)}
              startIcon={index === 0 ? <Payment /> : <History />}
            >
              {option.label}
            </Button>
          </Grid>
        ))}
      </Grid>

      {/* Selected Payment Link */}
      {selectedPayment && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="body1">
            You have selected: <strong>{selectedPayment}</strong>
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            href={selectedPayment}
            sx={{ mt: 2 }}
            target="_blank"
          >
            Proceed to {selectedPayment}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default FeesDetails;
