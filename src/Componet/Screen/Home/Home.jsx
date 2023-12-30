import React from "react";
import logofranchise from "../../../assest/logo-franchise.png";
import menu from "../../../assest/menu.png";
import slider1 from "../../../assest/image 1.png";
import slider2 from "../../../assest/image 2.png";
import slider3 from "../../../assest/image 3.png";
import logo1 from "../../../assest/food-logo-1.jpg";
import image5 from "../../../assest/image 5.png";
import icon1 from "../../../assest/deal1.png";
import icon2 from "../../../assest/deal2.png";
import icon3 from "../../../assest/deal3.png";
import icon4 from "../../../assest/deal4.png";
import trending1 from "../../../assest/deal5.png";
import trending2 from "../../../assest/deal6.png";
import trending3 from "../../../assest/deal7.png";
import articals1 from "../../../assest/articals1.png";
import articals2 from "../../../assest/articals2.png";
import articals3 from "../../../assest/articals3.png";
import scaner from "../../../assest/scaner.png";

import "../Home/Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const Home = () => {
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
      <Carousel showThumbs={false}>
        <div>
          <img src={slider1} />
        </div>
        <div>
          <img src={slider2} />
        </div>
        <div>
          <img src={slider3} />
        </div>
      </Carousel>
      <div className="section-1 py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10">
              <div className="section-main">
                <h2>Category on Franchisewale.in</h2>
                <p>
                  A franchise is a business whereby the owner licenses its
                  operations—along with its products, branding, and knowledge in
                  exchange for a franchise fee.
                </p>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="button_class">
                <a href="##" className="button">
                  All Categories
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="food_section">
        <div className="container">
          <Carousel>
            <div className="row">
              <div className="col-lg-4">
                <div className="card_section">
                  <div className="card_logo">
                    <a href="##" classname="logo-1">
                      <img
                        src={logo1}
                        alt="food-logo-1.jpg"
                        className="logoo"
                      ></img>
                    </a>
                  </div>

                  <h2>food</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam consequuntur, commodi pariatur placeat nesciunt rem ex
                    quas eum tenetur aut?
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card_section">
                  <div className="card_logo">
                    <a href="##" classname="logo-1">
                      <img
                        src={logo1}
                        alt="food-logo-1.jpg"
                        className="logoo"
                      ></img>
                    </a>
                  </div>

                  <h2>food</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam consequuntur, commodi pariatur placeat nesciunt rem ex
                    quas eum tenetur aut?
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card_section">
                  <div className="card_logo">
                    <a href="##" classname="logo-1">
                      <img
                        src={logo1}
                        alt="food-logo-1.jpg"
                        className="logoo"
                      ></img>
                    </a>
                  </div>

                  <h2>food</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam consequuntur, commodi pariatur placeat nesciunt rem ex
                    quas eum tenetur aut?
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="card_section">
                  <div className="card_logo">
                    <a href="##" classname="logo-1">
                      <img
                        src={logo1}
                        alt="food-logo-1.jpg"
                        className="logoo"
                      ></img>
                    </a>
                  </div>

                  <h2>food</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam consequuntur, commodi pariatur placeat nesciunt rem ex
                    quas eum tenetur aut?
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card_section">
                  <div className="card_logo">
                    <a href="##" classname="logo-1">
                      <img
                        src={logo1}
                        alt="food-logo-1.jpg"
                        className="logoo"
                      ></img>
                    </a>
                  </div>

                  <h2>food</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam consequuntur, commodi pariatur placeat nesciunt rem ex
                    quas eum tenetur aut?
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card_section">
                  <div className="card_logo">
                    <a href="##" classname="logo-1">
                      <img
                        src={logo1}
                        alt="food-logo-1.jpg"
                        className="logoo"
                      ></img>
                    </a>
                  </div>

                  <h2>food</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam consequuntur, commodi pariatur placeat nesciunt rem ex
                    quas eum tenetur aut?
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="card_section">
                  <div className="card_logo">
                    <a href="##" classname="logo-1">
                      <img
                        src={logo1}
                        alt="food-logo-1.jpg"
                        className="logoo"
                      ></img>
                    </a>
                  </div>

                  <h2>food</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam consequuntur, commodi pariatur placeat nesciunt rem ex
                    quas eum tenetur aut?
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card_section">
                  <div className="card_logo">
                    <a href="##" classname="logo-1">
                      <img
                        src={logo1}
                        alt="food-logo-1.jpg"
                        className="logoo"
                      ></img>
                    </a>
                  </div>

                  <h2>food</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam consequuntur, commodi pariatur placeat nesciunt rem ex
                    quas eum tenetur aut?
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card_section">
                  <div className="card_logo">
                    <a href="##" classname="logo-1">
                      <img
                        src={logo1}
                        alt="food-logo-1.jpg"
                        className="logoo"
                      ></img>
                    </a>
                  </div>

                  <h2>food</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam consequuntur, commodi pariatur placeat nesciunt rem ex
                    quas eum tenetur aut?
                  </p>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </section>
      <section className="poll py-5">
        <div className="container">
          <div className="row py-5">
            <div className="col-lg-6 align-self-center">
              <div className="poll-sec">
                <h2>Monthly Poll</h2>
                <h1>
                  How did you find your <br></br>
                  franchise ?{" "}
                </h1>
                <ul className="li_class">
                  <li>Through an agent</li>
                  <li>Through a friend or relative</li>
                  <li>
                    Through an advertisement <br></br>(google / insta /
                    facebook)
                  </li>
                  <li>Through online search</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="Monthly_img">
                <img src={image5} alt="image 5.png"></img>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="deals py-5">
        <div className="container">
          <h2 className="head">Exclusive Deals</h2>
        </div>
        <Carousel>
          <div className="row py-5">
            <div className="col-lg-3">
              <div className="deal_card">
                <div className="deal_icon">
                  <a href="##" className="icon_1">
                    <img src={icon1} alt="deal1.png" className="icon" />
                  </a>
                </div>
                <h3>MBA chaiwala</h3>
                <p>
                  MBA Chaiwala's overexpansion strategy involved the rapid
                  opening of numerous stores within a condensed timeframe.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="deal_card_2">
                <div className="deal_icon">
                  <a href="##" className="icon_1">
                    <img src={icon2} alt="deal2.png" className="icon" />
                  </a>
                </div>
                <h3>MBA chaiwala</h3>
                <p>
                  MBA Chaiwala's overexpansion strategy involved the rapid
                  opening of numerous stores within a condensed timeframe.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="deal_card_3">
                <div className="deal_icon">
                  <a href="##" className="icon_1">
                    <img src={icon3} alt="deal3.png" className="icon" />
                  </a>
                </div>
                <h3>MBA chaiwala</h3>
                <p>
                  MBA Chaiwala's overexpansion strategy involved the rapid
                  opening of numerous stores within a condensed timeframe.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="deal_card_4">
                <div className="deal_icon">
                  <a href="##" className="icon_1">
                    <img src={icon4} alt="deal4.png" className="icon" />
                  </a>
                </div>
                <h3>MBA chaiwala</h3>
                <p>
                  MBA Chaiwala's overexpansion strategy involved the rapid
                  opening of numerous stores within a condensed timeframe.
                </p>
              </div>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-lg-3">
              <div className="deal_card">
                <div className="deal_icon">
                  <a href="##" className="icon_1">
                    <img src={icon1} alt="deal1.png" className="icon" />
                  </a>
                </div>
                <h3>MBA chaiwala</h3>
                <p>
                  MBA Chaiwala's overexpansion strategy involved the rapid
                  opening of numerous stores within a condensed timeframe.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="deal_card_2">
                <div className="deal_icon">
                  <a href="##" className="icon_1">
                    <img src={icon2} alt="deal2.png" className="icon" />
                  </a>
                </div>
                <h3>MBA chaiwala</h3>
                <p>
                  MBA Chaiwala's overexpansion strategy involved the rapid
                  opening of numerous stores within a condensed timeframe.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="deal_card_3">
                <div className="deal_icon">
                  <a href="##" className="icon_1">
                    <img src={icon3} alt="deal3.png" className="icon" />
                  </a>
                </div>
                <h3>MBA chaiwala</h3>
                <p>
                  MBA Chaiwala's overexpansion strategy involved the rapid
                  opening of numerous stores within a condensed timeframe.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="deal_card_4">
                <div className="deal_icon">
                  <a href="##" className="icon_1">
                    <img src={icon4} alt="deal4.png" className="icon" />
                  </a>
                </div>
                <h3>MBA chaiwala</h3>
                <p>
                  MBA Chaiwala's overexpansion strategy involved the rapid
                  opening of numerous stores within a condensed timeframe.
                </p>
              </div>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-lg-3">
              <div className="deal_card">
                <div className="deal_icon">
                  <a href="##" className="icon_1">
                    <img src={icon1} alt="deal1.png" className="icon" />
                  </a>
                </div>
                <h3>MBA chaiwala</h3>
                <p>
                  MBA Chaiwala's overexpansion strategy involved the rapid
                  opening of numerous stores within a condensed timeframe.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="deal_card_2">
                <div className="deal_icon">
                  <a href="##" className="icon_1">
                    <img src={icon2} alt="deal2.png" className="icon" />
                  </a>
                </div>
                <h3>MBA chaiwala</h3>
                <p>
                  MBA Chaiwala's overexpansion strategy involved the rapid
                  opening of numerous stores within a condensed timeframe.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="deal_card_3">
                <div className="deal_icon">
                  <a href="##" className="icon_1">
                    <img src={icon3} alt="deal3.png" className="icon" />
                  </a>
                </div>
                <h3>MBA chaiwala</h3>
                <p>
                  MBA Chaiwala's overexpansion strategy involved the rapid
                  opening of numerous stores within a condensed timeframe.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="deal_card_4">
                <div className="deal_icon">
                  <a href="##" className="icon_1">
                    <img src={icon4} alt="deal4.png" className="icon" />
                  </a>
                </div>
                <h3>MBA chaiwala</h3>
                <p>
                  MBA Chaiwala's overexpansion strategy involved the rapid
                  opening of numerous stores within a condensed timeframe.
                </p>
              </div>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-lg-3">
              <div className="deal_card">
                <div className="deal_icon">
                  <a href="##" className="icon_1">
                    <img src={icon1} alt="deal1.png" className="icon" />
                  </a>
                </div>
                <h3>MBA chaiwala</h3>
                <p>
                  MBA Chaiwala's overexpansion strategy involved the rapid
                  opening of numerous stores within a condensed timeframe.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="deal_card_2">
                <div className="deal_icon">
                  <a href="##" className="icon_1">
                    <img src={icon2} alt="deal2.png" className="icon" />
                  </a>
                </div>
                <h3>MBA chaiwala</h3>
                <p>
                  MBA Chaiwala's overexpansion strategy involved the rapid
                  opening of numerous stores within a condensed timeframe.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="deal_card_3">
                <div className="deal_icon">
                  <a href="##" className="icon_1">
                    <img src={icon3} alt="deal3.png" className="icon" />
                  </a>
                </div>
                <h3>MBA chaiwala</h3>
                <p>
                  MBA Chaiwala's overexpansion strategy involved the rapid
                  opening of numerous stores within a condensed timeframe.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="deal_card_4">
                <div className="deal_icon">
                  <a href="##" className="icon_1">
                    <img src={icon4} alt="deal4.png" className="icon" />
                  </a>
                </div>
                <h3>MBA chaiwala</h3>
                <p>
                  MBA Chaiwala's overexpansion strategy involved the rapid
                  opening of numerous stores within a condensed timeframe.
                </p>
              </div>
            </div>
          </div>
        </Carousel>
      </section>

      <section className="franchies py-5">
        <div className="container">
          <h2>why trust franchisewala ?</h2>
          <div className="trust_f py-5">
            <ul className="f_t ms-5">
              <li>1. Determine if franchising is right for your business.</li>
              <li>2. Issue your franchise disclosure document.</li>
              <li>3. Prepare your operations manual.</li>
              <li>4. Register your trademarks.</li>
              <li>5. Establish your franchise company.</li>
              <li>6. Register and file your FDD.</li>
              <li>7. Create your franchise sales strategy and budget.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="trending section">
        <div className="container">
          <h2 className="trending_title">Buy High trending franchise ?</h2>
          <div className="row py-5">
            <div className="col-lg-4">
              <div className="trending_card">
                <div className="trending_icon">
                  <img src={trending1} alt="deal5.png" className="trending" />
                </div>
                <div className="trending_details ">
                  <h2>High Revenue</h2>
                  <p>
                    {" "}
                    Franchise Industry Overview & Forecast The franchise
                    industry is a rapidly growing sector in the United States,
                    with an increasing number of people choosing franchising as
                    a way to start their own business.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="trending_card">
                <div className="trending_icon">
                  <img src={trending2} alt="deal6.png" className="trending" />
                </div>
                <div className="trending_details ">
                  <h2>Regular Income</h2>
                  <p>
                    {" "}
                    regular income that is received at fixed or uniform
                    intervals.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="trending_card">
                <div className="trending_icon">
                  <img src={trending3} alt="deal7.png" className="trending" />
                </div>
                <div className="trending_details ">
                  <h2>Ideal for investment</h2>
                  <p>
                    {" "}
                    the mix of investments, from most aggressive to safest, that
                    will earn the total return over time that you need.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="button_class py-3">
            <a href="##" className="btn_callback">
              Callback to cusomer care
            </a>
          </div>
        </div>
      </section>

      <section className="news py-5">
        <div className="container">
          <h2>Top Articles & News</h2>
          <p>
            The latest franchise news is available here,<br></br>
            updated every business day Click to read the<br></br>
            franchise news articles and franchise information.
          </p>
        </div>
        <div className="container-fluid">
          <Carousel>
            <div className="row">
              <div className="col-lg-4">
                <div className="articles_box">
                  <div className="articles_img">
                    <img src={articals1} alt="articals1.png" />
                  </div>
                  <div className="articles_details py-5">
                    <h2>Apple Store Franchise </h2>
                    <p>
                      Apple's First Store In India Opens In Mumbai Apple opened
                      its first official store in Mumbai, India. Located at the
                      Jio World Drive mall in the Bandra Kurla Complex area, the
                      store is the first of the two outlets Apple to open in
                      India.
                    </p>
                    <div className="row py-5">
                      <div className="col-lg-6 ">
                        <h3 className="date">20 Jan 23</h3>
                      </div>
                      <div className="col-lg-6 ">
                        <div className="million_section gap-3">
                          <i className="fa-solid fa-eye"></i>
                          <h3 className="million">50M views</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="articles_box">
                  <div className="articles_img">
                    <img src={articals2} alt="articals2.png" />
                  </div>
                  <div className="articles_details py-5">
                    <h2>McDonald’s Franchise Cost in India</h2>
                    <p>
                      Submit your application.Receive approval & opening your
                      McDonald's franchise.
                    </p>
                    <div className="row py-5">
                      <div className="col-lg-6 ">
                        <h3 className="date">20 Jan 23</h3>
                      </div>
                      <div className="col-lg-6 ">
                        <div className="million_section gap-3">
                          <i className="fa-solid fa-eye"></i>
                          <h3 className="million">50M views</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="articles_box">
                  <div className="articles_img">
                    <img src={articals3} alt="articals3.png" />
                  </div>
                  <div className="articles_details py-5">
                    <h2>Puma Franchise</h2>
                    <p>
                      Know all details of Puma Franchise, Apply Puma Franchise
                      Online, Check Brand Eligibility, Puma Outlet Cost of
                      Setup.
                    </p>
                    <div className="row py-5">
                      <div className="col-lg-6 ">
                        <h3 className="date">20 Jan 23</h3>
                      </div>
                      <div className="col-lg-6 ">
                        <div className="million_section gap-3">
                          <i className="fa-solid fa-eye"></i>
                          <h3 className="million">50M views</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="articles_box">
                  <div className="articles_img">
                    <img src={articals1} alt="articals1.png" />
                  </div>
                  <div className="articles_details py-5">
                    <h2>Apple Store Franchise </h2>
                    <p>
                      Apple's First Store In India Opens In Mumbai Apple opened
                      its first official store in Mumbai, India. Located at the
                      Jio World Drive mall in the Bandra Kurla Complex area, the
                      store is the first of the two outlets Apple to open in
                      India.
                    </p>
                    <div className="row py-5">
                      <div className="col-lg-6 ">
                        <h3 className="date">20 Jan 23</h3>
                      </div>
                      <div className="col-lg-6 ">
                        <div className="million_section gap-3">
                          <i className="fa-solid fa-eye"></i>
                          <h3 className="million">50M views</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="articles_box">
                  <div className="articles_img">
                    <img src={articals2} alt="articals2.png" />
                  </div>
                  <div className="articles_details py-5">
                    <h2>Apple Store Franchise </h2>
                    <p>
                      Apple's First Store In India Opens In Mumbai Apple opened
                      its first official store in Mumbai, India. Located at the
                      Jio World Drive mall in the Bandra Kurla Complex area, the
                      store is the first of the two outlets Apple to open in
                      India.
                    </p>
                    <div className="row py-5">
                      <div className="col-lg-6 ">
                        <h3 className="date">20 Jan 23</h3>
                      </div>
                      <div className="col-lg-6 ">
                        <div className="million_section gap-3">
                          <i className="fa-solid fa-eye"></i>
                          <h3 className="million">50M views</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="articles_box">
                  <div className="articles_img">
                    <img src={articals3} alt="articals3.png" />
                  </div>
                  <div className="articles_details py-5">
                    <h2>Apple Store Franchise </h2>
                    <p>
                      Apple's First Store In India Opens In Mumbai Apple opened
                      its first official store in Mumbai, India. Located at the
                      Jio World Drive mall in the Bandra Kurla Complex area, the
                      store is the first of the two outlets Apple to open in
                      India.
                    </p>
                    <div className="row py-5">
                      <div className="col-lg-6 ">
                        <h3 className="date">20 Jan 23</h3>
                      </div>
                      <div className="col-lg-6 ">
                        <div className="million_section gap-3">
                          <i className="fa-solid fa-eye"></i>
                          <h3 className="million">50M views</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
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
export default Home;
