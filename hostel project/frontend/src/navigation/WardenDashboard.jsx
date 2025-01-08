import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Divider,
  Menu,
  Box,
  MenuItem,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Avatar,
  Grid,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Person as PersonIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Dashboard from "../components/warden/Warden-dashboard";
import RoomManagement from "../components/warden/RoomManagement";
import ComplaintManagement from "../components/warden/ComplaintManagement";
import StdHealthRecords from "../components/warden/StdHealthRecords";

const WardenDashboard = ({ user }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);
  const [profileDialogOpen, setProfileDialogOpen] = useState(false);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const navigate = useNavigate();
  const { logout } = useAuth();

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleTabClick = (tab) => () => {
    setActiveTab(tab);
    if (!isDesktop) setDrawerOpen(false); // Close drawer on mobile
  };

  const handleProfileClick = () => {
    setProfileDialogOpen(true);
  };

  const handleProfileClose = () => {
    setProfileDialogOpen(false);
  };

  const handleLogoutClick = () => {
    setLogoutDialogOpen(true);
  };

  const handleLogoutConfirm = () => {
    logout();
    navigate("/");
  };

  const handleLogoutCancel = () => {
    setLogoutDialogOpen(false);
  };

  // Render active tab content
  const renderActiveTab = () => {
    switch (activeTab) {
      case "Dashboard":
        return <Dashboard />;
      case "RoomManagement":
        return <RoomManagement />;
      case "ComplaintManagement":
        return <ComplaintManagement />;
      case "StdHealthRecords":
        return <StdHealthRecords />;
      default:
        return <Dashboard />;
    }
  };

  const emailPrefix = user?.email ? user.email.split("@")[0] : "";

  return (
    <>
      {/* AppBar */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: theme.zIndex.drawer + 1,
          backgroundColor: "#3949ab", // Deep Blue
          color: "white",
        }}
      >
        <Toolbar>
          {!isDesktop && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer(true)}
              sx={{ marginRight: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {emailPrefix}
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="profile"
            onClick={handleProfileClick}
          >
            <PersonIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Navigation */}
      <Drawer
        variant={isDesktop ? "permanent" : "temporary"}
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          width: 240,
          flexShrink: 0,
          zIndex: theme.zIndex.drawer,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
            backgroundColor: "#e3f2fd", // Light Blue Background
          },
        }}
      >
        <List sx={{ pt: isDesktop ? 8 : 2 }}>
          {["Dashboard", "RoomManagement", "ComplaintManagement", "StdHealthRecords"].map((tab) => (
            <ListItem
              button
              key={tab}
              selected={activeTab === tab}
              onClick={handleTabClick(tab)}
              sx={{
                bgcolor:
                  activeTab === tab ? theme.palette.action.selected : "transparent",
              }}
            >
              <ListItemText primary={tab.replace(/([A-Z])/g, " $1")} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List sx={{ mt: "auto" }}>
          <ListItem button onClick={handleLogoutClick}>
            <LogoutIcon sx={{ mr: 1 }} />
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>

      {/* Content */}
      <Box sx={{ padding: 3, marginTop: isDesktop ? 8 : 7, marginLeft: isDesktop ? 25 : 0 }}>
        {renderActiveTab()}
      </Box>

      {/* Profile Dialog */}
      <Dialog open={profileDialogOpen} onClose={handleProfileClose}>
        <DialogTitle>Profile</DialogTitle>
        <DialogContent>
          <Box sx={{ textAlign: "center", mb: 2 }}>
            <Avatar
              sx={{ width: 140, height: 120, margin: "auto", borderColor:"black"}}
              src="https://thumbs.dreamstime.com/b/park-ranger-warden-arms-crossed-front-view-mascot-retro-retro-mascot-style-illustration-male-ranger-park-ranger-park-317803963.jpg" 
              alt="Warden"
            />
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body1">
                <strong>Warden Name:</strong> VIKRAM
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                <strong>Employee Number:</strong> WARDEN065
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                <strong>Gender:</strong> Male
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                <strong>Email:</strong> agentvikram@gmail.com
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                <strong>Phone Number:</strong>9876543210
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                <strong>Address:</strong> 420 Agent Street, salem, TAmilnadu
              </Typography>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleProfileClose} color="primary">
            Close
          </Button>
          <Button onClick={handleLogoutClick} color="secondary">
            Logout
          </Button>
        </DialogActions>
      </Dialog>

      {/* Logout Confirmation Dialog */}
      <Dialog open={logoutDialogOpen} onClose={handleLogoutCancel}>
        <DialogTitle>Confirm Logout</DialogTitle>
        <DialogActions>
          <Button onClick={handleLogoutCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleLogoutConfirm} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default WardenDashboard;
