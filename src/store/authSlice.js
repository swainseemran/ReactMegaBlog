import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
     }
})


//here actions means login and logout is an action
export const {login, logout} = authSlice.actions;

export default authSlice.reducer;


//it is used for track the authentication process
//user is authentication is check each and every time to store
//dont need to spread all the existing value which is present in side state bcz it already implemented in redux toolkit