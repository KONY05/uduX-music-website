import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

function NavBar() {
  const [navClick, setNavClick] = useState(false);

  return (
    <div className={`fixed z-30 flex w-full flex-col items-center  p-4 lg:px-[60px] ${navClick? 'bg-[#111315]': ''}`}>
      <div className={`flex w-full justify-between ${navClick? ' border-b border-b-[#33383F] pb-4': ''}`}>
        <Logo />

        <span className="hover:cursor-pointer lg:hidden">
          {navClick ? (
            <XMarkIcon
              className="w-6 text-white"
              onClick={() => setNavClick((btn) => !btn)}
            />
          ) : (
            <Bars3Icon
              className="w-6 text-white"
              onClick={() => setNavClick((btn) => !btn)}
            />
          )}
        </span>

        <div className="hidden lg:block">
          <nav className="">
            <ul className="flex gap-[107px]">
              <li>
                <NavLink
                  to="/features"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#E1F16B] underline underline-offset-2"
                      : ""
                  }
                >
                  Features
                </NavLink>{" "}
              </li>
              <li>News</li>
            </ul>
          </nav>
        </div>
        <div className="hidden gap-4 lg:flex">
          <button className="border border-[#E1F16B] px-6 py-2.5 text-[#E1F16B] hover:cursor-pointer">
            Sign up
          </button>
          <button className="border border-[#E1F16B] bg-[#E1F16B] px-6 py-2.5 text-black hover:cursor-pointer">
            Login
          </button>
        </div>
      </div>
      <hr />

      {navClick && (
        <div className="w-full pt-[27px] lg:hidden">
          <nav>
            <ul className="flex flex-col gap-2">
              <li className="px-2.5 py-3">
                <NavLink to="/features">Features</NavLink>
              </li>
              <li className="border-[#E1F16B] px-2.5 py-3 text-[#E1F16B] hover:cursor-pointer">
                Log in
              </li>
              <li className="border border-[#E1F16B] bg-[#E1F16B] px-2.5 py-3 text-black hover:cursor-pointer">
                Sign up
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}

export default NavBar;
