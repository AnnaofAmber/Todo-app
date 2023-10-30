import { createSlice } from "@reduxjs/toolkit";
import { addTask, deleteTask, fetchTasks, themeChange, toggleCompleted } from './operations';


const handlePending = state => {
    state.isLoading = true;
  };
  
  const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  };
  
  const initialState = {
    tasks: {
      items: [],
      isLoading: false,
      error: null,
      theme: false
    }
  };

  const tasksSlice = createSlice({
    name: 'tasks',
    initialState: initialState.tasks,

    extraReducers:
    builder =>
    {
     builder
     .addCase(fetchTasks.pending, handlePending)
     .addCase(fetchTasks.fulfilled, (state, action)=> {
       state.isLoading = false;
       state.error = null;
       state.items = action.payload;
     })
     .addCase(fetchTasks.rejected, handleRejected)
 
 
     .addCase(addTask.pending, handlePending)
     .addCase(addTask.fulfilled, (state, action) => {
       state.isLoading = false;
       state.error = null;
       state.items.push(action.payload);
     })
     .addCase(addTask.rejected, handleRejected)
 
 
     .addCase(deleteTask.pending, handlePending)
     .addCase(deleteTask.fulfilled, (state, action) =>{
       state.isLoading = false;
       state.error = null;
       const index = state.items.findIndex(
         task => task.id === action.payload.id
       );
       state.items.splice(index, 1);
     })
     .addCase(deleteTask.rejected, handleRejected)


     .addCase(toggleCompleted.pending, handlePending)
     .addCase(toggleCompleted.fulfilled, (state, action) =>{
       state.isLoading = false;
       state.error = null;
       const index = state.items.findIndex(
         task => task.id === action.payload.id
       );
       state.items.splice(index, 1, action.payload);
     })
     .addCase(toggleCompleted.rejected, handleRejected)

     .addCase(themeChange.pending, handlePending)
     .addCase(themeChange.fulfilled, (state, action) =>{
       state.isLoading = false;
       state.error = null;
       const index = state.items.findIndex(
         task => task.id === action.payload.id
       );
       state.items.splice(index, 1, action.payload);
     })
     .addCase(themeChange.rejected, handleRejected)
   },

 });
   
 export const tasksReducer = tasksSlice.reducer;
  

  