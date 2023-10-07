"use client";
import React from "react";
import "./banar.css";
import Typewriter from "typewriter-effect";
const Banar = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 text-white min-h-screen bg-sky-950 ">
      <div className="m-auto align-middle justify-center mt-32 ml-10">
        <p className="italic font-bold">Hello Dear,</p>
        <p className="text-4xl">I AM CHAMOK BAMRON</p>
        <div className="mt-2">
          <Typewriter
            options={{
              strings: [
                " Front-End-Developer  ",
                "Programmer ||",
                "Web developer ",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <p className="mt-5 text-justify">
          I am a front-end developer. I have 1 year of experience seeking a
          position as a Front-end Developer with next-generation Development
          Technologies, where I can apply my knowledge of Front-end Developer
          with leadership abilities to meet client needs and exceed their
          expectations.
        </p>
      </div>
      <div className="m-auto justify-center align-middle mt-20 ">
        <img
          className="hh ml-10 "
          src="https://i.ibb.co/G5SgVBy/chamok-1.png"
          alt="myImg"
        />
      </div>
      <div className="m-auto align-middle justify-center mt-48 ">
        <div>
          1+
          <br />
          Year of Experience
        </div>
        <div className="mt-10">
          15+
          <br />
          Completed projects
        </div>
      </div>
    </div>
  );
};

export default Banar;
