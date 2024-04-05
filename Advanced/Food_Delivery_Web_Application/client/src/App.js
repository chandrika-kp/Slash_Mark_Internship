import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Pages/Header';
import Home from './components/Pages/Home';
import Login from './components/Pages/Login';
import Dashboard from './components/Pages/Dashboard';
import Error from './components/Pages/Error';
import Signin from './components/Register/Signin';
import Logout from './components/Pages/Logout';
import Menu from './components/Pages/Menu';
import MenuItems from './components/Pages/MenuItems';
import Cart from './components/Pages/Cart.js';
import Checkout from './components/Pages/Checkout.js';
import Footer from './components/Pages/Footer.js';
import AdminPage from './components/Admin/AdminPage.js';
import Users from './components/Admin/Users.js';
import FoodItems from './components/Admin/FoodItems.js';
import AdminDetails from './components/Admin/AdminDetails.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/header' element={<Header />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/logout' element={<Logout/>} />
          <Route path='/signup' element={<Signin/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/menu' element={<Menu/>} />
          <Route path='/menu/:id' element={<MenuItems/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/footer' element={<Footer/>} />
          <Route path='*' element={<Error/>} />
          <Route path='/admin' element={<AdminPage/>} />
          <Route path='//admindetails' element={<AdminDetails/>} />
          <Route path='/users' element={<Users/>} />
          <Route path='/fooditems' element={<FoodItems/>} />

        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;