
// import React, { useState } from "react";
// import {
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   IconButton,
//   AppBar,
//   Toolbar,
//   Typography,
//   useMediaQuery,
//   useTheme,
//   Divider,
//   Menu,
//   Box,
//   MenuItem,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
//   Button,
// } from "@mui/material";
// import {
//   Menu as MenuIcon,
//   Person as PersonIcon,
//   Logout as LogoutIcon,
// } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import Dashboard from "../components/student/dashboard";
// import ComplaintBox from "../components/student/ComplaintBox";
// import RoomDetails from "../components/student/RoomDetails";
// import FoodDetails from "../components/student/FoodDetails";
// import FeesDetails from "../components/student/FeesDetails";
// import HealthRecord from "../components/student/HealthRecord";
// import TransportManagement from "../components/student/TransportManagement";

// const StudentDashboard = ({ user }) => {
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState("Dashboard");
//   const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);
//   const theme = useTheme();
//   const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
//   const navigate = useNavigate();
//   const { logout } = useAuth();

//   const [profileAnchorEl, setProfileAnchorEl] = useState(null);
//   const isProfileMenuOpen = Boolean(profileAnchorEl);

//   const toggleDrawer = (open) => () => {
//     setDrawerOpen(open);
//   };

//   const handleTabClick = (tab) => () => {
//     setActiveTab(tab);
//     if (!isDesktop) setDrawerOpen(false); // Close drawer on mobile
//   };

//   const handleProfileMenuOpen = (event) => {
//     setProfileAnchorEl(event.currentTarget);
//   };

//   const handleProfileMenuClose = () => {
//     setProfileAnchorEl(null);
//   };

//   const handleLogoutClick = () => {
//     setLogoutDialogOpen(true);
//   };

//   const handleLogoutConfirm = () => {
//     logout();
//     navigate("/");
//   };

//   const handleLogoutCancel = () => {
//     setLogoutDialogOpen(false);
//   };

//   // Render active tab content
//   const renderActiveTab = () => {
//     switch (activeTab) {
//       case "Dashboard":
//         return <Dashboard />;
//       case "ComplaintBox":
//         return <ComplaintBox />;
//       case "RoomDetails":
//         return <RoomDetails />;
//       case "FoodDetails":
//         return <FoodDetails />;
//       case "FeesDetails":
//         return <FeesDetails />;
//       case "HealthRecord":
//         return <HealthRecord />;
//       case "TransportManagement":
//         return <TransportManagement />;
//       default:
//         return <Dashboard />;
//     }
//   };

//   const emailPrefix = user?.email ? user.email.split("@")[0] : "";

//   return (
//     <>
//       {/* AppBar */}
//       <AppBar
//         position="fixed"
//         sx={{
//           zIndex: theme.zIndex.drawer + 1,
//           backgroundColor: "#3949ab", // Deep Blue
//           color: "white",
//         }}
//       >
//         <Toolbar>
//           {!isDesktop && (
//             <IconButton
//               edge="start"
//               color="inherit"
//               aria-label="open drawer"
//               onClick={toggleDrawer(true)}
//               sx={{ marginRight: 2 }}
//             >
//               <MenuIcon />
//             </IconButton>
//           )}
//           <Typography variant="h6" sx={{ flexGrow: 1 }}>
//             {emailPrefix}
//           </Typography>
//           <IconButton
//             edge="end"
//             color="inherit"
//             aria-label="profile"
//             onClick={handleProfileMenuOpen}
//           >
//             <PersonIcon />
//           </IconButton>
//           <Menu
//             anchorEl={profileAnchorEl}
//             open={isProfileMenuOpen}
//             onClose={handleProfileMenuClose}
//             sx={{ mt: "45px" }}
//           >
//             <MenuItem onClick={handleProfileMenuClose}>Profile</MenuItem>
//             <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
//           </Menu>
//         </Toolbar>
//       </AppBar>

//       {/* Drawer for Navigation */}
//       <Drawer
//         variant={isDesktop ? "permanent" : "temporary"}
//         anchor="left"
//         open={drawerOpen}
//         onClose={toggleDrawer(false)}
//         sx={{
//           width: 240,
//           flexShrink: 0,
//           zIndex: theme.zIndex.drawer,
//           "& .MuiDrawer-paper": {
//             width: 240,
//             boxSizing: "border-box",
//             backgroundColor: "#e3f2fd", // Light Blue Background
//           },
//         }}
//       >
//         <List sx={{ pt: isDesktop ? 8 : 2 }}>
//           {[
//             "Dashboard",
//             "ComplaintBox",
//             "RoomDetails",
//             "FoodDetails",
//             "FeesDetails",
//             "HealthRecord",
//             "TransportManagement",
//           ].map((tab) => (
//             <ListItem
//               button
//               key={tab}
//               selected={activeTab === tab}
//               onClick={handleTabClick(tab)}
//               sx={{
//                 bgcolor:
//                   activeTab === tab ? theme.palette.action.selected : "transparent",
//               }}
//             >
//               <ListItemText primary={tab.replace(/([A-Z])/g, " $1")} />
//             </ListItem>
//           ))}
//         </List>
//         <Divider />
//         <List sx={{ mt: "auto" }}>
//           <ListItem button onClick={handleLogoutClick}>
//             <LogoutIcon sx={{ mr: 1 }} />
//             <ListItemText primary="Logout" />
//           </ListItem>
//         </List>
//       </Drawer>

//       {/* Content */}
//       <Box sx={{ padding: 3, marginTop: isDesktop ? 8 : 7, marginLeft: isDesktop ? 25 : 0 }}>
//         {renderActiveTab()}
//       </Box>

//       {/* Logout Confirmation Dialog */}
//       <Dialog open={logoutDialogOpen} onClose={handleLogoutCancel}>
//         <DialogTitle>Confirm Logout</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             Are you sure you want to log out?
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleLogoutCancel} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={handleLogoutConfirm} color="primary">
//             Confirm
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// };

// export default StudentDashboard;




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
import Dashboard from "../components/student/dashboard";
import ComplaintBox from "../components/student/ComplaintBox";
import RoomDetails from "../components/student/RoomDetails";
import FoodDetails from "../components/student/FoodDetails";
import FeesDetails from "../components/student/FeesDetails";
import HealthRecord from "../components/student/HealthRecord";
import TransportManagement from "../components/student/TransportManagement";

const StudentDashboard = ({ user }) => {
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

  const handleProfileMenuClose = () => {
    setProfileDialogOpen(false);
  };

  const handleProfileClick = () => {
    setProfileDialogOpen(true);
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
      case "ComplaintBox":
        return <ComplaintBox />;
      case "RoomDetails":
        return <RoomDetails />;
      case "FoodDetails":
        return <FoodDetails />;
      case "FeesDetails":
        return <FeesDetails />;
      case "HealthRecord":
        return <HealthRecord />;
      case "TransportManagement":
        return <TransportManagement />;
      default:
        return <Dashboard />;
    }
  };

  const emailPrefix = user?.email ? user.email.split("@")[0] : "";

  // Mock student profile data
  const studentProfile = {
    photo: "https://imgcdn.stablediffusionweb.com/2024/3/16/38c3fa8a-c7c1-46ef-86a9-cbf4680fc9c3.jpg", // Replace with actual photo URL
    wardenName: "Mr.Kakashi Hatake",
    sinNumber: "E21CS028",
    gender: "Male",
    email: user?.email || "Kakashi@gmail.com",
    phoneNumber: "9834567890",
    address: "123, kakashi Lane, Taiwan Town, china",
  };

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
          {[
            "Dashboard",
            "ComplaintBox",
            "RoomDetails",
            "FoodDetails",
            "FeesDetails",
            "HealthRecord",
            "TransportManagement",
          ].map((tab) => (
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
      <Dialog open={profileDialogOpen} onClose={handleProfileMenuClose}>
        <DialogTitle>Profile</DialogTitle>
        <DialogContent>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 2 }}>
            <Avatar
              src={studentProfile.photo}
              alt="Student Photo"
              sx={{ width: 100, height: 100, mb: 2 }}
            />
            <Typography variant="h6">{studentProfile.wardenName}</Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="body1">
                <strong>SIN Number:</strong> {studentProfile.sinNumber}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">
                <strong>Gender:</strong> {studentProfile.gender}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                <strong>Email:</strong> {studentProfile.email}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                <strong>Phone:</strong> {studentProfile.phoneNumber}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                <strong>Address:</strong> {studentProfile.address}
              </Typography>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleProfileMenuClose} color="primary">
            Close
          </Button>
          <Button onClick={handleLogoutClick} color="primary">
            Logout
          </Button>
        </DialogActions>
      </Dialog>

      {/* Logout Confirmation Dialog */}
      <Dialog open={logoutDialogOpen} onClose={handleLogoutCancel}>
        <DialogTitle>Confirm Logout</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to log out?</Typography>
        </DialogContent>
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

export default StudentDashboard;
