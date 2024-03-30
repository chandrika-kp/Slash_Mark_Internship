import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';

const Checkout = () => {
    const userDetails = useSelector((state) => state.userdata);
    const cartItems = useSelector((state) => state.cartItems);

    const subtotal = cartItems.map((item) => (item.price * item.quantity));
    const total = subtotal.reduce((acc, curr) => acc + curr, 0);

    return (<>
        <Header username={userDetails ? userDetails : ''} />

        <div className="flex flex-col justify-center sm:flex-row">

            <div className="border-2 border-orange-200 p-6 m-4">
                <form className="needs-validation" novalidate="">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Billing address</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">Use correct address where you can receive food.</p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    First name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Last name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                    Country
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                        <option>India</option>
                                        <option>United States</option>
                                        <option>Canada</option>
                                        <option>Mexico</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                    Street address
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="street-address"
                                        id="street-address"
                                        autoComplete="street-address"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2 sm:col-start-1">
                                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                    City
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="city"
                                        id="city"
                                        autoComplete="address-level2"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                                    State / Province
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="region"
                                        id="region"
                                        autoComplete="address-level1"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                                    ZIP / Postal code
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="postal-code"
                                        id="postal-code"
                                        autoComplete="postal-code"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-4" />

                    <div className="flex items-center">
                        <input type="checkbox" className="form-check-input" id="save-info" />
                        <label className="form-check-label" htmlFor="save-info">Save this information for next time</label>
                    </div>
                    <hr className="my-4" />
                    <h4 className="mb-3">Payment</h4>
                    <div className="my-3">
                        <div className="form-check">
                            <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked="" required="" />
                            <label className="form-check-label" htmlFor="credit">Credit card</label>
                        </div>
                        <div className="form-check">
                            <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required="" />
                            <label className="form-check-label" htmlFor="debit">Debit card</label>
                        </div>
                        <div className="form-check">
                            <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required="" />
                            <label className="form-check-label" htmlFor="paypal">PayPal</label>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       
                        <div className="sm:col-span-3">
                            <label htmlFor="cc-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Name on card
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="cc-number" className="block text-sm font-medium leading-6 text-gray-900">
                            Credit card number
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="cc-number" className="form-label">Credit card number</label>
                            <input type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" id="cc-number" placeholder="" required="" />
                            <div className=" text-gray-500">
                                Credit card number is required
                            </div>
                        </div>
                        <div>
                            <label htmlFor="cc-expiration" className="form-label">Expiration</label>
                            <input type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" id="cc-expiration" placeholder="" required="" />
                            <div className=" text-gray-500">
                                Expiration date required
                            </div>
                        </div>
                        <div>
                            <label htmlFor="cc-cvv" className="form-label">CVV</label>
                            <input type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" id="cc-cvv" placeholder="" required="" />
                            <div className=" text-gray-500">
                                Security code required
                            </div>
                        </div>
                    </div>
                    <hr className="my-4" />
                    <button className="w-full btn btn-dark btn-lg" type="submit" onClick={() => alert("Your order Placed...Enjoy Food")}>Continue to checkout</button>
                </form>
            </div>

            <div className="border-2 border-orange-200 p-4 pl-6 m-4 ml-0 text-sm">
                <h4 className="flex justify-between text-orange-600 text-xl mb-3">
                    <span>Your cart</span>
                    <span>{cartItems.length} items</span>
                </h4>
                <div className='border-2 border-orange-200'>

                    <ol type="1" className="flex flex-col text-sm text-black mb-3">
                        <li className="flex justify-between font-bold  p-4 pr-6">
                            <p>No.</p>
                            <p>NAME</p>
                            <p>QUANTITY</p>
                            <p>Total</p>
                        </li>
                        <hr className="my-4" />

                        {cartItems.map((item, index) => (
                            <>
                                <li className="flex justify-between p-4">
                                    <p className='pr-6'>{index + 1} )</p>
                                    <h3 >{item.name.substring(0, 15)}</h3>
                                    {/* <p className="text-lg font-bold text-gray-500">{item.category}</p> */}
                                    <p className='px-6'>{item.price} * {item.quantity}</p>
                                    <strong> ₹ {item.price * item.quantity}</strong>
                                </li>
                                {/* <li className="list-group-item flex justify-between bg-gray-200">
                                    
                                </li> */}

                            </>
                        ))}
                    </ol>
                </div>

                <div className="flex flex-col p-3">
                    <div className='flex flex-row justify-between'>
                        <p>Total:</p>
                        <p> ₹{total}</p>
                    </div>
                    <h6 className="flex flex-row justify-between">Promo code:
                        <small className=' text-green-600'>DISCOUNTCODE</small>
                        <span>−10%</span>
                    </h6>
                </div>
                <form className="p-2">
                    <div className="flex justify-between">
                        <input type="text" className="form-control" placeholder="Total (rupees)" />
                        <p className="btn">  {(total - (total * 0.10)).toFixed(2)}</p>
                    </div>
                </form>



            </div>
        </div>
    </>
    );
};

export default Checkout;
