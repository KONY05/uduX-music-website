import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function NavBar() {
  return (
    <div className="fixed z-30 flex w-full items-center justify-between p-4">
      <Logo />

      <span className="hover:cursor-pointer lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </span>

      <div className="hidden lg:block">
        <nav className="">
          <ul className="flex gap-[107px]">
            <li>
              <NavLink to="/features">Features</NavLink>{" "}
            </li>
            <li>News</li>
          </ul>
        </nav>
      </div>
      <div className="hidden gap-4 lg:flex">
        <button
          style={{
            color: "hsla(67, 83%, 68%, 1)",
            borderColor: "hsla(67, 83%, 68%, 1)",
          }}
          className="border px-6 py-2.5 hover:cursor-pointer"
        >
          Sign up
        </button>
        <button
          style={{
            backgroundColor: "hsla(67, 83%, 68%, 1)",
            borderColor: "hsla(67, 83%, 68%, 1)",
          }}
          className="border px-6 py-2.5 text-black hover:cursor-pointer"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default NavBar;
