const initialState = {
  itemsList: [],
  userdata: [],
  addToCart: []
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
      return {
        ...state, addToCart: [...state.addToCart, action.payload]

      };
    case "REMOVE_FROM_CART":
      return state = state.addToCart.filter((x) => { return x.id !== action.payload.id })

    default:
      return state;
  }
};

export default reducer;

