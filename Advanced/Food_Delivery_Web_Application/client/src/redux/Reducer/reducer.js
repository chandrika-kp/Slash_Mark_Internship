const initialState = {
  itemsList: [],
  userdata: [],
  cartItems: [],
  AllUsers: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // All FoodItems list
    case 'FETCH_FOODITEMS':
      return {
        ...state,
        itemsList: action.payload,
      };
    // Login user data
    case "USER_DATA":
      return {
        ...state, userdata: action.payload
      };
    // All Users till logged In
    case 'FETCH_ALLUSERS':
      return {
        ...state, AllUsers: action.payload
      }
    // List of added items to Cart 
    case "ADD_TO_CART":
      console.log(action.payload);
      const addQuantity = { ...action.payload, quantity: 1 };
      return {
        ...state, cartItems: [...state.cartItems, addQuantity]

      };
    // Remove from cartList
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload.id)
      }
    // Increase quantity of selected cart item
    case "INCREASE_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      };
    // Decrease quantity of selected cart item
    case "DECREASE_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        )
      };
    default:
      return state;
  }
};

export default reducer;

