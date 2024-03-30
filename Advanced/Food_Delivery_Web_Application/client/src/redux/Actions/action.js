import axios from 'axios';

export const fetchItems = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:6005/foodItems');
      dispatch({ type: 'FETCH_FOODITEMS', payload: response.data });
    } catch (error) {
      console.error('Error fetching food items:', error);
      dispatch({ type: 'FETCH_FOODITEMS_FAILURE', payload: error.message });
    }
  };
};

export const userDetails = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:6005/auth/verify');
      // console.log(response.data.user.username);
      dispatch({ type: 'USER_DATA', payload: response.data.user.username });
    } catch (error) {
      console.error('Error fetching user details:', error);
      // dispatch({ type: 'USER_DETAILS_FAILURE', payload: error.message });
    }
  };
};
export const addToCart = (item) => {
  return (dispatch) => {
    try {
      dispatch({ type: 'ADD_TO_CART', payload: item });
      console.log(item)
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };
};

export const removeFromCart = (item) =>{
  return{
      type:"REMOVE_FROM_CART",
      payload: item,
  };
};

export const increaseQuantity = (item) => {
  return {
      type: "INCREASE_QUANTITY",
      payload: item
  };
};

export const decreaseQuantity = (item) => {
  return {
      type: "DECREASE_QUANTITY",
      payload: item
  };
};

