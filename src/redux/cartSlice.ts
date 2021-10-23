import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartProduct } from '../types/CartProduct';
import { roundPrice } from '../utils/roundPrice';
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

const selectCart = (state: RootState) => state.cart.products;

const selectCartIds = (state: RootState) => state.cart.products.map((product) => product.id);

const selectCartProductById = (state: RootState, id: string) =>
  state.cart.products.find((product) => product.id === id);

const selectSubtotalPrice = (state: RootState, id: string) => {
  const product = selectCartProductById(state, id);
  if (product) {
    return roundPrice(product.price * product.quantity);
  }
};
const selectTotalPrice = (state: RootState) => {
  return roundPrice(
    state.cart.products.reduce((total, product) => total + product.price * product.quantity, 0)
  );
};

const selectQuantityById = (state: RootState, id: string) =>
  state.cart.products.find((product) => product.id === id)?.quantity ?? 1;

const selectProductCount = (state: RootState) => {
  return state.cart.products.reduce((total, product) => total + product.quantity, 0);
};

export {
  selectCart,
  selectCartIds,
  selectCartProductById,
  selectSubtotalPrice,
  selectTotalPrice,
  selectQuantityById,
  selectProductCount,
};

export default cart.reducer;
