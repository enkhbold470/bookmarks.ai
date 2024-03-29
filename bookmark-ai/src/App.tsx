import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [activeMenuItem, setActiveMenuItem] = useState('Design');
  const [activeNavItem, setActiveNavItem] = useState('All');
  const mainContentRef = useRef(null);

  useEffect(() => {
    const menuItems = document.querySelectorAll('.sidebar-menu__link');
    const navItems = document.querySelectorAll('.nav-item');
    const cards = document.querySelectorAll('.card');

    const handleMenuItemClick = (menuItem: string) => {
      setActiveMenuItem(menuItem);
    };
    
    const handleNavItemClick = (navItem: string) => {
      setActiveNavItem(navItem);
    };

    menuItems.forEach((menuItem) => {
      menuItem.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        if (target.classList && !target.classList.contains('active')) {
          const activeMenuItem = document.querySelector('.sidebar-menu__link.active') as HTMLElement;
          if (activeMenuItem) activeMenuItem.classList.remove('active');
          target.classList.add('active');
        }
      });
    });

    navItems.forEach((navItem) => {
      navItem.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        if (target.classList && !target.classList.contains('active')) {
          const activeNavItem = document.querySelector('.nav-item.active') as HTMLElement;
          if (activeNavItem) activeNavItem.classList.remove('active');
          target.classList.add('active');
        }
      });
    });

    cards.forEach((card) => {
      card.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        if (target.classList && !target.classList.contains('active')) {
          const activeNavItem = document.querySelector('.nav-item.active') as HTMLElement;
          if (activeNavItem) activeNavItem.classList.remove('active');
          target.classList.add('active');
        }
      });
    });

    /*// Clean up event listeners
    return () => {
      menuItems.forEach((menuItem) => {
        menuItem.removeEventListener('click', handleMenuItemClick);
      });
      navItems.forEach((navItem) => {
        navItem.removeEventListener('click', handleMenuItemClick);
      });
      cards.forEach((card) => {
        card.removeEventListener('click', handleMenuItemClick);
      });
    };*/
  }, []); // Run only once after initial render

  return (
    /*<>
      <div className="app">
        <div className="sidebar">
          <div className="user">
            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2360&q=80" alt="user photo" className="user-photo" />
            <div className="user-name">Alexander</div>
            <div className="user-mail">alexander@email.com</div>
          </div>
          <div className="sidebar-menu">
            <a href="#" className="sidebar-menu__link active">Design</a>
            <a href="#" className="sidebar-menu__link">Barbeque</a>
            <a href="#" className="sidebar-menu__link">Productivity</a>
            <a href="#" className="sidebar-menu__link">Workout</a>
            <a href="#" className="sidebar-menu__link">Book</a>
            <a href="#" className="sidebar-menu__link">Snack</a>
          </div>
          <label className="toggle">
            <input type="checkbox" />
            <span className="slider" />
          </label>
        </div>
        <div className="main">
          <div className="main-header">
            <div className="main-header__title">Productivity</div>
            <div className="main-header__avatars">
              <img className="main-header__avatar" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="avatar" />
              <img className="main-header__avatar" src="https://images.unsplash.com/photo-1683392969197-17547ac3e06e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80" alt="avatar" />
              <img className="main-header__avatar" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80" alt="avatar" />
              <button className="add-button"><svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg></button>
            </div>
            <button className="main-header__add">
              <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </button>
          </div>
          <div className="main-header-nav">
            <a href="#" className="nav-item active">All</a>
            <a href="#" className="nav-item">Videos</a>
            <a href="#" className="nav-item">Notes</a>
            <a href="#" className="nav-item">Music</a>
            <a href="#" className="nav-item">To-do list</a>
          </div>
          <div className="main-content">
            <div className="card card-2 card-img" />
            <div className="card card-3 card-img" />
            <div className="card card-img card-1 card-main" />
            <div className="card card-4 card-img" />
            <div className="card card-img card-5" />
            <div className="card card-6 card-img" />
          </div>
        </div>
      </div>
    </>*/
  );  
}

export default App;
