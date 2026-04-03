import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Classes from './pages/Classes';
import Practice from './pages/Practice';
import LearningPlan from './pages/LearningPlan';
import Social from './pages/Social';
import Profile from './pages/Profile';
import ExercisePage from './pages/Exercise/ExercisePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Dashboard' element={<Dashboard/>} />
        <Route path='/Classes' element={<Classes/>} />
        <Route path='/Practice' element={<Practice/>} />
        <Route path='/LearningPlan' element={<LearningPlan/>} />
        <Route path='/Social' element={<Social/>} />
        <Route path='/Profile' element={<Profile/>} />

        <Route path='/exercise/:id' element={<ExercisePage/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App