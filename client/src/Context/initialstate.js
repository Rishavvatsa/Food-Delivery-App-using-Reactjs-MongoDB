import { fetchuser,fetchCart } from "../utils/fetchLocalStorageData";

const userInfo = fetchuser();
const cartInfo=fetchCart();
export const initialstate = {
  user: userInfo,
  foodItems: null,
  cartShow: false,
  cartItems: cartInfo,
};
