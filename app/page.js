"use client";

import Banar from "./banar/page";
import About from "./about/page"
import Project from "./project/page"
import Skill from "./skills/page";
import Contact from "./contact/page";
export default function Home() {
  return (
    <div className="container-full overflow-hidden">
      <Banar/>
      <h1 className="text-center bg-sky-950 text-white italic font-bold text-2xl">About us</h1>
      <About/>
      <h1 className="text-center bg-sky-950 text-white italic font-bold text-2xl p-2">Projects</h1>
      <Project/>
      <h1 className="text-center bg-sky-950 text-white italic font-bold text-2xl p-2">Skills</h1>
      <Skill/>
      <h1 className="text-center bg-sky-950 text-white italic font-bold text-2xl p-2">Contact us</h1>
      <Contact/>
     
    </div>
  );
}
