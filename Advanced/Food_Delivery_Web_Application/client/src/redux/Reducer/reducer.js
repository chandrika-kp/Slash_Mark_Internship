const initialState = {
    itemsList: [],
    // searchFilter: '',
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_FOODITEMS':
        return {
          ...state,
          itemsList: action.payload,
        };
    //   case 'SET_SEARCH_FILTER':
    //     return {
    //       ...state,
    //       searchFilter: action.payload,
    //     };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  