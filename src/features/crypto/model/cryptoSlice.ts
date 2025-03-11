import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const initialState = {
    todos: [],
    tasks: [],
}

const cryptoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setTasks: (state, action:PayloadAction<[]>) => {
            state.tasks = action.payload
        },
        },
    extraReducers: (builder) => {
        
    },
});
export const {setTasks} = cryptoSlice.actions;
export default cryptoSlice.reducer;