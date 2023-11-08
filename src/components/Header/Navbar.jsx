import { Link, NavLink } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import ThemeButton from "../Pages/pageComponents/ThemeButton";
import toast from "react-hot-toast";

const menu = (
  <>
    <li>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/rooms"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Rooms
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/my-bookings"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        My Bookings
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/testimonials"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Testimonials
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/faq"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        FAQ
      </NavLink>
    </li>
  </>
);


const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  
  const handleLogOut =()=>{
    logout();
    toast.success("Log out successful");
  
  }
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-sm btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
          >
            {menu}
          </ul>
        </div>
        <Link to={"/"} className=" normal-case text-xl">
          <div className="flex gap-2 items-center font-semibold pl-3 uppercase">
            Alpha Hotel
            <span>
              <img src="https://i.ibb.co/WB97fbp/hotel-1.png" className="w-18 md:w-10" alt="hotel logo" />
            </span>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-semibold">
          {menu}
        </ul>
      </div>
      <div className="navbar-end">
        <ThemeButton></ThemeButton>
        {user?.email ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button className="btn btn-sm text-green-600 btn-ghost">
                  {user.displayName}
                </button>
              </li>
              <li>
                <button
                  className="btn-warning bg-green-400 hover:text-white text-lg"
                  onClick={handleLogOut}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn border-none btn-xs md:btn-sm bg-green-400">
              Login
              <span>
                <FiLogIn></FiLogIn>
              </span>
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
