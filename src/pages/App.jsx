import React from "react";
import { useNavigate } from "react-router-dom";
// import './index.css'; // Import custom CSS for styling
import homeImage from "/home.svg";
import aboutImage from "/about.svg";
import tangan from "/tangan.svg";
import imgPdf from "/pdf.svg";
import star from "/star.svg";
import instagram from "/instagram.svg";
import facebook from "/facebook.svg";
import tiktok from "/tiktok.svg";
import affect from "/after-effects.svg";
import premier from "/premiere-pro.svg";
import lightroom from "/photoshop-lightroom.svg";
import figma from "/figma.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Home() {
  const navigate = useNavigate();
  const scrollToSection = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="overflow-y-scroll scrollbar-hide font-montserrat ">
      {/* Navbar */}
      <nav id="navbar" className="w-full bg-pages/80 flex justify-between items-center px-44 py-5 fixed z-50 drop-shadow-lg font-semibold">
        <div className="text-primary text-3xl">
          <p>Putra Andoni.</p>
        </div>
        <div className="flex gap-3 text-xl text-black">
          {['home', 'about', 'project', 'contact'].map((section) => (
            <a key={section} href={`#${section}`} className="hover:text-white hover:bg-primary py-3 px-5 rounded-lg" onClick={scrollToSection}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="py-60 flex items-center bg-pages">
        <div className="flex justify-center items-end px-16 gap-7">
          <div className="text-black w-5/12 pb-16">
            <div className="flex gap-2 items-center">
              <h2 className="text-6xl text-primary font-bold my-10">Hello I’m Andon</h2>
              <img src={tangan} alt="hand-over" className="max-h-16" />
            </div>
            <h5 className="text-2xl font-bold ">_________ Freelancer</h5>
            <h5 className="text-xl font-normal py-5 leading-7">I’am a Freelancer based in Lamongan, and I am very passionate and dedicated to my work.</h5>
            <div className="flex gap-2 text-white text-lg font-semibold">
              <button className="bg-secondary hover:bg-primary p-6 rounded-xl tracking-wider">Contact Info</button>
              <button className="bg-black hover:bg-primary p-6 rounded-xl tracking-wider flex items-center">
                <p>Download CV</p>
                <img src={imgPdf} alt="image-pdf" className="h-5" />
              </button>
            </div>
          </div>
          <img src={homeImage} className="max-w-screen-sm w-3/10 h-fit pl-20" alt="Home" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="h-fit px-20 bg-pages py-10">
        <div className="lg:flex w-full gap-8">
          <div className="w-full lg:w-[30%] flex justify-center items-center">
            <img src={aboutImage} alt="about-image" className="w-10/12 h-fit" />
          </div>
          <div className="w-full lg:w-[34%] pt-8">
            <h3 className="text-2xl px-5 py-2 mb-6 border-primary border-4 rounded-2xl font-bold text-primary uppercase w-fit tracking-wide">About Me</h3>
            <div className="flex items-start gap-2">
              <img src={star} alt="" className="h-4 mt-2" />
              <p className="text-xl text-left leading-6 font-normal">
                Hello! My name is Putra Andoni Destyonata, <br />a Freelancer based in Lamongan, Indonesia. Currently, I am pursuing studies at the State Polytechnic of Electronics in Surabaya, honing my skills and expanding my knowledge in the fields of electronics and digital technology.
                <br />
                <br />
                I have a deep passion for photography and videography, always eager to capture moments and tell stories through my lens. My love for this art drives me to continuously explore and experiment with new techniques and styles.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-[34%] pt-8">
            <div className="pb-10">
              <h3 className="text-2xl px-5 py-2 mb-6 border-primary border-4 rounded-2xl font-bold  text-primary uppercase w-fit tracking-wide">Education</h3>
              <div className="flex items-start gap-2 pl-2">
                <img src={star} alt="" className="h-4 mt-2" />
                <div className="">
                  <h4 className="text-xl font-bold text-primary leading-6">ELECTRONIC ENGINEERING POLYTECHNIC INSTITUTE OF SURABAYA</h4>
                  <p className="text-xl leading-6">Multimedia Engineering Technology <br /> [ 2022 - present]</p>
                </div>
              </div>
            </div>
            <div className="">
              <h3 className="text-2xl px-5 py-2 mb-6 border-primary border-4 rounded-2xl font-bold  text-primary uppercase w-fit tracking-wide">skills</h3>
              <div className="flex items-start gap-2 pl-2">
                <img src={star} alt="" className="h-4 mt-2" />
                <div className="">
                  <p className="text-xl">Videography</p>
                  <p className="text-xl">Photography</p>
                  <p className="text-xl">Video Editor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex w-full gap-8">
          <div className="w-full lg:w-[30%] pt-8 lg:pl-8">
            <h3 className="text-2xl px-5 py-2 mb-6 border-primary border-4 rounded-2xl font-bold  text-primary uppercase w-fit tracking-wide">Social Media</h3>
            <button className="flex mb-4 items-center gap-4">
              <img src={instagram} alt="hand-over" className="max-h-20" />
              <p className="text-xl">putra_andoni</p>
            </button>
            <button className="flex mb-4 items-center gap-4">
              <img src={facebook} alt="hand-over" className="max-h-20" />
              <p className="text-xl">Putra Andoni</p>
            </button>
            <button className="flex mb-4 items-center gap-4">
              <img src={tiktok} alt="hand-over" className="max-h-20" />
              <p className="text-xl">putra_andoni28</p>
            </button>
          </div>
          <div className="w-full lg:w-[34%] pt-8">
            <h3 className="text-2xl px-5 py-2 mb-6 border-primary border-4 rounded-2xl font-bold  text-primary uppercase w-fit tracking-wide">WORKING EXPERIENCE</h3>
            <div className="flex items-start gap-2 pl-2">
              <img src={star} alt="" className="h-4 mt-2" />
              <div className="text-xl">
                <p className="font-bold text-primary">2022 - Today</p>
                <p className="text-primary italic">freelancer</p>
                <p className="">
                  Photographer-videographer for weddings, pre-weddings, yearbooks, hunting,... video editor for short movies, Motion Graphic, school assignments.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2 pl-2 pt-1">
              <img src={star} alt="" className="h-4 mt-2" />
              <div className="text-xl">
                <p className="font-bold text-primary">2021 - 2022</p>
                <p className="">
                  Tourism video competition projects, short movies, counseling content.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[34%] pt-8">
            <h3 className="text-2xl px-5 py-2 mb-6 border-primary border-4 rounded-2xl font-bold  text-primary uppercase w-fit tracking-wide">SOFTWARE</h3>
            <div className="grid grid-cols-3 gap-2 pl-2 w-2/3">
              <img src={premier} alt="hand-over" className="max-h-20" />
              <img src={premier} alt="hand-over" className="max-h-20" />
              <img src={premier} alt="hand-over" className="max-h-20" />
              <img src={premier} alt="hand-over" className="max-h-20" />
              <img src={premier} alt="hand-over" className="max-h-20" />
            </div>
          </div>
        </div>

      </section>

      {/* project section */}
      <section id="project" className="h-fit py-40 bg-page-2">
        <div className="justify-center items-center flex flex-col">
          <h2 className="text-white text-center uppercase text-6xl font-black">My Project</h2>
        </div>
      </section>
      {/* contact section */}
      <section id="contact"></section>
    </div>
  );
}
