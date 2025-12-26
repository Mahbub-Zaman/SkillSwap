import React, { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { IoPersonAdd } from "react-icons/io5";

const NavBar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  // Theme toggle state
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme(theme === "light" ? "dark" : "light");

  const handleLogout = async () => {
    try {
      await logOut();
      toast.success("Logged out successfully!");
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Failed to logout");
    }
  };

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
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Skills">Browse Skills</NavLink>
            </li>

            {user && (
              <>
                <li>
                  <NavLink to="/Dashboard">Dashboard</NavLink>
                </li>
                <li>
                  <NavLink to="/EnrolledCourse">My Courses</NavLink>
                </li>
              </>
            )}

            <li>
              <NavLink to="/faq">Help</NavLink>
            </li>
          </ul>
        </div>

       <Link
        to="/"
        className="flex items-center gap-2 text-xl px-2 py-1 rounded 
                    hover:bg-[var(--color-hoverpurple)] 
                    dark:hover:bg-[var(--color-hoverpurple)]">
        <img src="/skill.png" alt="Logo" className="w-8 h-8" />

        <span className="font-semibold leading-tight">
            <span className="text-purple-600">Skill</span>
            <span className="inline hover:text-black">Swap</span>
        </span>
       </Link>



      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-purple-600 font-bold" : ""
              }>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Skills"
              className={({ isActive }) =>
                isActive ? "text-purple-600 font-bold" : ""
              }>
              Browse Skills
            </NavLink>
          </li>

          {user && (
            <>
              <li>
                <NavLink
                  to="/Dashboard"
                  className={({ isActive }) =>
                    isActive ? "text-purple-600 font-bold" : ""
                  }>
                  Dashboard
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/EnrolledCourse"
                  className={({ isActive }) =>
                    isActive ? "text-purple-600 font-bold" : ""
                  }>
                  My Courses
                </NavLink>
              </li>
            </>
          )}

          <li>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                isActive ? "text-purple-600 font-bold" : ""
              }>
              Help
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        {/* Theme toggle */}
        <button
        onClick={toggleTheme}
        className={`relative w-10 h-10 rounded-full overflow-hidden shadow-inner 
            ${theme === "light" ? "bg-white border border-gray-300 shadow-sm" : "bg-gray-700"}
            transition-colors duration-500 mr-4`}
        title="Toggle Light/Dark"
        >

          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/light.png"
              alt="Light Theme"
              className={`transition-transform duration-500 ${
                theme === "light"
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              } w-6 h-6`}
            />

            <img
              src="/dark.png"
              alt="Dark Theme"
              className={`absolute transition-transform duration-500 ${
                theme === "dark"
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-6 opacity-0"
              } w-6 h-6`}
            />
          </div>
        </button>

        {user ? (
          <>
            <div className="hidden lg:flex flex-col items-end mr-3">
              <span className="text-sm font-semibold">
                {user.displayName || "User"}
              </span>
              <span className="text-xs text-gray-500">{user.email}</span>
            </div>

            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10  rounded-full ring ring-purple-500 ring-offset-base-100 ring-offset-2">
                  <img
                    alt="User Avatar"
                    src={
                      user.photoURL ||
                      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }
                    title={user.displayName || user.email}
                  />
                </div>
              </label>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-purple-300 rounded-box z-50 mt-3 w-64 p-2 shadow-lg">
                  <div className="flex flex-col gap-1 px-2 py-2">
                    <span className="font-bold text-base text-gray-600">
                      {user.displayName || "User"}
                    </span>
                    <span className="text-xs text-gray-600">{user.email}</span>
                  </div>

                <div className="divider divider-primary my-0"></div>

                <li>
                  <NavLink to="/profile" className="text-[var(--color-black)]">
                    My Profile
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/update-profile" className="text-[var(--color-black)]">
                    Update Profile
                  </NavLink>
                </li>
                
                <div className="divider divider-primary my-0"></div>

                <button
                onClick={handleLogout}
                className="btn btn-error btn-sm ml-2 h-8 px-4 flex items-center gap-2">
                <FiLogOut />
                Logout
                </button>
              </ul>
            </div>
          </>
        ) : (
          <>
            <Link to="/signup">
              <button className="btn btn-outline btn-primary btn-sm h-10 px-4 flex items-center gap-2">
                <IoPersonAdd />
                <span className="hidden md:inline">Sign Up</span>
              </button>
            </Link>

            <Link to="/login">
              <button className="btn btn-primary btn-sm ml-2 h-10 px-4 flex items-center gap-2">
                <FiLogIn />
                Login
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
