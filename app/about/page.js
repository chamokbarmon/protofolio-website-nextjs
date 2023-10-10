"use client";
import animation from "../../public/about.json";
import Lottie from "lottie-react";
import "./about.css";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const aboutUS = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const openMailPopup=()=>{
    const emailAddress = 'example@example.com';
    const subject = 'Hello How are you';
  
  
    const mailtoURL = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
  
  
    window.open(mailtoURL, '_blank');

}
  return (
    // animation
    <div className="container-full">
      <div className=" grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 min-h-screen  bg-sky-950 text-white ">
        <div>
          <Lottie className=" mt-14 " animationData={animation} />
        </div>

        {/* Personal Information */}

        <div>
          <div data-aos="fade-left" data-aos-duration="1000" className="flex gap-10">
            <div className="gap-4 mt-52  ">
              <p className="text">*Personal Information*</p>
              <p className="mt-2 mb-2">
                {"< "}Chamok Bamron{" />"}{" "}
              </p>
              <Typewriter
                className="mt-2"
                options={{
                  strings: [
                    "Front-End-Developer ",
                    "Programmer ||",
                    "Web developer ",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              <p className="mt-2">Address:Dhaka Bangladesh</p>
            </div>
            <div className="mt-40 ">
              <ul className="steps steps-vertical">
                <li className="step "></li>
                <li className="step step-primary"></li>
                <li className="step step-primary"></li>
                <li className="step step-primary "></li>
              </ul>
            </div>

            <div className="mt-52 ">
              <p className="text">*Education Information*</p>
              <p className="mt-2">SSC--2019</p>
              <span className="mt-2"> Gobindagonj Gov't High School</span>
              <p className="mt-2"> Diploma in computer engineering <br/> 2023</p>
              <span className="mt-2"> Magura polytechnic Institute</span>
            </div>
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000" className="-mt-24 gap-5 flex  ">
            <Link href="https://www.linkedin.com/in/chamok-barmon-1a0571244/">
              <FontAwesomeIcon className="w-7 h-10  top " icon={faLinkedin} />
            </Link>
            <Link href="https://github.com/chamokbarmon">
              <FontAwesomeIcon className="w-8 h-10  top" icon={faGithub} />
            </Link>
            <Link href="https://www.facebook.com/chamok.barmon.1/">
              <FontAwesomeIcon className="w-8 h-10  top " icon={faFacebook} />
            </Link>

            <Link href="https://app.netlify.com/teams/chamokbarmon/overview">
              {" "}
              <img
                className="w-20 h-10  text-white imgTop"
                src="https://i.ibb.co/WPtpRss/Netlify-logo-svg.png"
              />
            </Link>
            <Link href=''>
              {" "}
              <img
                onClick={openMailPopup}
                className="w-10 h-8 mt-2 text-white imgTop"
                src="https://www.computerhope.com/jargon/g/gmail.png"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutUS;
