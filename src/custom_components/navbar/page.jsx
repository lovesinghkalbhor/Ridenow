import Link from "next/link";
import React from "react";
import styles from "./nav.module.css";

export default function Nav() {
  return (
    <div
      className="navbar bg-base-100  z-10 shadow-2xl fixed"
      data-theme="light"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box"
          >
            <li>
              <Link href={"#home"}>Home</Link>
            </li>
            <li>
              <Link href={"#pricing"}>Pricing</Link>
            </li>
            {/* <li>
              <a>Parent</a>
              <ul className="p-2 w-72">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li> */}
            <li>
              <Link href={"#location"}>Location</Link>
            </li>
            <li>
              <Link href={"#feature"}>Feature</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">RideNow</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" flex gap-5 px-1">
          <li>
            <Link
              href={"#home"}
              className="text-base hover:bg-slate-100 active:scale-95 rounded-xl px-4 py-3 font-semibold"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"#pricing"}
              className="text-base hover:bg-slate-100 active:scale-95 rounded-xl px-4 py-3 font-semibold"
            >
              Pricing
            </Link>
          </li>
          {/* <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li> */}
          <li>
            <Link
              href={"#location"}
              className="text-base hover:bg-slate-100 active:scale-95 rounded-xl px-4 py-3 font-semibold"
            >
              {" "}
              Location
            </Link>
          </li>
          <li>
            <Link
              href={"#feature"}
              className="text-base hover:bg-slate-100 active:scale-95 rounded-xl px-4 py-3 font-semibold"
            >
              {" "}
              Feature
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          href="tel:74706 02088"
          className={`${styles.dark_button}  active:scale-95`}
        >
          Call us
        </Link>
      </div>
    </div>
  );
}
