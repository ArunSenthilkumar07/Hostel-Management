import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Rating,
} from "@mui/material";

// Static default data for food details
const MessMenu = [
  {
    type: "Non-Veg",
    items: ["Prawn Thokku",
        "Egg Bhurji",
        "Lamb Chops",
        "Butter Chicken",
        "Fish Makhani",
        "Murgh Dum Biryani"],
  },
  {
    type: "Veg",
    items: ["Pulao", "Raitas", "Rasam", "Baingan Bharta", "Sambar", "Jalfrezi"],
  },
];


const FoodDetails = () => {
  // State to hold feedback values
  const [feedback, setFeedback] = useState({
    rating: 0,
    comment: "",
  });

  // Handle feedback submission
  const handleFeedbackSubmit = () => {
    alert(`Feedback submitted! Rating: ${feedback.rating}, Comment: ${feedback.comment}`);
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h5" color="primary" gutterBottom sx={{fontWeight:"bold"}}>
        Food Details
      </Typography>

      {/* Mess Menu */}
      <Typography variant="h6" sx={{fontWeight:"bold"}} gutterBottom>
        Mess Menu
      </Typography>
      <Grid container spacing={3}>
        {MessMenu.map((menu, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Card>
              <CardContent>
                <Typography color="green" variant="h6" sx={{ fontWeight: "bold" }}>
                  {menu.type} Menu
                </Typography >
                {menu.items.map((item, idx) => (
                  <Typography key={idx} variant="body2" sx={{ ml: 2, mt: 1 }}>
                    - {item}
                  </Typography>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Food Feedback Section */}
      <Typography variant="h6" gutterBottom sx={{ mt: 3 ,fontWeight:"bold" }}>
        Food Feedback
      </Typography>
      <Box sx={{ maxWidth: 400 }}>
        {/* Rating */}
        <Typography variant="body1"  sx={{ fontWeight: "bold",color:" orange" }}>
          Rate the food
        </Typography>
        <Rating
          value={feedback.rating}
          onChange={(_, newValue) => setFeedback({ ...feedback, rating: newValue })}
          sx={{ mb: 2 }}
        />

        {/* Comment Section */}
        <TextField
          label="Your Feedback"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={feedback.comment}
          onChange={(e) => setFeedback({ ...feedback, comment: e.target.value })}
          sx={{ mb: 2 }}
        />
        {/* Submit Button */}
        <Button
          variant="contained"
          color="primary"
          onClick={handleFeedbackSubmit}
          sx={{ mt: 2 }}
        >
          Submit Feedback
        </Button>
      </Box>
    </Box>
  );
};

export default FoodDetails;
