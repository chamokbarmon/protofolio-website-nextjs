"use client";
import React, { useEffect } from "react";
import "./banar.css";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";
const Banar = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const openMailPopup=()=>{
    const emailAddress = 'chamokjobmail33@gmail.com';
    const subject = 'Hello';
  
  
    const mailtoURL = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
  
  
    window.open(mailtoURL, '_blank');

}
  return (
  <div className=" bg-sky-950 ">
      <div className="container-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  text-white ">
      <div
        data-aos="fade-right"
        data-aos-duration="2000"
        className="m-auto  mt-32 ml-10"
      >
        <p className="italic ">Hello Dear,</p>
        <p className="text-4xl">I AM CHAMOK BARMON</p>
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
        <button className="rounded-xl border p-2 outline-1  mt-5"><Link href="/contact"  >Contact us</Link></button>
        <button className="rounded-xl border p-2 outline-1 ml-2 mt-5"><Link href="/"  onClick={openMailPopup}  >Mail me </Link></button>
      </div>
      <div data-aos="zoom-in-up"  data-aos-duration="1000" className="ml-10 mt-16 h-screen bg-sky-950">
        <Image
          className="hh ml-10 "
          src="https://i.ibb.co/G5SgVBy/chamok-1.png"
          alt="myImage"
          width={300}
          height={200}
        />
      </div>
      <div data-aos="fade-left" data-aos-duration="1000" className="m-auto mt-48 bg-sky-950">
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
  </div>
  );
};

export default Banar;
