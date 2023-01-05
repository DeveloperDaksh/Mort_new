import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { UserCircle as UserCircleIcon } from "../../../icons/user-circle";
import router from "next/router";
import firebase from "../../../lib/firebase";
import { useState } from "react";

export const AccountGeneralSettings = (props) => {
  // To get the user from the authContext, you can use
  // `const { user } = useAuth();`
  const user = {
    // avatar: "/static/mock-images/avatars/avatar-anika_visser.png",
    // name: "Anika Visser",
    name: localStorage.getItem("name"),
    email: localStorage.getItem("userEmail"),
  };

  const [name, setName] = useState("");
  const updateName = () => {
    const currUser = firebase.auth().currentUser;
    console.log(name);
    currUser
      ?.updateProfile({
        displayName: name,
      })
      .then(() => {
        sessionStorage.setItem("name", name), router.push("/dashboard/account");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box sx={{ mt: 4 }} {...props}>
      <Card>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={4} xs={12}>
              <Typography variant="h6">Basic details</Typography>
            </Grid>
            <Grid item md={8} xs={12}>
              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <Avatar
                  src={user?.avatar}
                  sx={{
                    height: 64,
                    mr: 2,
                    width: 64,
                  }}
                >
                  <UserCircleIcon fontSize="small" />
                </Avatar>
                <Button component="label">
                  Change
                  <input hidden accept="image/*" multiple type="file" />
                </Button>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  mt: 3,
                  alignItems: "center",
                }}
              >
                <TextField
                  defaultValue={user?.name}
                  label="Full Name"
                  size="small"
                  sx={{
                    flexGrow: 1,
                    mr: 3,
                  }}
                  onChange={(e) => setName(e.target.value)}
                />
                <Button onClick={updateName}>Save</Button>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  mt: 3,
                  alignItems: "center",
                }}
              >
                <TextField
                  defaultValue={user?.email}
                  disabled
                  label="Email Address"
                  required
                  size="small"
                  sx={{
                    flexGrow: 1,
                    mr: 3,
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderStyle: "dashed",
                    },
                  }}
                />
                <Button>Edit</Button>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card sx={{ mt: 4 }}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={4} xs={12}>
              <Typography variant="h6">Public profile</Typography>
            </Grid>
            <Grid item md={8} sm={12} xs={12}>
              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 3,
                }}
              >
                <div>
                  <Typography variant="subtitle1">
                    Make Contact Info Public
                  </Typography>
                  <Typography
                    color="textSecondary"
                    sx={{ mt: 1 }}
                    variant="body2"
                  >
                    Means that anyone viewing your profile will be able to see
                    your contacts details.
                  </Typography>
                </div>
                <Switch />
              </Box>
              <Divider />
              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "space-between",
                  mt: 3,
                }}
              >
                <div>
                  <Typography variant="subtitle1">Available to hire</Typography>
                  <Typography
                    color="textSecondary"
                    sx={{ mt: 1 }}
                    variant="body2"
                  >
                    Toggling this will let your teammates know that you are
                    available for acquiring new projects.
                  </Typography>
                </div>
                <Switch defaultChecked />
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card sx={{ mt: 4 }}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={4} xs={12}>
              <Typography variant="h6">Delete Account</Typography>
            </Grid>
            <Grid item md={8} xs={12}>
              <Typography sx={{ mb: 3 }} variant="subtitle1">
                Delete your account and all of your source data. This is
                irreversible.
              </Typography>
              <Button color="error" variant="outlined">
                Delete account
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};
