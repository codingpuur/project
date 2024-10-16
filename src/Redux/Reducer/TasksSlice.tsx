import { createSlice } from '@reduxjs/toolkit'
import { newTaskData } from '@/Data/Apps/Tasks/TasksData';
import { TaskTemp } from '@/Types/Apps/TasksTypes';

interface TasksType {
    activeTab: string;
    allTasks: TaskTemp[]
}

const initialState:TasksType = {
    activeTab: "1",
    allTasks : newTaskData
  };
const TasksSlice = createSlice({
    name: "Tasks",
    initialState,
    reducers: {
        setActiveTab: (state, action) => {
            state.activeTab = action.payload;
        },
        setAllTasks:(state, action) => {
            state.allTasks = action.payload;
        }
    },
})

export const { setActiveTab ,setAllTasks} = TasksSlice.actions;

export default TasksSlice.reducer