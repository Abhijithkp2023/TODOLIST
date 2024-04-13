import {createSlice} from "@reduxjs/toolkit"

const todoSlice = createSlice({
    name: "todo",
    initialState: [],
    reducers: {
        addTodo:(state,action) => {
            state.push(action.payload);
        }
    }
})