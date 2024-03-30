import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../../redux/Actions/action';
import { MdDeleteForever } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const Cart = () => {
  const userDetails = useSelector((state) => state.userdata);
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const increaseItemQuantity = (item) => {
    dispatch(increaseQuantity(item));
  }

  const decreaseItemQuantity = (item) => {
    dispatch(decreaseQuantity(item));
  }

  const handleItems = (item) => {
    dispatch(removeFromCart(item))
  }
  const subtotal = cartItems.map((item) => (item.price * item.quantity));
  // console.log(subtotal)
  const total = subtotal.reduce((acc, curr) => acc + curr, 0);

  const handleCheckout = () => {
  };

  return (
    <>
      <Header username={userDetails ? userDetails : ''} />
      <div className=' bg-orange-100 p-1'></div>

      {cartItems.length === 0 ? (
        <div className=" text-2xl p-3 m-3 text-center">
          <p>Your cart is empty.</p>
          <NavLink to="/menu" className="btn">Add more</NavLink>
        </div>
      ) : (
        <>
          {
            cartItems.map((cartItem) => (
              <div className="px-4 my-5bg-light rounded-3" key={cartItem.id}>
                <div className="container  border-2 border-orange-300  p-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="md:flex md:items-center">
                      <img src={cartItem.img} alt={cartItem.name} className="w-24 h-24" />
                      <div className="md:ml-4">
                        <h3 className="text-lg font-bold">{cartItem.title}</h3>
                        <p className="text-sm text-gray-500">{cartItem.desc.substring(0, 100)}</p>
                        <p className="text-lg font-bold text-gray-500">{cartItem.category}</p>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 flex items-center">
                      <p className="text-lg font-bold mr-4">₹ {cartItem.price}</p>
                      <div className="flex flex-col">
                        <p>Quantity :
                          <button className='btn mr-3' onClick={() => decreaseItemQuantity(cartItem)}>-</button>
                          {cartItem.quantity || 0}
                          <button className='btn ml-3' onClick={() => increaseItemQuantity(cartItem)}>+</button>
                        </p>
                      </div>
                    </div>
                    <div className='flex items-center'>
                      <p className="text-sm">Price:</p>
                      <p className="text-lg font-bold mr-4"> ₹ {cartItem.price * cartItem.quantity}</p>

                    </div>
                    <button className="btn-close text-2xl float-end text-orange-600" onClick={() => handleItems(cartItem)} ><MdDeleteForever /></button>

                  </div>
                </div>
              </div>
            ))
          }
          <div className="flex justify-end p-3 m-3 text-base font-medium text-gray-900">
            <p>Total: ₹{total}</p>
          </div>
          <div className="flex justify-around mx-auto p-4 ">
            <NavLink to="/menu" className="btn text-left">Add more</NavLink>
            <NavLink to="/checkout" className="btn text-right">Proceed to checkout</NavLink>

            {/* <button onClick={handleCheckout} className="btn text-right">Proceed to Checkout</button> */}
          </div>
        </>
      )}
    </>
  )
}

export default Cart;
