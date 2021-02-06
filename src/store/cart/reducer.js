const { createReducer } = require("@reduxjs/toolkit");
const { default: ActionType } = require("./action-type");
const { default: initState } = require("./init-state");

const cartReducer = createReducer(initState, {
    [ActionType.ADD_PRODUCT_TO_CART]: (state, action) =>({
        ...state,
        productsInCart: action.payload,
    }),
});

export default cartReducer;