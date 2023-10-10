"use client";

import Link from "next/link";

const menubar = () => {
  return (
    <div className="container-full navbar  bg-sky-950 text-white">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-sky-950 rounded-box"
          >
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
          <Link className=" hover:text-red-500" href="/contact">
          Contact us
          </Link>
          </ul>
        </div>
        <img
          className="btn btn-ghost rounded  normal-case h-16 w-30"
          src="https://i.ibb.co/tQvbtWj/chamok-removebg-preview.png"
        ></img>
      </div>
      <div className="container-full navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base cursor-pointer  gap-10">
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
          <Link className=" hover:text-red-500" href="/contact">
          Contact us
          </Link>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="https://drive.google.com/file/d/1qVUCYGDp3YANoZBsFtRSggLiskjTIFam/view?usp=sharing" target="blank" className="border outline-1 p-2 rounded-2xl">Resume</Link>
      </div>
    </div>
  );
};

export default menubar;
