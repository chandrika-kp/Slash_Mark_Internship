import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Pages/Header';
import Home from './components/Pages/Home';
import Login from './components/Pages/Login';
import Dashboard from './components/Pages/Dashboard';
import Error from './components/Pages/Error';
import Signin from './components/Register/Signin';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signin/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='*' element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;