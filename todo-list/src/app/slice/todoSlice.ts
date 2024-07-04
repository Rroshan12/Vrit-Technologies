
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


export interface ITodoState {
  todolist: ITodo[];
}

export interface ITodo{
id: string;
name: string;
isDeleated: boolean;
    
}



const initialState: ITodoState = {
    todolist: []
};

export const todoListSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    setToDoState: (state, action: PayloadAction<ITodo>) => {
      state.todolist.push(action.payload);
    },
    removeToDoState: (state, action: PayloadAction<ITodo>) => {
      state.todolist = state.todolist.filter((item)=> item.id !== action.payload.id);
    }


  },

});

export const { setToDoState,removeToDoState } = todoListSlice.actions;
export const todoReducer = todoListSlice.reducer;