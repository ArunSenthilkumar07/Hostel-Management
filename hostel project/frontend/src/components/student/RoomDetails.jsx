import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

const RoomDetails = () => {
  // Static default data for room details and available rooms
  const [assignedRoom, setAssignedRoom] = useState({
    roomNumber: "101",
    block: "Block A",
    status: "Occupied",
  });

  const [availableRooms, setAvailableRooms] = useState([
    { id: 1, roomNumber: "102", block: "Block A", status: "Available" },
    { id: 2, roomNumber: "203", block: "Block B", status: "Available" },
    { id: 3, roomNumber: "305", block: "Block C", status: "Available" },
  ]);

  const [roomChangeRequest, setRoomChangeRequest] = useState({
    reason: "",
    newRoom: "",
  });

  // Handle room change request form submission
  const handleRoomChangeRequest = () => {
    // Here, we are not sending data anywhere, but we can simulate a successful submission
    alert("Room change request submitted successfully!");
  };


  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h5" color="primary" gutterBottom sx={{ fontWeight: "bold" }}>
        Room Details
      </Typography>

      {/* Assigned Room */}
      <Card sx={{ mb: 3 }}>
        <Typography variant="h6" gutterBottom sx={{padding:2 ,fontWeight: "bold", color: "#37474f" }}>Assigned Room :-</Typography>
        <CardContent>
          <Typography variant="h7">
          <Typography variant="h6" >Room Number : {assignedRoom.roomNumber}</Typography>
          <Typography variant="h6">Block : {assignedRoom.block}</Typography>
          <Typography variant="h6">Status : {assignedRoom.status}</Typography>
          </Typography>
        </CardContent>
      </Card>

      {/* Room Vacancy Availability */}
      <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", color: "#37474f" }}>
        Room Vacancy Availability
      </Typography>
      <Grid container spacing={2}>
        {availableRooms.length > 0 ? (
          availableRooms.map((room) => (
            <Grid item xs={12} sm={6} md={4} key={room.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{room.roomNumber}</Typography>
                  <Typography>Block: {room.block}</Typography>
                  <Typography>Status: {room.status}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography sx={{ fontWeight: "bold", color: "#37474f" }}>No rooms available at the moment.</Typography>
        )}
      </Grid>

      {/* Room Change Request Form */}
      <Typography variant="h6" gutterBottom sx={{ mt: 4 ,fontWeight: "bold", color: "#37474f" }}>
        Room Change Request
      </Typography>
      <TextField
        label="Reason for Room Change"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={roomChangeRequest.reason}
        onChange={(e) =>
          setRoomChangeRequest({ ...roomChangeRequest, reason: e.target.value })
        }
        sx={{ mb: 2 }}
      />
      <TextField
        label="Preferred New Room"
        variant="outlined"
        fullWidth
        value={roomChangeRequest.newRoom}
        onChange={(e) =>
          setRoomChangeRequest({ ...roomChangeRequest, newRoom: e.target.value })
        }
        sx={{ mb: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleRoomChangeRequest}
        sx={{ mt: 2 }}
      >
        Submit Room Change Request
      </Button>
    </Box>
  );
};

export default RoomDetails;
