import axios from 'axios';

export const fetchItems = () => {
  return (dispatch) => {
    axios
      .get('http://localhost:6005/foodItems')
      .then((response) => {
        dispatch({ type: 'FETCH_FOODITEMS', payload: response.data });
      })
      .catch((error) => {
        console.error('Error fetching food items:', error);
        dispatch({ type: 'FETCH_FOODITEMS_FAILURE', payload: error.message });
      });
  };
};