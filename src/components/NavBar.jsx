import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
    <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
            <div className="dropdown">
        <div tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
        </div>
        <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
        >
            <li>
            <NavLink to="/">Home</NavLink>
            </li>
            <li>
            <NavLink to="/Skills">Browse Skills</NavLink>
            </li>
            <li>
            <NavLink to="/Dashboard">Dashboard</NavLink>
            </li>
            <li>
            <NavLink to="/EnrolledCourse">My Courses</NavLink>
            </li>
        </ul>
        </div>
        <Link to="/" className="btn btn-ghost flex items-center gap-2 text-xl">
        <img src="/skill.png" alt="Logo" className="w-8 h-8" />
        SkillSwap
        </Link>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li>
        <NavLink to="/" className={({ isActive }) => isActive ? "text-purple-600 font-bold" : ""}>
        Home
        </NavLink>
    </li>
    <li>
        <NavLink to="/Skills" className={({ isActive }) => isActive ? "text-purple-600 font-bold" : ""}>
        Browse Skills
        </NavLink>
    </li>
    <li>
        <NavLink to="/Dashboard" className={({ isActive }) => isActive ? "text-purple-600 font-bold" : ""}>
        Dashboard
        </NavLink>
    </li>
    <li>
        <NavLink to="/EnrolledCourse" className={({ isActive }) => isActive ? "text-purple-600 font-bold" : ""}>
        My Courses
        </NavLink>
    </li>
    </ul>
  </div>
  <div className="navbar-end">
    <div className="dropdown dropdown-end">
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        <img
            alt="Avatar"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        />
        </div>
    </label>
        <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-purple-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
        >
            <li>
                <NavLink to="/profile">My Profile</NavLink>
            </li>
            <li>
                <NavLink to="/update-profile">Update Profile</NavLink>
            </li>
            <li>
                <NavLink to="/signup">SignUp</NavLink>
            </li>
        </ul>
    </div>

        
    <Link to="/login">
    <button className="btn btn-primary btn-sm ml-2 h-10 w-auto text-[15px] p-4">
        Login
    </button>
    </Link>
  </div>
</div>
    );
};

export default NavBar;