const initialState = {
  itemsList: [],
  userdata: [],
  cartItems: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_FOODITEMS':
      return {
        ...state,
        itemsList: action.payload,
      };

    case "USER_DATA":
      return {
        ...state, userdata: action.payload
      };

    case "ADD_TO_CART":
      console.log(action.payload);
      const addQuantity = { ...action.payload, quantity: 1 };
      return {
        ...state, cartItems: [...state.cartItems, addQuantity]

      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload.id)
      }
    case "INCREASE_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      };
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

