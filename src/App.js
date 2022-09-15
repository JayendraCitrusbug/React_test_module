import { Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home'
import VerifyOtp from './components/VerifyOtp';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="register" element={<Register/>}></Route>
        <Route path="home" element={<Home/>}></Route>
        <Route path="verifyotp" element={<VerifyOtp/>}></Route>
      </Routes>
    </>
  );
}

export default App;
