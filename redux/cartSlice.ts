import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types/Product';
import { RootState } from './store';

interface CartState {
  products: Product[];
}

const initialState: CartState = {
  products: [],
};

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // addProduct: (state, action) => {
    //   state.products.push(action.payload);
    // },
    addProduct: {
      reducer: (state, action: PayloadAction<Product>) => {
        state.products.push(action.payload);
      },
      prepare: (product) => {
        return {
          payload: {
            ...product,
            quantity: 1,
          },
        };
      },
    },
    removeProduct(state, action: PayloadAction<string>) {
      state.products = state.products.filter((product) => product.id !== action.payload);
    },
  },
});

export const { addProduct, removeProduct } = cart.actions;

export const selectCart = (state: RootState) => state.cart.products;
export const selectCartIds = (state: RootState) => state.cart.products.map((product) => product.id);
export const selectCartProductsCount = createSelector(
  [selectCart, (state) => state.cart.products],
  (products) => products.length
);

export default cart.reducer;
