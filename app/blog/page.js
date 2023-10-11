"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Blog = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="grid lg:grid-cols-3 overflow-hidden  md:grid-cols-2 sm:grid-cols-1 sm:bl gap-10 bg-sky-950 ">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="ml-5 mt-10"
        >
          <div className="container-full bg-sky-950  text-white">
            <div className="card  w-96 h-62 bg-base-200  border">
              <Image
                className="rounded-2xl "
                src="https://i.ibb.co/z23pYQp/Main-Image-6.png"
                height={400}
                width={450}
                alt="javascript"
              />

              <div className="card-body">
                <p className="absolute bottom-4 m-auto text-black   font-bold ml-5">
                  React js vs javascript
                </p>
                <div className="absolute bottom-2 right-4">
                  <button
                    className="btn btn-active border border-black outline-2 h-8 hover:bg-sky-500 "
                    onClick={() =>
                      document.getElementById("my_modal_1").showModal()
                    }
                  >
                    See answer
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box w-max max-w-5xl  bg-sky-950 text-white">
                <h3 className="font-bold text-lg">What is JavaScript ?</h3>
                <p className="py-4">
                  JavaScript is a scripting or programming language that allows
                  you to implement complex features on web pages — every time a
                  web page does more than just sit there and display static
                  information for you to look at — displaying timely content
                  updates, interactive maps, animated 2D/3D graphics, scrolling
                  video jukeboxes, etc. — you can bet that JavaScript is
                  probably involved. It is the third layer of the layer cake of
                  standard web technologies, two of which (HTML and CSS) we have
                  covered in much more detail in other parts of the Learning
                  Area.
                </p>
                <h3 className="font-bold text-lg">What is React js ?</h3>
                <p className="py-4">
                  The React.js framework is an open-source JavaScript framework
                  and library developed by Facebook. Its used for building
                  interactive user interfaces and web applications quickly and
                  efficiently with significantly less code than you would with
                  vanilla JavaScript. In React, you develop your applications by
                  creating reusable components that you can think of as
                  independent Lego blocks. These components are individual
                  pieces of a final interface, which, when assembled, form the
                  applications entire user interface.
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="ml-5 mt-10"
        >
          <div className="container-full bg-sky-950 h-screen text-white">
            <div className="card relative  w-96 h-62 bg-base-200  border ">
              <Image
                height={400}
                width={450}
                className="rounded-2xl h-52"
                src="https://i.ibb.co/Tk4rZJd/1-G-0b-FJ1-Q-jff-Kgh-QQ3nwr-Q.jpg"
                alt="javascript"
              />

              <div className="card-body">
                <p className="absolute bottom-4 m-auto text-black  font-bold ml-5">
                  javascript ES6 vs ES7
                </p>
                <div className="absolute bottom-2 right-4">
                  <button
                    className="btn btn-active border border-black outline-2 h-8 hover:bg-sky-500 "
                    onClick={() =>
                      document.getElementById("my_modal_2").showModal()
                    }
                  >
                    See answer
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <dialog id="my_modal_2" className="modal">
              <div className="modal-box w-max max-w-5xl  bg-sky-950 text-white">
                <h3 className="font-bold text-lg">
                  What is difference between JavaScript and ES6?
                </h3>
                <p className="py-4">
                  ES6 is the standard governing JavaScript where as JavaScript
                  is the programming language. ES6 is next gen JavaScript syntax
                  and nothing else. There are also some added features in the
                  ES6 version of JavaScript such as arrow functions , rest and
                  spread operator, destructuring , promises etc.
                </p>
                <h3 className="font-bold text-lg">
                  What is difference between JavaScript and ES7?
                </h3>
                <p className="py-4">
                  ECMAScript 7, also known as ES7 or ECMAScript 2016, is a
                  version of ECMAScript, a scripting-language specification
                  standardized by Ecma International. This version brought along
                  some notable new features to JavaScript, aiding developers to
                  craft more effective and efficient code.
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="ml-5 mt-10"
        >
          <div className=" bg-sky-950  text-white">
            <div className="card relative w-96 h-62 bg-base-200  border ">
              <Image
                height={400}
                width={450}
                className="rounded-2xl h-52"
                src="https://i.ibb.co/C8pHMCy/When-to-Consider-Using-Node-js-0d84032172.jpg"
                alt="javascript"
              />

              <div className="card-body">
                <p className="absolute bottom-4 m-auto text-black  font-bold ml-5">
                  What is Node js ?
                </p>
                <div className="absolute bottom-2 right-4">
                  <button
                    className="btn btn-active border border-black outline-2 h-8 hover:bg-sky-500"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    See answer
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box w-max max-w-5xl  bg-sky-950 text-white">
                <h3 className="font-bold text-lg">What is Node js ?</h3>
                <p className="py-4">
                  Node.js is an open source server environment Node.js is free
                  Node.js runs on various platforms (Windows, Linux, Unix, Mac
                  OS X, etc.) Node.js uses JavaScript on the server
                </p>
                <h3 className="font-bold text-lg">Why Node.js?</h3>
                <p className="py-4">
                  A common task for a web server can be to open a file on the
                  server and return the content to the client. Here is how PHP
                  or ASP handles a file request: Sends the task to the
                  computers file system. Waits while the file system opens and
                  reads the file. Returns the content to the client. Ready to
                  handle the next request. Here is how Node.js handles a file
                  request: Sends the task to the computers file system. Ready
                  to handle the next request. When the file system has opened
                  and read the file, the server returns the content to the
                  client. Node.js eliminates the waiting, and simply continues
                  with the next request. Node.js runs single-threaded,
                  non-blocking, asynchronous programming, which is very memory
                  efficient.
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="ml-5 -mt-80"
        >
          <div className="container-full bg-sky-950 h-screen text-white">
            <div className="card relative w-96 h-62 bg-base-200  border ">
              <Image
                height={400}
                width={450}
                className="rounded-2xl h-52"
                src="https://i.ibb.co/KFrNQhF/expressjs-vs-nodejs.jpg"
                alt="javascript"
              />

              <div className="card-body">
                <p className="absolute bottom-4 m-auto text-black  font-bold ml-5">
                  Express js vs Node js
                </p>
                <div className="absolute bottom-2 right-4">
                  <button
                    className="btn btn-active border border-black outline-2 h-8 hover:bg-sky-500"
                    onClick={() =>
                      document.getElementById("my_modal_4").showModal()
                    }
                  >
                    See answer
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <dialog id="my_modal_4" className="modal">
              <div className="modal-box w-max max-w-5xl  bg-sky-950 text-white">
                <h3 className="font-bold text-lg">Express js vs Node js</h3>
                <p className="py-4">
                  Express.js and Node.js, two leading backend technologies, have
                  been contrasted in this article. Express is built on top of
                  Node, so yes, Express adds more features while building apps.
                  Node is just a Javascript environment with libraries to make
                  it easy to write software, whereas Express extends Node
                  specifically to add middleware, routing, and much more. In
                  this article, we will talk about express js vs node js in
                  detail.
                </p>
                <h3 className="font-bold text-lg">What is ExpressJS?</h3>
                <p className="py-4">
                  ExpressJS is a web framework built on top of Node.js that
                  enables you to design a web application to handle a variety of
                  different HTTP requests. ExpressJS is a NodeJS-based
                  javascript framework. Web application creation is quick and
                  simple with the help of the former (ExpressJS), as opposed to
                  being more time-consuming with NodeJS. A wide range of
                  features is offered for both web and mobile apps. It is a
                  piece of the MERN, MEAN, and MEVN frameworks and was written
                  in Javascript. For streamlined web creation, Express offers
                  plugins, template code, middleware tools, and routing
                  capabilities. To facilitate customization, the framework also
                  permits the integration of tools and features from third
                  parties, and hence it has composability.
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
        <div
      data-aos="zoom-in"
       data-aos-duration="2000"
          className="ml-5 -mt-80"
        >
          <div className="container-full bg-sky-950 h-screen text-white">
            <div className="card relative w-96 h-62 bg-base-200  border ">
              <Image
                height={400}
                width={450}
                className="rounded-2xl h-52"
                src="https://i.ibb.co/xC8XJnF/1684320792067.png"
                alt="javascript"
              />

              <div className="card-body">
                <p className="absolute bottom-4 m-auto text-black  font-bold ml-5">
                  What is MongoDB?
                </p>
                <div className="absolute bottom-2 right-4">
                  <button
                    className="btn btn-active border border-black outline-2 h-8 hover:bg-sky-500"
                    onClick={() =>
                      document.getElementById("my_modal_5").showModal()
                    }
                  >
                    See answer
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <dialog id="my_modal_5" className="modal">
              <div className="modal-box w-max max-w-5xl  bg-sky-950 text-white">
                <h3 className="font-bold text-lg">What is MongoDB ?</h3>
                <p className="py-4">
                  MongoDB is an open source NoSQL database management program.
                  NoSQL (Not only SQL) is used as an alternative to traditional
                  relational databases. NoSQL databases are quite useful for
                  working with large sets of distributed data. MongoDB is a tool
                  that can manage document-oriented information, store or
                  retrieve information. MongoDB is used for high-volume data
                  storage, helping organizations store large amounts of data
                  while still performing rapidly. Organizations also use MongoDB
                  for its ad-hoc queries, indexing, load balancing, aggregation,
                  server-side JavaScript execution and other features.
                  Structured Query Language SQL is a standardized programming
                  language that is used to manage relational databases. SQL
                  normalizes data as schemas and tables, and every table has a
                  fixed structure. Instead of using tables and rows as in
                  relational databases, as a NoSQL database, the MongoDB
                  architecture is made up of collections and documents.
                  Documents are made up of key-value pairs -- MongoDBs basic
                  unit of data. Collections, the equivalent of SQL tables,
                  contain document sets. MongoDB offers support for many
                  programming languages, such as C, C++, C#, Go, Java, Python,
                  Ruby and Swift
                </p>

                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="ml-5 -mt-80"
        >
          <div className="container-full bg-sky-950 h-screen text-white">
            <div className="card relative w-96 h-62 bg-base-200  border ">
              <Image
                height={400}
                width={450}
                className="rounded-2xl h-52"
                src="https://i.ibb.co/bP3yH2f/maxresdefault.jpg"
                alt="javascript"
              />

              <div className="card-body">
                <p className="absolute bottom-4 m-auto text-black  font-bold ">
                  SQL vs NoSQL Database
                </p>
                <div className="absolute bottom-2 right-4">
                  <button
                    className="btn btn-active border border-black outline-2 h-8 hover:bg-sky-500"
                    onClick={() =>
                      document.getElementById("my_modal_6").showModal()
                    }
                  >
                    See answer
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <dialog id="my_modal_6" className="modal">
              <div className="modal-box w-max max-w-5xl  bg-sky-950 text-white">
                <h3 className="font-bold text-lg">What is a SQL database?</h3>
                <p className="py-4">
                  SQL which stands for Structured Query Language is the
                  programming language thats been widely used in managing data
                  in relational database management systems  since the
                  1970s. In the early years, when storage was expensive SQL
                  databases focused on reducing data duplication. Fast-forward
                  to today, and SQL is still widely used for querying relational
                  databases, where data is stored in rows and tables that are
                  linked in various ways. One table record may link to one other
                  or to many others, or many table records may be related to
                  many records in another table. These relational databases
                  which offer fast data storage and recovery, can handle great
                  amounts of data and complex SQL queries.
                </p>
                <h3 className="font-bold text-lg">What is a NoSQL database?</h3>
                <p className="py-4">
                  NoSQL is a non-relational database, meaning it allows
                  different structures than a SQL database not rows and
                  columns and more flexibility to use a format that best fits
                  the data. The term NoSQL was not coined until the early
                  2000s. It doesn't mean the systems don't use SQL, as NoSQL
                  databases do sometimes support some SQL commands. More
                  accurately NoSQL is sometimes defined as “not only SQL
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="ml-5 -mt-80 "
        >
          <div className="container-full bg-sky-950 h-screen text-white">
            <div className="card relative w-96 h-62 bg-base-200  border ">
              <Image
                height={400}
                width={450}
                className="rounded-2xl h-52"
                src="https://i.ibb.co/F3PvwQ5/Useful-HTML5-CSS3-Tips-and-Tricks.png"
                alt="javascript"
              />

              <div className="card-body">
                <p className="absolute bottom-4 m-auto text-black  font-bold ml-5">
                  Html5 vs Css3
                </p>
                <div className="absolute bottom-2 right-4">
                  <button
                    className="btn btn-active border border-black outline-2 h-8 hover:bg-sky-500"
                    onClick={() =>
                      document.getElementById("my_modal_7").showModal()
                    }
                  >
                    See answer
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <dialog id="my_modal_7" className="modal">
              <div className="modal-box w-max max-w-5xl  bg-sky-950 text-white">
                <h3 className="font-bold text-lg">What is HTML?</h3>
                <p className="py-4">
                  HTML stands for Hyper Text Markup Language HTML is the
                  standard markup language for creating Web pages HTML describes
                  the structure of a Web page HTML consists of a series of
                  elements HTML elements tell the browser how to display the
                  content HTML elements label pieces of content such as this is
                  a heading this is a paragraph this is a link etc.
                </p>
                <h3 className="font-bold text-lg">What is CSS?</h3>
                <p className="py-4">
                  CSS stands for Cascading Style Sheets CSS describes how HTML
                  elements are to be displayed on screen paper or in other
                  media CSS saves a lot of work. It can control the layout of
                  multiple web pages all at once External stylesheets are stored
                  in CSS files
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
