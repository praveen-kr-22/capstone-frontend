import { createSlice, configureStore } from "@reduxjs/toolkit";

const userAuthInitial = {
  firstName: "",
  lastName: "",
  email: "",
  role: "",
  orgName: "",
  photo: "default.jpg",
  isLoggedIn: false,
  message: "Hi, Welcome To Home",
  featurePrivilege: {
    finding: [],
    ticket: [],
    dashboard: [],
    runbook: [],
  },
};

const userAuthSlice = createSlice({
  name: "auth",
  initialState: userAuthInitial,
  reducers: {
    login(state, action) {
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.role = action.payload.role;
      state.orgName = action.payload.orgName;
      state.photo = action.payload.photo;
      state.isLoggedIn = true;
      state.featurePrivilege = action.payload.featurePrivilege;
    },
    logout(state) {
      state = userAuthInitial;
    },
    setMessage(state, action) {
      if (action.payload !== "") {
        state.message = action.payload;
      } else {
        state.message = userAuthInitial.message;
      }
    },
  },
});

export const authAction = userAuthSlice.actions;
const userReducer = userAuthSlice.reducer;

export const userStore = configureStore({
  reducer: {
    userReducer,
  },
});
