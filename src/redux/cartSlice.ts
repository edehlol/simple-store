import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartProduct } from '../types/CartProduct';
import { RootState } from './store';

interface CartState {
  products: CartProduct[];
}

const initialState: CartState = {
  products: [],
};

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: {
      reducer: (state, action: PayloadAction<CartProduct>) => {
        const existingProduct = state.products.find((product) => product.id === action.payload.id);
        if (existingProduct) {
          existingProduct.quantity += action.payload.quantity;
        } else {
          state.products.push(action.payload);
        }
      },
      prepare: ({ product, quantity }) => {
        return {
          payload: {
            ...product,
            quantity,
          },
        };
      },
    },
    removeProduct(state, action: PayloadAction<string>) {
      state.products = state.products.filter((product) => product.id !== action.payload);
    },
    addQuantity(state, action: PayloadAction<string>) {
      const id = action.payload;
      const existingProduct = state.products.find((product) => product.id === id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      }
    },
    subtractQuantity(state, action: PayloadAction<string>) {
      const id = action.payload;
      const existingProduct = state.products.find((product) => product.id === id);
      if (existingProduct) {
        existingProduct.quantity -= 1;
      }
    },
  },
});

export const { addProduct, removeProduct, addQuantity, subtractQuantity } = cart.actions;

export const selectCart = (state: RootState) => state.cart.products;

export const selectCartIds = (state: RootState) => state.cart.products.map((product) => product.id);

export const selectCartProductById = (state: RootState, id: string) =>
  state.cart.products.find((product) => product.id === id);

export const selectTotalPrice = (state: RootState) => {
  return state.cart.products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
};

export const selectQuantityById = (state: RootState, id: string) =>
  state.cart.products.find((product) => product.id === id)?.quantity ?? 1;

export const selectProductCount = (state: RootState) => {
  return state.cart.products.reduce((total, product) => total + product.quantity, 0);
};

export default cart.reducer;
