import React, { createFactory } from "react";
import menu from "../../../assest/menu.png";
import Category1 from "../../../assest/Category_1.png";
import Category2 from "../../../assest/Category_2.png";
import Category3 from "../../../assest/Category_3.png";
import cafe1 from "../../../assest/cafe1.png";
import cafe2 from "../../../assest/cafe2.png";
import cafe3 from "../../../assest/cafe3.png";
import cafe4 from "../../../assest/cafe4.png";
import scaner from "../../../assest/scaner.png";
import logofranchise from "../../../assest/logo-franchise.png";

import "./Categorypage.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const Categorypage = () => {
  return (
    <>
      <div className="main-header py-4 ">
        <div className="container">
          <div className="row d-flex align-item-center">
            <div className="col-lg-3">
              <div className="franchise-logo">
                <img src={logofranchise} alt="logofranchise" className="w-75" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="search-box d-flex justify-content-end">
                <input
                  type="text"
                  placeholder="Search Franchise"
                  className="p-2"
                />
              </div>
            </div>
            <div className="col-lg-1">
              <ul className="menu pt-1">
                <li>
                  <a href="/">Home</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-1 ">
              <div className="menu pt-2 ">
                <img src={menu} alt="menu" className="w-25" />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="main-post">
                <div className="postfranchise p-2 w-75 text-center">
                  Post franchise
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="Categorypage1 ">
        <div className="container">
          <h2>Sub Category</h2>
        </div>

        <div className="container-fluid">
          <div className="row p-5">
            <div className="col-lg-4">
              <div className="Category_img">
                <img src={Category1} alt="Category_1.png"></img>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="Category_img">
                <img src={Category2} alt="Category_2.png"></img>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="Category_img">
                <img src={Category3} alt="Category_3.png"></img>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cafe_section">
        <div className="container">
          <h2>Cafe Page</h2>
          <div className="row py-5">
            <div className="col-lg-3">
              <div className="cafe_box">
                <div className="cafe_icon">
                  <img src={cafe1} className="cafe"></img>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="cafe_box">
                <div className="cafe_icon">
                  <img src={cafe2} className="cafe"></img>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="cafe_box">
                <div className="cafe_icon">
                  <img src={cafe3} className="cafe"></img>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="cafe_box">
                <div className="cafe_icon">
                  <img src={cafe4} className="cafe"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer ">
        <div className="container">
          <div className="row py-5">
            <div className="col-lg-4">
              <div className="footer_logo">
                <img
                  src={logofranchise}
                  alt="logofranchise"
                  className="w-75"
                ></img>
              </div>
              <h3 className="follow pt-5">follow on:</h3>
              <div className="follow_icon gap-5 py-5 d-flex">
                <div className="follow_1">
                  <i class="fa-brands fa-instagram"></i>
                </div>
                <div className="follow_2">
                  <i class="fa-brands fa-facebook"></i>
                </div>
                <div className="follow_4">
                  <i class="fa-brands fa-twitter"></i>
                </div>
                <div className="follow_5">
                  <i class="fa-brands fa-invision"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="footer_li-group">
                <div className="row py-3">
                  <div className="col-lg-6">
                    <h3 className="company">COMPANY</h3>
                    <ul className="li_group py-3">
                      <li>careers</li>
                      <li>About Us</li>
                      <li>For Partners</li>
                      <li>Terms</li>
                      <li>Annual Return</li>
                      <li>Privacy Policy</li>
                      <li>Contact Us</li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <h3 className="company">EXPLORE</h3>
                    <ul className="li_group py-3">
                      <li>news</li>
                      <li>Home Loans</li>
                      <li>Sitemap</li>
                      <li>International</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="app_store">
                <h3>EXPERIENCE HOUSING APP ON MOBILE</h3>
              </div>
              <div className="row">
                <div className="col-lg-6 align-self-center">
                  <div className="main_apple mb-2">
                    <div className="apple_sec">
                      <i class="fa-brands fa-apple"></i>
                    </div>
                    <div className="apple_detail">
                      <h3>
                        <span>Downlodad on the</span>
                        <br></br>
                        app store
                      </h3>
                    </div>
                  </div>
                  <div className="main_apple">
                    <div className="apple_sec">
                      <i class="fa-brands fa-google-play"></i>
                    </div>
                    <div className="apple_detail">
                      <h3>
                        <span>GET IT ON</span>
                        <br></br>
                        google play
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="scaner">
                    <img src={scaner} alt="scaner.png"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Categorypage;
