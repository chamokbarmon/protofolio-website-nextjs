"use client";

import Link from "next/link";

const menubar = () => {
  return (
    <div className="navbar bg-sky-950 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <img
          className="btn btn-ghost rounded  normal-case h-16 w-30"
          src="https://i.ibb.co/tQvbtWj/chamok-removebg-preview.png"
        ></img>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-10">
          <Link className=" hover:text-red-500" href="/">
            Home
          </Link>
          <Link className=" hover:text-red-500" href="/about">
            About us
          </Link>
          <Link className=" hover:text-red-500" href="/project">
            Project
          </Link>
          <Link className=" hover:text-red-500" href="/skills">
            Skills
          </Link>
          <Link className=" hover:text-red-500" href="/blog">
            Blog
          </Link>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="/resume">Resume</Link>
      </div>
    </div>
  );
};

export default menubar;
