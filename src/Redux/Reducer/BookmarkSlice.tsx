import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bookMarkClass: false,
    bookmarkDropDown:false,
    IsOpen:false,
    linkItemsArray:[]
  };
  
  const bookmarkSlice = createSlice({
    name: "BookmarkSlice",
    initialState,
    reducers: {
      setBookMarkClass: (state) => {
        state.bookMarkClass = !state.bookMarkClass;
      },
      setBookmarkDropDown: (state) => {
        state.bookmarkDropDown = !state.bookmarkDropDown;
      },
      setIsClose: (state, action) => {
        state.IsOpen = action.payload;
      },
      getLinkItemsArray: (state, action) => {
        state.linkItemsArray = action.payload;
      },
    },
  });
  
  export const { setBookMarkClass ,setBookmarkDropDown,setIsClose,getLinkItemsArray} = bookmarkSlice.actions;
  
  export default bookmarkSlice.reducer;