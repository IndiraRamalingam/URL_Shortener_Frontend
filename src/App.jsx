import React from 'react'
import { BrowserRouter, Routes,Route, Navigate } from 'react-router-dom'
import SignUp from './components/user/SignUp';
import SignIn from './components/user/SignIn';
import ForgotPassword from './components/user/ForgotPassword';
import ResetPassword from './components/user/ResetPassword';
import ActivationPage from './components/user/ActivationPage';
import Dashboard from './components/url/Dashboard';
import GenerateUrls from './components/url/GenerateUrls';
import ViewUrls from './components/url/ViewUrls';

function App() {
  return (
    <BrowserRouter>
    <div> 
          <Routes>   
            <Route path='/signup' element={<SignUp />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/forgot_password' element={<ForgotPassword />} />
            <Route path='/reset_password/:token' element={<ResetPassword />} />
            <Route path='/activation_page/:token' element={<ActivationPage/>}/>
            <Route path='/dashboard/:id' element={<Dashboard/>}/>
            <Route path='/generate_url/:id' element={<GenerateUrls/>}/>
            <Route path='/view_url/:id' element={<ViewUrls/>}/>
            <Route path="/" element={<Navigate to="/signin" replace />} />
          </Routes>
      
    </div>
      </BrowserRouter>
  )
}

export default App