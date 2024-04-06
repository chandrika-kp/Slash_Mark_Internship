import React from 'react'
import logo from "../../asset/food_logo.png";

const PaymentSuccess = () => {
    return (
        <>
            <div className="flex h-dvh bg-slate-200  min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-12 w-auto"
                        src={logo}
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Ordered Successfull
                    </h2>
                </div>
            <a href="/" className="mt-10 text-center text-s underline text-blue-900">GO TO HOME PAGE</a>
            </div>
        </>
    )
}

export default PaymentSuccess