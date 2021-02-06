const { createAction } = require("@reduxjs/toolkit");
const { default: ActionType } = require("./action-type");

const AddProductToCartAction = createAction(ActionType.ADD_PRODUCT_TO_CART);

export { AddProductToCartAction };