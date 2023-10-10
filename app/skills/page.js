"use client"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skill = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
<div className="container-full bg-sky-950 min-h-screen">
<div>
<h1 className="text-white bg-sky-950  "><button className="border outline-1 p-2 ml-10 mb-12 rounded-2xl">Front_End</button></h1>
<div className="bg-sky-950 grid lg:grid-cols-8  md:grid-cols-4 sm:grid-cols-3">
  
  <div data-aos="zoom-in-up"  data-aos-duration="1000" className="tooltip ml-10  " >
    <img className="w-20 h-20 " src="https://cdn-icons-png.flaticon.com/512/888/888859.png"/>
    <button className="btn mr-20 ">HTML5</button>
  </div>
  <div data-aos="zoom-in-up"  data-aos-duration="1000" className="tooltip ml-10 " >
    <img className="w-16 h-20 " src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/800px-CSS.3.svg.png"/>
    <button className="btn mr-24">CCS3</button>
  </div>
  <div data-aos="zoom-in-up"  data-aos-duration="1000" className="tooltip ml-6 " >
    <img className="w-36 h-20 " src="https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Symbol.png"/>
    <button className="btn mr-22">JavaScript</button>
  </div>
  <div data-aos="zoom-in-up"  data-aos-duration="1000" className="tooltip ml-14  " >
    <img className="w-26 h-20 ml-2 " src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"/>
    <button className="btn w-28 ">React js</button>
  </div>
  <div data-aos="zoom-in-up"  data-aos-duration="1000" className="tooltip ml-14  tooltip-open tooltip-right " data-tip="Learning" >
    <img className="w-28 h-20" src="https://www.quanle.me/wp-content/uploads/2021/07/nextjs.png"/>
    <button className="btn w-28 mr-24">Next js</button>
  </div>
  <div data-aos="zoom-in-up"  data-aos-duration="1000" className="tooltip ml-16 " >
    <img className="w-16 h-20 ml-5  " src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png"/>
    <button className="btn mr-24">Tailwind css </button>
  </div>
  
</div>

</div>

<h1><button  className="border outline-1 p-2 ml-10 mb-12 rounded-2xl text-white mt-10 ">Back-End</button></h1>
<div className="bg-sky-950 grid lg:grid-cols-8  md:grid-cols-4 sm:grid-cols-3">
  
  <div data-aos="zoom-in-up"  data-aos-duration="1000" className="tooltip ml-10" >
    <img className="w-20 h-20 " src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"/>
    <button className="btn mr-20 ">Node Js</button>
  </div>
  <div data-aos="zoom-in-up"  data-aos-duration="1000" className="tooltip ml-10 " >
    <img className="w-24 h-20 " src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Firebase_Logo.png"/>
    <button className="btn mr-24">Firebase</button>
  </div>
  <div data-aos="zoom-in-up"  data-aos-duration="1000" className="tooltip ml-6  tooltip-open tooltip-right " data-tip="Learning">
    <img className="w-32 h-20 " src="https://i.ibb.co/PmPsHHq/Express-JS-removebg-preview.png"/>
    <button className="btn mr-22">Express Js</button>
  </div>
  <div data-aos="zoom-in-up"  data-aos-duration="1000" className="tooltip ml-14 tooltip-open tooltip-right " data-tip="Learning" >
    <img className="w-20  h-20 ml-2 " src="https://i.ibb.co/s3Fxs6V/385-3850359-icon-mongodb-logo-hd-png-download-removebg-preview.png"/>
    <button className="btn w-28 ">MongoDB</button>
  </div>
 
  
</div>
</div>

 
  );
};

export default Skill;
