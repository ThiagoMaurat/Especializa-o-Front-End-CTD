import { createSlice } from "@reduxjs/toolkit";

// Slice
const slice = createSlice({
  name: "cart",
  initialState: {
    isLoading: false,
    search: '',
    availableProducts: [],
    selectedProducts: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.selectedProducts.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.selectedProducts = state.selectedProducts.filter(
        (product) => product.id !== action.payload.id
      );
    },
    setAvailableProducts: (state, action) => {
      state.availableProducts = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    }
  }
});

// SELECTORS
export const isLoadingSelector = (state) => state.cart.isLoading;
export const availableProductsSelector = (state) => state.cart.availableProducts;
export const selectedProductsSelector = (state) => state.cart.selectedProducts;
export const searchSelector = (state) => state.cart.search;

// ACTIONS

// THUNK
export function fetchProducts() {
  return async function (dispatch) {
    dispatch(setIsLoading(true));

    const response = await fetch("https://fakestoreapi.com/products");

    const data = await response.json();

    dispatch(setAvailableProducts(data));
    dispatch(setIsLoading(false));
  }
}


export const fetchAvailableProducts = () => ({ type: "cart/fetchAvailableProducts" });
export const {
  addProduct,
  removeProduct,
  setAvailableProducts,
  setIsLoading,
  setSearch
} = slice.actions;

// REDUCER
export default slice.reducer;
