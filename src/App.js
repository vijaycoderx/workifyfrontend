// import React from 'react';
// import SignInAuth from './components/SignInAuth';
// import SignUpAuth from './components/SignUpAuth';
import Auth from './pages/Auth';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';
import Admin from './pages/Admin';

function App() {
  // const navigator = useNavigate();
  return (
    <div className="App flex flex-col justify-center items-center h-screen">

      <BrowserRouter>
        <Routes>
          <Route path='/' element="home"></Route>
          <Route path='/auth' element={<Auth />}></Route>
          <Route path='/admin' element={<Admin />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
