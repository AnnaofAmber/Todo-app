import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL ='https://653a93302e42fd0d54d42228.mockapi.io'

export const fetchTasks = createAsyncThunk(
    'contacts/fetchAll', async(_, thunkAPI) =>{
        try{
            const response = await axios.get("/tasks")
            return response.data
        }
        catch(error){
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const addTasks = createAsyncThunk(
    'contacts/addTask', async({name}, thunkAPI) =>{
        try{
            const response = await axios.post("/tasks", {name})
            return response.data
        }
        catch(error){
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const deleteTasks = createAsyncThunk(
    'contacts/deleteTask', async(taskId, thunkAPI) =>{
        try{
            const response = await axios.delete("/tasks", {taskId})
            return response.data
        }
        catch(error){
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)
