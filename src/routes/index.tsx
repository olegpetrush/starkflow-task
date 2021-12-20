import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import App from '../App';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<App type={0} />} />
        <Route path="/repositories" element={<App type={0} />} />
        <Route path="/developers" element={<App type={1} />} />
      </Routes>
    </Router>
  )
}
export default AppRoutes