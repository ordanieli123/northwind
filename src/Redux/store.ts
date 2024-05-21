import { configureStore, createSlice } from "@reduxjs/toolkit";
import { ProductModel } from "../Models/ProductModel"
import { addProduct, deleteProduct, initProducts, logoutUser, loginUser, registerUser, updateProduct } from "./reducers";
import { UserModel } from "../Models/UserModel";

export type AppState={
products:ProductModel[];
user:UserModel;
};


const productSlice=createSlice({
    name:"products",
    initialState:[],
    reducers:{initProducts, addProduct, updateProduct, deleteProduct}
});
const userSlice=createSlice({
    name:"user",
    initialState:null,
    reducers:{registerUser, loginUser, logoutUser}
});

export const productActions= productSlice.actions;
export const userActions= userSlice.actions;

export const store = configureStore<AppState>({
reducer:{
    products:productSlice.reducer,
    user:userSlice.reducer
}
});