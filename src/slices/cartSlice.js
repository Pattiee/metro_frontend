import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [], // [{id, name, price, quantity}]
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            const item = action.payload;
            const existingItem = state.items?.find(i => i?.productId === item.productId);

            const quantityToAddToCart = item?.quantity || 1;

            if (existingItem && existingItem !== undefined && existingItem !== null) {
                existingItem.quantity += quantityToAddToCart;
            } else {
                state.items.push({ ...item, quantity: quantityToAddToCart });
            }
        },
        removeItem(state, action) {
            state.items = state.items.filter(item => item?.productId !== action.payload);
        },
        clearCart(state) {
            if (state.items?.length !== 0) state.items = [];
        }
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;