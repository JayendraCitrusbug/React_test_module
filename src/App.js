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
        <Route path="/" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="verifyotp" element={<VerifyOtp />}></Route>
      </Routes>
      {/* <script src="assets/js/jquery-3.6.0.min.js"></script> */}
      {/* <script src="assets/js/bootstrap.bundle.min.js"></script> */}
      {/* <script src="assets/js/mini-event-calendar.min.js"></script> */}
      {/* <script src="./templates/assets/js/custom.js"></script> */}
    </>
  );
}

export default App;
