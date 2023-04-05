import {createSlice} from '@reduxjs/toolkit'

const UsersSlice = createSlice({
    name:"userslice",
    initialState:{
        data: []
    },
    reducers:{

    }
})

export const usersReducer = UsersSlice.reducer;