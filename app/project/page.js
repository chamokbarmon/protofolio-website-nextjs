"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const Project = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="container-full overflow-hidden bg-sky-950 container-full p-5">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ml-10  gap-9 ">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="card w-96 bg-base-100 shadow-xl p-2"
        >
          <figure>
            <Image
              height={500}
              width={600}
              className="h-52 rounded"
              src="https://i.ibb.co/j8qqr3L/capture1.png"
              alt="banar"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title ">
              Follow Media Website
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p className="text-justify">
              I have created a social media platform using React.js and Tailwind
              CSS with MongoDB for data storage. Users can post content and view
              posts on this website.
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline font-bold">
                <Link
                  target="blank"
                  href="https://stalwart-cactus-11cfec.netlify.app/"
                >
                  Live Site
                </Link>
              </div>
              <div className="badge badge-outline font-bold">
                <Link
                  target="blank"
                  href="https://github.com/chamokbarmon/Follow-media-Website-client"
                >
                  Github Link
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="card w-96 bg-base-100 shadow-xl  p-2"
        >
          <figure>
            <Image
              height={500}
              width={600}
              className="h-52 rounded"
              src="https://i.ibb.co/2gt3MgT/Capture3.png"
              alt="benar"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Car Market Website
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p className="text-justify">
              I have built a car marketplace with React.js, Firebase, MongoDB,
              and Tailwind CSS. Buyers can shop for cars, ensuring secure
              transactions and an appealing, responsive design.
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline font-bold">
                <Link
                  target="blank"
                  href="https://preeminent-bavarois-38ac3c.netlify.app/"
                >
                  Live Site
                </Link>
              </div>
              <div className="badge badge-outline font-bold">
                <Link
                  target="blank"
                  href="https://github.com/chamokbarmon/Car-Service-Website-Client"
                >
                  Github Link
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="card w-96 bg-base-100 shadow-xl  p-2"
        >
          <figure>
            <Image
              height={500}
              width={600}
              className="h-52 rounded"
              src="https://i.ibb.co/ypkCPFD/Capture6.png"
              alt="banar"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Easy Transport
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p className="text-justify">
              Designed Easy Transport website using React.js, Node.js, Firebase,
              and MongoDB for car booking and servicing, streamlining
              transportation needs with convenience.
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline font-bold">
                <Link
                  target="blank"
                  href="https://resonant-kleicha-c9a6d4.netlify.app/home"
                >
                  Live Site
                </Link>
              </div>
              <div className="badge badge-outline font-bold">
                <Link
                  target="blank"
                  href="https://github.com/chamokbarmon/easy-transport-client"
                >
                  Github Link
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="card w-96 bg-base-100 shadow-xl  p-2"
        >
          <figure>
            <Image
              height={500}
              width={600}
              className="h-52 rounded"
              src="https://i.ibb.co/JCPYF6B/Capture5.png"
              alt="banar"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              To-Do-APP
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p className="text-justify">
              Built a React.js and Node.js app with MongoDB integration for task
              management. Features include creating, displaying, and deleting
              tasks, offering seamless task management capabilities.
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline font-bold">
                <Link
                  target="blank"
                  href="https://bejewelled-zuccutto-f324bc.netlify.app/"
                >
                  Live Site
                </Link>
              </div>
              <div className="badge badge-outline font-bold">
                <Link
                  target="blank"
                  href="https://github.com/chamokbarmon/To-Do-List-App-Task"
                >
                  Github Link
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="card w-96 bg-base-100 shadow-xl  p-2"
        >
          <figure>
            <Image
              height={500}
              width={600}
              className="h-52 rounded"
              src="https://i.ibb.co/GvbVNFv/Capture2.png"
              alt="banar"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Dashboard Website
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p className="text-justify">
              A React.js dashboard, styled with Tailwind CSS, mongoDB creates
              dynamic, visually appealing web interfaces. It integrates
              real-time data, interactivity, and responsive design for a robust
              user experience.
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline font-bold">
                <Link
                  target="blank"
                  href="https://classy-caramel-a3edde.netlify.app/"
                >
                  Live Site
                </Link>
              </div>
              <div className="badge badge-outline font-bold">
                <Link
                  target="blank"
                  href="https://github.com/chamokbarmon/Dashboard_Client"
                >
                  Github Link
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="card w-96 bg-base-100 shadow-xl  p-2"
        >
          <figure>
            <Image
              height={500}
              width={600}
              className="h-52 rounded"
              src="https://i.ibb.co/vj5kPXg/Capture7.png"
              alt="banar"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Gym Website
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p className="text-justify">
              Developed a clean, user-friendly gym website using HTML, CSS, and
              Bootstrap, offering a simple yet effective design for fitness
              enthusiasts.
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline font-bold">
                <Link
                  target="blank"
                  href="https://stupendous-sopapillas-8cb589.netlify.app/"
                >
                  Live Site
                </Link>
              </div>
              <div className="badge badge-outline font-bold">
                <Link
                  target="blank"
                  href="https://github.com/chamokbarmon/gym-website"
                >
                  Github Link
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="card w-96 bg-base-100 shadow-xl  p-2"
        >
          <figure>
            <Image
              height={500}
              width={600}
              className="h-52 rounded"
              src="https://i.ibb.co/vdjL8RQ/Capture8.png"
              alt="banar"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Speed Typer
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p className="text-justify">
              Crafted an engaging speed typer website using HTML, CSS,
              Bootstrap, and JavaScript, delivering a fun and interactive typing
              experience.
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline font-bold">
                <Link
                  target="blank"
                  href="https://classy-caramel-a3edde.netlify.app/"
                >
                  Live Site
                </Link>
              </div>
              <div className="badge badge-outline font-bold">
                <Link
                  target="blank"
                  href="https://github.com/chamokbarmon/Speed-Typer-website"
                >
                  Github Link
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
