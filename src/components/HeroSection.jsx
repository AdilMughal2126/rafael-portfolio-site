import React, { useState } from "react";
import ProfileImage from "../assets/profile.svg";
import ProfileImage2 from "../assets/profile-2.png";
import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/insta.svg";
import Linkedin from "../assets/linkedin.svg";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="hero-section overflow-auto pb-4">
       {/* Navbar */}
       <nav class="navbar navbar-expand-lg mt-5">
          <div class="container d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
              <a class="navbar-brand" href="#">
                Brooklyn
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
            <div
              className={`collapse navbar-collapse navbar-links ${
                isOpen ? "show" : ""
              }`}
              id="navbarNav"
            >
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Process
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">Blog</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">Services</a>
                </li>
                <li class="nav-item mx-2" style={{ fontWeight: "600" }}>
                  <a class="btn btn-primary" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      <div className="container">
        {/* Hero content */}
        <div className="row">
          <div className="col-md-8">
            <div className="hero-content">
              <div className="hero-heading my-4">
                Hello, I’m <br />
                Brooklyn Gilbert
              </div>
              <div className="hero-paragraph my-3">
                I'm a Freelance UI/UX Designer and Developer based in London,
                England. I strives to build immersive and beautiful web
                applications through carefully crafted code and user-centric
                design.
              </div>
              <div>
                <button className="hero-btn btn btn-primary">Say Hello</button>
              </div>
            </div>
            <div className="d-flex gap-1 align-items-center  mt-5">
              <div className="stats-box">
                <div className="heading">15 Y.</div>
                <div className="text">Experience</div>
              </div>
              <div className="stats-box">
                <div className="heading">250+</div>
                <div className="text">Project Completed</div>
              </div>
              <div className="stats-box">
                <div className="heading">58</div>
                <div className="text">Happy Clients</div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="profile-image">
              <img className="img-fluid" src={ProfileImage} alt="" />
            </div>
          </div>
        </div>
        {/* Intro content */}
        <div className="intro-wrapper">
          <div className="row">
            <div className="col-md-6">
              <div className="profil-image position-relative">
                <div>
                  {" "}
                  <img className="img-fluid" src={ProfileImage2} alt="" />
                </div>
                <div>
                  <div className="social-links-bar d-flex align-items-center justify-content-center gap-3">
                    <a href="">
                      <img src={Facebook} alt="" />
                    </a>
                    <a href="">
                      <img src={Instagram} alt="" />
                    </a>
                    <a
                      href=""
                      className="d-flex align-items-center justify-content-center"
                      style={{ background: "#A53DFF", padding: "8px 10px", borderRadius: "4px" }}
                    >
                      <img src={Linkedin} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <div>
                <div className="heading">
                  I am Professional User Experience Designer
                </div>
                <p className="paragraph">
                  I design and develop services for customers specializing
                  creating stylish, modern websites, web services and online
                  stores. My passion is to design digital user experiences.
                </p>
                <p className="paragraph">
                  I design and develop services for customers specializing
                  creating stylish, modern websites, web services.
                </p>
                <div className="d-flex gap-3">
                  <button className="btn btn-primary">My Project</button>
                  <button className="btn btn-outline-primary">Downlaod CV</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
