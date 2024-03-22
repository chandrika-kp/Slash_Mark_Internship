const initialState = {
  itemsList: [],
  userdata: []
};

const rootReducer = (state = initialState, action) => {
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

    default:
      return state;
  }
};

export default rootReducer;
