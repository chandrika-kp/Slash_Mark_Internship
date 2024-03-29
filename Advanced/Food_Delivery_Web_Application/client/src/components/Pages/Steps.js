import React from 'react'

const stepsData = {
    step1: {
        title: 'Create an account',
        heading: 'Create/login to an existing account to get started',
        description: 'An account is created with your email and a desired password',
        img: "https://tailwind-landing-page.netlify.app/static/media/Rectangle_3.2ca0ade5.png",
        alternate: false,
    },
    step2: {
        title: 'Explore while shopping',
        heading: 'Shop for your favorites meal as e dey hot.',
        description: 'Shop for your favorite meals or drinks and enjoy while doing it.',
        img: "https://tailwind-landing-page.netlify.app/static/media/Rectangle_3.2ca0ade5.png",
        alternate: true,
    },
    step3: {
        title: 'Checkout',
        heading: "When you're done, check out and get it delivered.",
        description: "When you're done, check out and get it  delivered with ease.",
        img: "https://tailwind-landing-page.netlify.app/static/media/Rectangle_3.2ca0ade5.png",
        alternate: false,
    }
}

const Steps = () => {
    const row = "lg:items-center lg:flex lg:flex-row lg:justify-end";
    const rowReverse = "lg:items-center lg:flex lg:flex-row-reverse lg:justify-center";

    return (
        <div>
            {Object.entries(stepsData).map(([key, step], index) => {
               
                const isAlternate = step.alternate;
                const containerClasses = isAlternate ? row : rowReverse;

                return (
                    <div key={key} className={containerClasses}>
                        <div className="lg:w-2/6 lg:-ml-20 lg:-mt-10 lg:flex lg:flex-col lg:justify-center lg:items-start">
                            <p className="pb-5 text-2xl font-semibold text-center text-orange-400 lg:pb-0 lg:-mb-3 lg:text-lg lg:font-bold lg:text-left">{step.title}</p>
                            <p className="p-5 text-4xl font-semibold leading-relaxed text-center text-black-800 lg:pb-4 lg:text-3xl lg:pl-0 lg:font-bold lg:text-left">{step.heading}</p>
                            <p className="p-5 pb-0 pl-10 pr-10 text-2xl leading-10 text-center text-gray-400 lg:w-5/6 lg:pb-0 lg:text-lg lg:text-left lg:p-0 lg:pl-0 lg:pr-0">{step.description}</p>
                        </div>
                        <div className="ml-10 lg:ml-0 lg:w-3/6">
                            <img className=" lg:-mt-24 lg:-mb-20" src={step.img} alt="" />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
export default Steps