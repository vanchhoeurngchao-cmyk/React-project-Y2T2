import React from 'react';
import { NavLink } from 'react-router-dom';

const MainLayout = ({ children }) => {
  return (
    <div className="container grid grid-cols-[230px_1fr] gap-5 p-5 h-screen max-[992px]:grid-cols-[200px_1fr] max-[600px]:grid-cols-1">
      <aside className="sidebar">
        <div className="logo">
          <img src="/src/assets/MainPage/logo.png" alt="Logo" />
          <h2>L-Learning</h2>
        </div>
        <nav className="flex flex-col">
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/classes">Classes</NavLink>
          <NavLink to="/practice">Practice</NavLink>
          <NavLink to="/learningplan">Learning Plan</NavLink>
          <NavLink to="/social">Social</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </nav>
      </aside>

        {children}

      <div className="bottombar">
        <NavLink to="/dashboard"><span className="material-symbols-rounded">bar_chart_4_bars</span></NavLink>
        <NavLink to="/classes"><span className="material-symbols-rounded">menu_book</span></NavLink>
        <NavLink to="/practice"><span className="material-symbols-rounded">exercise</span></NavLink>
        <NavLink to="/learningplan"><span className="material-symbols-rounded">calendar_add_on</span></NavLink>
        <NavLink to="/social"><span className="material-symbols-rounded">group_add</span></NavLink>
        <NavLink to="/profile"><span className="material-symbols-rounded">person</span></NavLink>
      </div>
    </div>
  );
};

export default MainLayout;