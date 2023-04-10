import {createSlice} from '@reduxjs/toolkit'
import { fetchUsers } from '../thunks/fetchUsers';
import { addUser } from '../thunks/addUser';

const usersSlice = createSlice({
    name:"users",
    initialState:{
        data: [],
        isLoading: false,
        error: null,
    },
    // extrabuilders allows to watch for some additional action types, 
    // it watches for actions that had been dispatched 
    // that are not inherently attached to the above slice 
    extraReducers(builder){
        // fetch users
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;

        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
        // add users
        builder.addCase(addUser.pending, (state, action) => {
            state.isLoading = true;

        });
        builder.addCase(addUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data.push(action.payload);
        });
        builder.addCase(addUser.rejected, (state, action) => {
            state.error = action.error
        });

    }
})

export const usersReducer = usersSlice.reducer;