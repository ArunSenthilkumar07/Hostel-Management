import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const RoomManagement = () => {
  // Manually provided data
  const initialRooms = [
    {
      id: 1,
      roomNumber: "101",
      floor: "1st",
      seats: 4,
      description: "Spacious room with attached bathroom",
      isAvailable: true,
      currentOccupants: 2,
      maxOccupants: 4,
    },
    {
      id: 2,
      roomNumber: "102",
      floor: "1st",
      seats: 3,
      description: "Cozy room near the study area",
      isAvailable: false,
      currentOccupants: 3,
      maxOccupants: 3,
    },
    {
      id: 3,
      roomNumber: "201",
      floor: "2nd",
      seats: 2,
      description: "Quiet room with good ventilation",
      isAvailable: true,
      currentOccupants: 0,
      maxOccupants: 2,
    },
  ];

  const initialRequests = [
    {
      id: 1,
      userId: 101,
      roomId: 1,
      justification: "Need a quieter environment for studies",
      status: "Pending",
    },
    {
      id: 2,
      userId: 102,
      roomId: 2,
      justification: "Prefers a single-occupancy room",
      status: "Pending",
    },
  ];

  const [rooms, setRooms] = useState(initialRooms);
  const [requests, setRequests] = useState(initialRequests);
  const [search, setSearch] = useState("");

  // Filtered rooms based on search input
  const filteredRooms = rooms.filter(
    (room) =>
      room.roomNumber.includes(search) ||
      room.floor.toLowerCase().includes(search.toLowerCase()) ||
      room.description.toLowerCase().includes(search.toLowerCase())
  );

  const handleDecision = (id, status) => {
    setRequests((prevRequests) =>
      prevRequests.map((req) =>
        req.id === id ? { ...req, status } : req
      )
    );
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Room Management
      </Typography>

      {/* Search Bar */}
      <TextField
        variant="outlined"
        fullWidth
        placeholder="Search by room number, floor, or description..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 4 }}
      />

      {/* Rooms List */}
      <Typography variant="h5" gutterBottom>
        Rooms
      </Typography>
      <Grid container spacing={2}>
        {filteredRooms.map((room) => (
          <Grid item xs={12} sm={6} md={4} key={room.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">Room {room.roomNumber}</Typography>
                <Typography>Floor: {room.floor}</Typography>
                <Typography>Seats: {room.seats}</Typography>
                <Typography>Description: {room.description}</Typography>
                <Typography>
                  Availability: {room.isAvailable ? "Available" : "Occupied"}
                </Typography>
                <Typography>
                  Occupants: {room.currentOccupants}/{room.maxOccupants}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Room Change Requests */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Room Change Requests
      </Typography>
      <Grid container spacing={2}>
        {requests.map((request) => (
          <Grid item xs={12} sm={6} key={request.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">Request #{request.id}</Typography>
                <Typography>Justification: {request.justification}</Typography>
                <Typography>Status: {request.status}</Typography>
                <Box sx={{ mt: 2 }}>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => handleDecision(request.id, "Approved")}
                    disabled={request.status !== "Pending"}
                    sx={{ mr: 1 }}
                  >
                    Approve
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDecision(request.id, "Denied")}
                    disabled={request.status !== "Pending"}
                  >
                    Deny
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RoomManagement;
