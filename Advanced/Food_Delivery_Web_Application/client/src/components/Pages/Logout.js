import axios from "axios";
import logo from "../../asset/food_logo.png";
import { NavLink, useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    const HandleLogOut = () => {
        axios.get('http://localhost:6005/auth/logout')
        .then(response =>{
            console.log(response);
            if(response.data.status){
                alert('logged out sucessfully')
                navigate('/');
            }
        })
        .catch(error => {
            console.error('Logout failed:', error);
            // Handle logout error (e.g., show error message to user)
        });
    }

    return (
        <>
            <div className="flex bg-slate-200 min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-12 w-auto"
                        src={logo}
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Logout from your account
                    </h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <button
                        type="button"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={HandleLogOut}
                    >
                        Logout
                    </button>
                    <p className='py-4'>Do you want to login? <NavLink to="/login" className="font-semibold underline px-4 text-indigo-600 hover:text-indigo-500">Login</NavLink></p>
                </div>
            </div>
        </>
    );
}

export default Logout;
