import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cartSlice'
import authReducer from './slices/authSlice'
import themeReducer from './slices/themeSlice'


const loadState = async () => {
    try {
        const cart = localStorage.getItem('cartState');
        const theme = localStorage.getItem('themeState');

        return {
            cart: cart ? JSON.parse(cart) : undefined,
            theme: theme ? JSON.parse(theme) : undefined,
        };
    } catch (e) {
        return undefined;
    }
}


export const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
        theme: themeReducer,
    },
    preloadedState: await loadState(),
});


store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('cartState', JSON.stringify(state.cart));
  localStorage.setItem('themeState', JSON.stringify(state.theme));
});