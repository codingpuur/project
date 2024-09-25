import { configureStore } from "@reduxjs/toolkit";
import LayoutSlice from "./Reducer/LayoutSlice";
import ThemeCustomizerSlice from "./Reducer/ThemeCustomizerSlice";
import BookmarkSlice from "./Reducer/BookmarkSlice";
import ProjectSlice from "./Reducer/ProjectSlice";
import FileManagerSlice from "./Reducer/FileManagerSlice";
import FilterSlice from "./Reducer/FilterSlice";
import ProductSlice from "./Reducer/ProductSlice";
import CartSlice from "./Reducer/CartSlice";
import ToDoSlice from "./Reducer/ToDoSlice";
import TasksSlice from "./Reducer/TasksSlice";
import BookmarkTabSlice from "./Reducer/BookmarkTabSlice";
import ContactSlice from "./Reducer/ContactSlice";
import ChatSlice from "./Reducer/ChatSlice";


const Store = configureStore({
  reducer: {
    layout: LayoutSlice,
    themeCustomizer: ThemeCustomizerSlice,
    bookmark: BookmarkSlice,
    project:ProjectSlice,
    fileManager:FileManagerSlice,
    filterData: FilterSlice,
    product: ProductSlice,
    cartData: CartSlice,
    todo:ToDoSlice,
    tasks:TasksSlice,
    bookmarkTab:BookmarkTabSlice,
    contact:ContactSlice,
    chatData: ChatSlice,
  },
});

export default Store;

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
