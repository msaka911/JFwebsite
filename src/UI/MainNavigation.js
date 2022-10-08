import { NavLink } from 'react-router-dom';


import classes from './MainNavigation.module.css';
import logo from "../assets/logo.png"
import { useState } from 'react';
import DropExample from './Dropdown';


const MainNavigation = () => {
  const [value,setValue]=useState(null)
   const[toggle,setToggle]=useState(false)



  console.log(value)

  
  return (
    <header className={classes.header}>
      <div className={classes.top}>
         <img src={logo} className={classes.logo}></img>
         <nav className={classes.nav}>
           <ul>
              <li>
              <NavLink to='/Home' className={(navData) => (navData.isActive ? `${classes.active}` : '')}>
                  Home
              </NavLink>
              </li>
              <li>
              <NavLink to='/quote' className={(navData) => (navData.isActive ? `${classes.active}` : '')}>
                  Quote
              </NavLink>
              </li>
            </ul>
            <DropExample setValue={setValue}></DropExample> 
          </nav>
      </div>
      {/* <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/Home' className={(navData) => (navData.isActive ? `${classes.active}` : '')}>
              Home
            </NavLink>
          </li>


          <li>
          <NavLink to='/new-quote'  className={(navData) => (navData.isActive ? `${classes.active}` : '')}>
              File A Quote
            </NavLink>
          </li>
          <li>
            <NavLink to='/login'  className={(navData) => (navData.isActive ? `${classes.active}` : '')}>
              Login
            </NavLink>
          </li>
        </ul>
      </nav> */}

    </header>
  );
};

export default MainNavigation;
