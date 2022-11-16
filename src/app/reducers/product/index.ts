import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
    OneProductType,
  ProductsInitials
} from "./types";

const initialState: ProductsInitials = {
  allProducts: [],
  oneProduct: {
    price: null,
    id: null,
    name: "",
    src: "",
    liked: false
  }
};

const products = createSlice({
  name: "products",
  initialState,
  reducers: {
    setGetAllProducts: (
      state,
      action: PayloadAction<OneProductType[]>
    ) => {
      state.allProducts = action.payload.map((item)=>{return {...item, liked:false}});
    },
    setGetOneProduct: (
      state,
      action: PayloadAction<OneProductType>
    ) => {
      state.oneProduct = action.payload;
    },
    setLikeOneProduct: (
      state,
      action
    ) => {
      state.allProducts = state.allProducts.map((item)=>{
        if(item.id === action.payload){
          return {...item, liked: true}
        } else {
          return item;
        }
      });;
    },
  },
});

export const {
    setGetAllProducts,
    setGetOneProduct,
    setLikeOneProduct
} = products.actions;

export default products.reducer;
