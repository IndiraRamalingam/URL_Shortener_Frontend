import React from 'react'
import { BrowserRouter, Routes,Route, Navigate } from 'react-router-dom'
import Welcome from './components/user/Welcome';
import SignUp from './components/user/SignUp';
import SignIn from './components/user/SignIn';
import ForgotPassword from './components/user/ForgotPassword';
import ResetPassword from './components/user/ResetPassword';
import ActivationPage from './components/user/ActivationPage';
import Dashboard from './components/url/Dashboard';

function App() {
  return (
    <BrowserRouter>
    <div> 
          <Routes>   
            <Route path='/welcome' element={<Welcome />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/forgot_password' element={<ForgotPassword />} />
            <Route path='/reset_password/:token' element={<ResetPassword />} />
            <Route path='/activation_page/:token' element={<ActivationPage/>}/>
            <Route path='/dashboard/:id' element={<Dashboard/>}/>
            <Route path="/" element={<Navigate to="/signin" replace />} />
          </Routes>
      
    </div>
      </BrowserRouter>
  )
}

export default App