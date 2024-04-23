import React, { useState, useEffect } from 'react';
import logo from "../../asset/food_logo.png";

const PaymentSuccess = () => {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowLoader(false);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {showLoader ? (
                <div className="flex w-screen h-screen bg-slate-200 justify-center">
                    <img src="https://assets.materialup.com/uploads/1b49dbf6-f73b-4cbb-afb9-b4174ad6b7bd/preview.gif" alt=""/>
                </div>
            ) : (
                <div className="flex h-dvh bg-slate-200 min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" style={{ backgroundImage: 'url("https://data1.ibtimes.co.in/en/full/723904/malaysian-food.jpg")' }}>
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm" >
                        <img
                            className="mx-auto h-16 w-auto"
                            src={logo}
                            alt="Your Company"
                        />
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                            Ordered Successfully
                        </h2>
                    </div>
                    <a href="/" className="mt-10 text-center text-s underline text-white">GO TO HOME PAGE</a>
                </div>
            )}
        </>
    );
};

export default PaymentSuccess;
