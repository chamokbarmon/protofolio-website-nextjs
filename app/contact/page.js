"use client";
import React, { useEffect, useRef } from "react";
import animation from "../../public/contact.json";
import animation1 from "../../public/contact man.json";
import Lottie from "lottie-react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

       emailjs
      .sendForm(
        "service_47pm5b5",
        "template_q24tzcf",
        form.current,
        "JAOObhB8eU3u2Vmld"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Your message has been successfully delivered ',
            showConfirmButton: false,
            timer: 3000
          })
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
   
  };
  return (
    <div className="container-full h-screen  bg-sky-950  grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
      <div className="flex h-96">
        <Lottie className="mt-16" animationData={animation} />
        <Lottie className=" mt-16  " animationData={animation1} />
      </div>
      <div data-aos="fade-left"
          data-aos-duration="1000" className="">
        <form
          
          action=""
          ref={form}
          className="w-full text-white  mt-10 flex justify-center align-middle"
          onSubmit={sendEmail}
        >
          <div className="card flex-shrink-0   w-full max-w-sm shadow-2xl ">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className=" text-white">Name</span>
                </label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Enter your name :"
                  className="input  bg-white text-black input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className=" text-white">Email</span>
                </label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Enter Your Email :"
                  className="input bg-white text-black input-bordered"
                />
                <label className="label">
                  <span className=" text-white">Message</span>
                </label>
                <textarea
                  name="message"
                  placeholder="Enter your message :"
                  id=""
                  cols="30"
                  rows="6"
                  className="border rounded bg-white text-black m-2"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">
                  <input type="submit" value="Send" />
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
