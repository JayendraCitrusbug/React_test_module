import React, { useContext, useEffect } from 'react'
import "../templates/assets/css/swiper-bundle.min.css"
import "../templates/assets/css/common.css"
import "../templates/assets/css/dashboard.css"
import "../templates/assets/css/us_sales.css"
import "../templates/assets/css/custom.css"
import "../templates/assets/css/mini-event-calendar.min.css"
import "../templates/assets/css/Home.css"
import logo2 from '../templates/assets/images/logo2.svg'
import search from '../templates/assets/images/search.svg'
import chart from '../templates/assets/images/chart.png'
import green_caret from '../templates/assets/images/green_caret.svg'
import red_caret from '../templates/assets/images/red_caret.svg'
import profile from '../templates/assets/images/mini_profile.png'
import $ from 'jquery';
import axios from 'axios'


function Home() {

    // const id = localStorage.id
    // const email = localStorage.email
    // const first_name = localStorage.first_name
    // const last_name = localStorage.last_name
    // const access = localStorage.access
    // const refresh = localStorage.refresh

    // console.log(access);

    const handleClick = (e) => {
        console.log("*********");
        const name = (e.target.innerHTML).toLowerCase();

        const access = localStorage.access
        const token = "Bearer " + access

        axios({
            url: `http://43.204.196.131:9300/api/v1/subcategory/${name}/`,
            method: "GET",
            headers: {
                "Authorization": `${token}`,
            }

        })
            // console.log(res.data.data.first_name);
            .then((res) => {
                e.target.parentNode.parentNode.children[1].innerHTML = ""
                for (let i = 0; i < res.data.data.length; i++) {
                    console.log(res.data.data[i].sub_category_name);

                    var a = `<li><a href="us_sales.html">${res.data.data[i].sub_category_name}</a></li>`
                    var b = e.target.parentNode.parentNode.children[1]
                    b.innerHTML += a
                }
            })
            .catch((err) => {
                console.log("err :", err);
            })
    }

    return (
        <div className="cf_dashboard_main_wrapper">
            <div className="cf_dashboard_sidebar_wrapper">
                <div className="cf_dashboard_sidebar_inner">
                    <div className="cf_sidebar_logo_block">
                        <label className="sidebar_toggle"><span className="cf_icon cf_left"></span></label>
                        <a href="/home"><img src={logo2} alt="Cafetra" className="img-fluid" /></a>
                    </div>
                    <div className="cf_sidebar_search_block">
                        <div className="cf_sidebar_search_inner">
                            <span className="cf_icon cf_search"></span>
                            <input type="text" placeholder="Search here..." />
                        </div>
                    </div>
                    <div className="cf_sidebar_list_block">
                        <ul className="cf_sidebar_menu">
                            <li className="cf_submenu_block">
                                <a href="/home"><span className="cf_icon cf_home"></span><label>Home</label></a>
                            </li>
                            <li className="cf_submenu_block">
                                <a className="menu_scrl"><span className="cf_icon cf_weather"></span><label onClick={handleClick}>Weather</label><span
                                    className="cf_icon cf_down"></span></a>
                                <ul className="cf_sidebar_submenu">

                                </ul>
                            </li>
                            <li className="cf_submenu_block">
                                <a className="menu_scrl"><span className="cf_icon cf_crops"></span><label>Crops</label><span
                                    className="cf_icon cf_down"></span></a>
                                {/* <ul className="cf_sidebar_submenu">
                                    <li><a href="us_sales.html">US Sales</a></li>
                                    <li><a >US Inspections</a></li>
                                    <li><a >USDA Flash</a></li>
                                    <li><a >EU Weekly Trade Data</a></li>
                                    <li><a >Lineup Data</a></li>
                                    <li><a >Tender Data</a></li>
                                    <li><a >Custom Data</a></li>
                                </ul> */}
                            </li>

                            <li className="cf_submenu_block">
                                <a className="menu_scrl"><span className="cf_icon cf_sds"></span><label>S&D’s</label><span
                                    className="cf_icon cf_down"></span></a>
                                {/* <ul className="cf_sidebar_submenu">
                                    <li><a href="us_sales.html">US Sales</a></li>
                                    <li><a href="us_inspections.html">US Inspections</a></li>
                                    <li><a href="usdaflash.html">USDA Flash</a></li>
                                    <li><a href="eu_weekly_trade_data.html">EU Weekly Trade Data</a></li>
                                    <li><a href="line_up_data.html">Lineup Data</a></li>
                                    <li><a href="tender_data.html">Tender Data</a></li>
                                    <li><a href="custom_data.html">Custom Data</a></li>
                                </ul> */}
                            </li>
                            <li className="cf_submenu_block">
                                <a className="menu_scrl"><span className="cf_icon cf_trade"></span><label>Trade</label><span
                                    className="cf_icon cf_down"></span></a>
                                {/* <ul className="cf_sidebar_submenu">
                                    <li><a href="us_sales.html">US Sales</a></li>
                                    <li><a href="us_inspections.html">US Inspections</a></li>
                                    <li><a href="usdaflash.html">USDA Flash</a></li>
                                    <li><a href="eu_weekly_trade_data.html">EU Weekly Trade Data</a></li>
                                    <li><a href="line_up_data.html">Lineup Data</a></li>
                                    <li><a href="tender_data.html">Tender Data</a></li>
                                    <li><a href="custom_data.html">Custom Data</a></li>
                                </ul> */}
                            </li>
                            <li className="cf_submenu_block">
                                <a className="menu_scrl"><span className="cf_icon cf_policy"></span><label>Policies</label><span
                                    className="cf_icon cf_down"></span></a>
                                {/* <ul className="cf_sidebar_submenu">
                                    <li><a href="us_sales.html">US Sales</a></li>
                                    <li><a href="us_inspections.html">US Inspections</a></li>
                                </ul> */}
                            </li>
                            <li className="cf_submenu_block">
                                <a className="menu_scrl"><span className="cf_icon cf_process"></span><label>Processing Capacity</label><span
                                    className="cf_icon cf_down"></span></a>
                                {/* <ul className="cf_sidebar_submenu">
                                    <li><a href="us_sales.html">US Sales</a></li>
                                    <li><a href="us_inspections.html">US Inspections</a></li>
                                </ul> */}
                            </li>
                            <li className="cf_submenu_block">
                                <a className="menu_scrl"><span className="cf_icon cf_price"></span><label>Prices</label><span
                                    className="cf_icon cf_down"></span></a>
                                {/* <ul className="cf_sidebar_submenu">
                                    <li><a href="us_sales.html">US Sales</a></li>
                                    <li><a href="us_inspections.html">US Inspections</a></li>
                                    <li><a href="usdaflash.html">USDA Flash</a></li>
                                    <li><a href="eu_weekly_trade_data.html">EU Weekly Trade Data</a></li>
                                    <li><a href="line_up_data.html">Lineup Data</a></li>
                                    <li><a href="tender_data.html">Tender Data</a></li>
                                    <li><a href="custom_data.html">Custom Data</a></li>
                                </ul> */}
                            </li>
                            <li className="cf_submenu_block">
                                <a className="menu_scrl"><span className="cf_icon cf_price_analysis"></span><label>Price Analysis</label><span
                                    className="cf_icon cf_down"></span></a>
                                {/* <ul className="cf_sidebar_submenu">
                                    <li><a href="us_sales.html">US Sales</a></li>
                                    <li><a href="us_inspections.html">US Inspections</a></li>
                                    <li><a href="usdaflash.html">USDA Flash</a></li>
                                    <li><a href="eu_weekly_trade_data.html">EU Weekly Trade Data</a></li>
                                    <li><a href="line_up_data.html">Lineup Data</a></li>
                                    <li><a href="tender_data.html">Tender Data</a></li>
                                    <li><a href="custom_data.html">Custom Data</a></li>
                                </ul> */}
                            </li>
                            <li className="cf_submenu_block">
                                <a className="menu_scrl"><span className="cf_icon cf_sentiment"></span><label>Sentiment</label><span
                                    className="cf_icon cf_down"></span></a>
                                {/* <ul className="cf_sidebar_submenu">
                                    <li><a href="us_sales.html">US Sales</a></li>
                                    <li><a href="us_inspections.html">US Inspections</a></li>
                                </ul> */}
                            </li>
                            <li className="cf_submenu_block">
                                <a className="menu_scrl"><span className="cf_icon cf_picture"></span><label>The Big Picture</label><span
                                    className="cf_icon cf_down"></span></a>
                                {/* <ul className="cf_sidebar_submenu">
                                    <li><a href="us_sales.html">US Sales</a></li>
                                    <li><a href="us_inspections.html">US Inspections</a></li>
                                </ul> */}
                            </li>
                            <li className="cf_submenu_block">
                                <a className="menu_scrl"><span className="cf_icon cf_report"></span><label>Report Archieve</label><span
                                    className="cf_icon cf_down"></span></a>
                                {/* <ul className="cf_sidebar_submenu">
                                    <li><a href="us_sales.html">US Sales</a></li>
                                    <li><a href="us_inspections.html">US Inspections</a></li>
                                </ul> */}
                            </li>
                        </ul>
                    </div>
                    <div className="cf_info_list_block">
                        <div className="cf_sidebar_list_block">
                            <ul className="cf_sidebar_menu">
                                <li className="cf_submenu_block">
                                    <a className="menu_scrl"><span className="cf_icon cf_info"></span><label>Info</label><span
                                        className="cf_icon cf_down"></span></a>
                                    <ul className="cf_sidebar_submenu">
                                        <li><a href="info_ceras_analytics.html">Ceras Analytics</a></li>
                                        <li><a href="info_products.html">Products</a></li>
                                        <li><a href="info_pricing.html">Pricing</a></li>
                                        <li><a href="info_tutorials.html">Tutorials</a></li>
                                        <li><a href="info_api_documentation.html">API Documentation</a></li>
                                        <li><a href="info_faq.html">FAQ</a></li>
                                        <li><a href="term_of_use.html">Term of Use</a></li>
                                        <li><a href="info_contact.html">Contact</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cf_dashboard_middle_wrapper">
                <div className="cf_dashboard_header">
                    <div className="sidebar_toggle">
                        <span className="cf_icon cf_down"></span>
                    </div>
                    <div className="menu_toggle">
                        <span className="cf_icon cf_bar"></span>
                    </div>
                    <div className="cf_dashboard_header_breadcrumb">
                        <ul>
                            <li><a href="home.html" className="">Home</a></li>
                        </ul>
                    </div>
                    <div className="cf_dashboard_header_profile">
                        <ul>
                            <li>
                                <h5>{localStorage.email}</h5>
                            </li>
                            <li>
                                <div className="cf_header_profile_toggle">
                                    <a ><img src={profile} alt="profile" /></a>
                                    <span className="cf_icon cf_down_black"></span>
                                    <ul>
                                        <li>
                                            <a ><span className="cf_icon cf_edit"></span> My Profile</a>
                                        </li>
                                        <li>
                                            <a ><span className="cf_icon cf_bookmark"></span>My Preferences</a>
                                        </li>
                                        <li>
                                            <a ><span className="cf_icon cf_setting"></span>Subscriptions</a>
                                        </li>
                                        <li>
                                            <a ><span className="cf_icon cf_phone"></span>Contact Account Manager</a>
                                        </li>
                                        <li>
                                            <a data-bs-toggle="modal" data-bs-target="#cf_logout"><span
                                                className="cf_icon cf_logout"></span>
                                                Logout</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="cf_dashboard_middle_inner">
                    <div className="cf_headlines_wrapper">
                        <div className="row">
                            <div className="col-xxl-9 col-xl-12 col-lg-7 col-md-12">
                                <div className="cf_block headline_block">
                                    <div className="headline_block_inner">
                                        <div className="headline_header">
                                            <div className="main_title">
                                                <h2>Headlines</h2>
                                            </div>
                                            <div className="search_bar">
                                                <input type="text" placeholder="Search" />
                                                <img src={search} className="search_icon" alt="Search" />
                                            </div>
                                        </div>
                                        <div className="sub_title">
                                            <h3>Today - June 15th 2022</h3>
                                        </div>
                                        <ul className="headline_lists">
                                            <li>
                                                <span className="time">15.09</span>
                                                <p>Despite sharp drop in MATIF wheat futures spec has NOT reduced their longs</p>
                                            </li>
                                            <li>
                                                <span className="time">12.48</span>
                                                <p>Ceras Analytics raised the EU28 rapeseed crop by 0,4Mt to 19,8Mt. Go to S&D....</p>
                                            </li>
                                            <li>
                                                <span className="time">09.55</span>
                                                <p className="underline">Daily News</p>
                                            </li>
                                            <li className="red">
                                                <span className="time">15.09</span>
                                                <p>Despite sharp drop in MATIF wheat futures spec has NOT reduced their longs</p>
                                            </li>
                                            <li>
                                                <span className="time">12.48</span>
                                                <p>Ceras Analytics raised the EU28 rapeseed crop by 0,4Mt to 19,8Mt. Go to S&D....</p>
                                            </li>
                                            <li>
                                                <span className="time">09.55</span>
                                                <p className="underline">Daily News</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="headline_block_inner">
                                        <div className="sub_title">
                                            <h3>Yesterday - June 9th 2022</h3>
                                        </div>
                                        <ul className="headline_lists">
                                            <li>
                                                <span className="time">15.09</span>
                                                <p>Despite sharp drop in MATIF wheat futures spec has NOT reduced their longs</p>
                                            </li>
                                            <li>
                                                <span className="time">12.48</span>
                                                <p>Ceras Analytics raised the EU28 rapeseed crop by 0,4Mt to 19,8Mt. Go to S&D....</p>
                                            </li>
                                            <li>
                                                <span className="time">09.55</span>
                                                <p className="underline">Daily News</p>
                                            </li>
                                            <li className="red">
                                                <span className="time">15.09</span>
                                                <p>Despite sharp drop in MATIF wheat futures spec has NOT reduced their longs</p>
                                            </li>
                                            <li>
                                                <span className="time">12.48</span>
                                                <p>Ceras Analytics raised the EU28 rapeseed crop by 0,4Mt to 19,8Mt. Go to S&D....</p>
                                            </li>
                                            <li>
                                                <span className="time">09.55</span>
                                                <p className="underline">Daily News</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6 col-lg-12 col-md-12">
                                        <div className="cf_block chart_block mb-0">
                                            <div className="main_title">
                                                <h2>Chart Of The Day</h2>
                                                <p>
                                                    In this sentence you can read why this chart is important for today
                                                </p>
                                            </div>
                                            <div className="sub_title mb-0">
                                                <h3>Russian wheat discount to EU</h3>
                                            </div>
                                            <div className="sf_chart">
                                                <img src={chart} className="img-fluid" alt="chart" />
                                            </div>
                                            <ul className="chart_btns">
                                                <li><a ><span className="material-symbols-outlined">chevron_left</span> Previous</a></li>
                                                <li><a >Next <span className="material-symbols-outlined"> chevron_right </span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-12 col-md-12">
                                        <div className="cf_block price_overview_block mt_16">
                                            <div className="main_title">
                                                <h2>Price Overview</h2>
                                                <p>
                                                    Last Updated: 15/06/2022 16:07
                                                </p>
                                            </div>
                                            <ul className="price_ov_list">
                                                <li>
                                                    <p>MATIF DEC 22</p>
                                                    <div className="price green">
                                                        +4.50 <img src={green_caret} alt="caret" />
                                                    </div>
                                                </li>
                                                <li>
                                                    <p>MATIF RAPESEED</p>
                                                    <div className="price_wrapper">
                                                        <span>CBOT</span>
                                                        <div className="price red">
                                                            -4.00 <img src={red_caret} alt="caret" />
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <p>CORN DEC 22</p>
                                                    <div className="price green">
                                                        +1.00 <img src={green_caret} alt="caret" />
                                                    </div>
                                                </li>
                                                <li>
                                                    <p>MATIF DEC 22</p>
                                                    <div className="price green">
                                                        +4.50 <img src={green_caret} alt="caret" />
                                                    </div>
                                                </li>
                                                <li>
                                                    <p>MATIF RAPESEED</p>
                                                    <div className="price_wrapper">
                                                        <span>CBOT</span>
                                                        <div className="price red">
                                                            -4.00 <img src={red_caret} alt="caret" />
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <p>CORN DEC 22</p>
                                                    <div className="price green">
                                                        +1.00 <img src={green_caret} alt="caret" />
                                                    </div>
                                                </li>
                                                <li>
                                                    <p>MATIF DEC 22</p>
                                                    <div className="price green">
                                                        +4.50 <img src={green_caret} alt="caret" />
                                                    </div>
                                                </li>
                                                <li>
                                                    <p>MATIF RAPESEED</p>
                                                    <div className="price_wrapper">
                                                        <span>CBOT</span>
                                                        <div className="price red">
                                                            -4.00 <img src={red_caret} alt="caret" />
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <p>CORN DEC 22</p>
                                                    <div className="price green">
                                                        +1.00 <img src={red_caret} alt="caret" />
                                                    </div>
                                                </li>
                                                <li>
                                                    <p>EURUSD</p>
                                                    <div className="price red">
                                                        -0.01 <img src={red_caret} alt="caret" />
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-12 col-lg-5 col-md-12">
                                <div className="cf_block calendar_wrapper">
                                    <div className="main_title">
                                        <h2>Calendar</h2>
                                    </div>
                                    <div className="calendar">
                                        <div id="calendar"></div>
                                    </div>
                                    <div className="calendar_block_wrapper">
                                        <div className="calendar_block">
                                            <div className="sub_title">
                                                <h3>Today - June 15th 2022</h3>
                                            </div>
                                            <div className="calendar_list">
                                                <ul>
                                                    <li className="green_dot">
                                                        <h6>SG Grains Report</h6>
                                                        <p>10:30</p>
                                                    </li>
                                                    <li className="green_dot">
                                                        <h6>FAS Weekly Exports</h6>
                                                        <p>14:00</p>
                                                    </li>
                                                    <li className="green_dot">
                                                        <h6>ECB Rate Decesion</h6>
                                                        <p>16:45</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="calendar_block cl_red">
                                            <div className="sub_title">
                                                <h3>Tomorrow - June 16th 2022</h3>
                                            </div>
                                            <div className="calendar_list">
                                                <ul>
                                                    <li className="red_dot">
                                                        <h6>MPOB Report</h6>
                                                        <p>13:00</p>
                                                    </li>
                                                    <li className="red_dot">
                                                        <h6>USDA Wasde June Report</h6>
                                                        <p>19:30</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="calendar_block">
                                            <div className="sub_title">
                                                <h3>Tuesday - June 20th 2022</h3>
                                            </div>
                                            <div className="calendar_list">
                                                <ul>
                                                    <li className="green_dot">
                                                        <h6>NASS Crop Progress</h6>
                                                        <p>13:40</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="calendar_block">
                                            <div className="sub_title">
                                                <h3>Today - June 22th 2022</h3>
                                            </div>
                                            <div className="calendar_list">
                                                <ul>
                                                    <li className="green_dot">
                                                        <h6>SG Grains Report</h6>
                                                        <p>10:30</p>
                                                    </li>
                                                    <li className="green_dot">
                                                        <h6>FAS Weekly Exports</h6>
                                                        <p>14:00</p>
                                                    </li>
                                                    <li className="green_dot">
                                                        <h6>ECB Rate Decesion</h6>
                                                        <p>16:45</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


// $(document).ready(function () {
//     $(".cf_eye_green").on("click", function () {
//         $(this).toggleClass("cf_eye_green_close");
//         var fieldType = $(this).siblings("input[type='password']").attr("type");
//         if (fieldType == "password") {
//             $(this).siblings("input[type='password']").attr("type", "text");
//         } else {
//             $(this).siblings("input[type='text']").attr("type", "password");
//         }
//     });

//     $(".cf_submenu_block > a").on("click", function (e) {
//         e.stopPropagation();
//         if ($(this).siblings(".cf_sidebar_submenu").hasClass("active")) {
//             $(this).removeClass("active");
//             $(this).parents(".cf_submenu_block").removeClass("active");
//             $(this).siblings(".cf_sidebar_submenu").removeClass("active");
//             $(this).siblings(".cf_sidebar_submenu").slideUp(0);
//         } else {
//             $(".cf_submenu_block > a").removeClass("active");
//             $(".cf_submenu_block").removeClass("active");
//             $(this).addClass("active");
//             $(this).parents(".cf_submenu_block").addClass("active");
//             $(".cf_sidebar_submenu.active").removeClass("active");
//             $(".cf_sidebar_submenu").slideUp(0);
//             $(this).siblings(".cf_sidebar_submenu").addClass("active");
//             $(this).siblings(".cf_sidebar_submenu.active").slideDown(0);
//         }
//     });
//     //Info
//     $(".trial_block .info").on("click", function (e) {
//         e.stopPropagation();
//         if ($(this).children(".info_content").hasClass("active")) {
//             $(this).children(".info_content").removeClass("active");
//         } else {
//             $(".info_content").removeClass("active");
//             $(this).children(".info_content").toggleClass("active");
//         }
//     });
//     $(document).on("click", function (e) {
//         if ($(e.target).is(".info_content") === false) {
//             $(".info_content").removeClass("active");
//         }
//     });
//     if ($(window).width() < 992) {
//         $(".cf_subnav_list > a").on("click", function (e) {
//             e.stopPropagation();
//             if ($(this).siblings(".cf_subnav").hasClass("active")) {
//                 $(this).removeClass("active");
//                 $(this).parents(".cf_subnav_list").removeClass("active");
//                 $(this).siblings(".cf_subnav").removeClass("active");
//                 $(this).siblings(".cf_subnav").slideUp(0);
//             } else {
//                 $(".cf_subnav_list > a").removeClass("active");
//                 $(".cf_subnav_list").removeClass("active");
//                 $(this).addClass("active");
//                 $(this).parents(".cf_subnav_list").addClass("active");
//                 $(".cf_subnav.active").removeClass("active");
//                 $(".cf_subnav").slideUp(0);
//                 $(this).siblings(".cf_subnav").addClass("active");
//                 $(this).siblings(".cf_subnav.active").slideDown(0);
//             }
//         });
//         $(".cf_landing_logo .cf_bar").on("click", function (e) {
//             e.stopPropagation();
//             $(".cf_landing_nav").toggleClass("active");
//         });
//         $(".cf_landing_nav .cf_close").on("click", function (e) {
//             e.stopPropagation();
//             $(".cf_landing_nav").removeClass("active");
//         });
//         $(".cf_landing_nav").on("click", function (e) {
//             e.stopPropagation();
//         });
//     }

//     $(".cf_form_field")
//         .focus(function () {
//             $(this).parents(".cf_edit_profile_form_block").addClass("cf_inp_focus");
//         })
//         .blur(function () {
//             $(this)
//                 .parents(".cf_edit_profile_form_block")
//                 .removeClass("cf_inp_focus");
//         });

//     $(".cf_edit_profile_form_block .cf_form_field").on("click", function (e) {
//         if (
//             $(this).parents(".cf_edit_profile_form_block").hasClass("field_active")
//         ) {
//             e.stopPropagation();
//             $(this).addClass("field_active");
//         }
//         $(".cf_dashboard_header_nav").removeClass("active");
//         // $(".cf_dashboard_header").addClass("sidebar_closed");
//         // $(".cf_dashboard_main_wrapper").addClass("sidebar_closed_main");
//         e.stopPropagation();
//         $(".cf_edit_profile_form_block").removeClass("field_active");
//         $(this).parents(".cf_edit_profile_form_block").addClass("field_active");
//     });
//     $(".sidebar_toggle").on("click", function (e) {
//         e.stopPropagation();
//         $(".cf_dashboard_header_nav").removeClass("active");
//         $(".cf_dashboard_header").toggleClass("sidebar_closed");
//         $(".cf_dashboard_main_wrapper").toggleClass("sidebar_closed_main");
//     });
//     $(".cf_dashboard_header_nav").on("click", function (e) {
//         e.stopPropagation();
//     });
//     $(".menu_toggle").on("click", function (e) {
//         e.stopPropagation();
//     });
//     $(".cf_dashboard_sidebar_wrapper").on("click", function (e) {
//         e.stopPropagation();
//     });
//     $(".cf_form_block .cf_icon").on("click", function (e) {
//         e.stopPropagation();
//         $(".cf_dashboard_header_nav").removeClass("active");
//         $(".cf_dashboard_header").addClass("sidebar_closed");
//         $(".cf_dashboard_main_wrapper").addClass("sidebar_closed_main");
//     });

//     var w_wid = $(window).width();
//     if (w_wid < 992) {
//         $(".cf_dashboard_main_wrapper").addClass("sidebar_closed_main");
//         $(".cf_dashboard_header").addClass("sidebar_closed");

//         $(".menu_toggle").on("click", function () {
//             $(".cf_dashboard_header_nav").toggleClass("active");
//         });

//         $(document).on("click", function () {
//             $(".cf_dashboard_header_nav").removeClass("active");
//             $(".cf_dashboard_header").addClass("sidebar_closed");
//             $(".cf_dashboard_main_wrapper").addClass("sidebar_closed_main");
//         });

//         $(".cf_edit_profile_form_block .cf_form_field").on("click", function (e) {
//             $(".cf_dashboard_header").addClass("sidebar_closed");
//             $(".cf_dashboard_main_wrapper").addClass("sidebar_closed_main");
//         });
//     }

//     var height = $(window).height();
//     var width = $(window).width();
//     if (width <= 950) {
//         if (width > height) {
//             $(".cf_dashboard_main_wrapper").addClass("sidebar_closed_main");
//             $(".cf_dashboard_header").addClass("sidebar_closed");
//             $(".menu_toggle").on("click", function () {
//                 $(".cf_dashboard_header_nav").toggleClass("active");
//             });
//         }
//     }

//     // var swiper = new Swiper(".cf_landing_banner_inner .mySwiper", {
//     //     speed: 1000,
//     //     loop: true,
//     //     autoplay: {
//     //         delay: 5000,
//     //         disableOnInteraction: false,
//     //     },
//     //     pagination: {
//     //         el: ".swiper-pagination",
//     //         clickable: true,
//     //     },
//     // });

//     // var swiper = new Swiper(".cf_testimonial_slider .mySwiper", {
//     //     spaceBetween: 30,
//     //     speed: 1000,
//     //     loop: true,
//     //     autoplay: {
//     //         delay: 2500,
//     //         disableOnInteraction: false,
//     //     },
//     //     pagination: {
//     //         el: ".swiper-pagination",
//     //         clickable: true,
//     //     },
//     // });

//     $(".cf_overview_listWrapper ul li a").on("click", function () {
//         $(".cf_overview_listWrapper ul li").removeClass("active");
//         $(this).parents("li").addClass("active");
//     });
//     $(".cf_overview_listWrapper ul li a").click(function () {
//         $("html, body").animate(
//             {
//                 scrollTop: $("#" + $(this).attr("data-jump") + "").offset().top - 150,
//             },
//             0
//         );
//     });
// });

// $(document).on("click", function () {
//     $(".cf_dashboard_header_nav").removeClass("active");
//     $(".cf_edit_profile_form_block").removeClass("field_active");
//     $(".cf_landing_nav").removeClass("active");
// });
// $(window).resize(function () { });

// /* R js */

// function check(elem) {
//     if (elem.value == "Other") {
//         document.getElementById("your_role").style.display = "block";
//     } else {
//         document.getElementById("your_role").style.display = "none";
//     }
// }
// function check1(elem) {
//     if (elem.value == "Other") {
//         document.getElementById("company_type").style.display = "block";
//     } else {
//         document.getElementById("company_type").style.display = "none";
//     }
// }
// $(".menu_scrl").click(function () {
//     var scrl = $(this);
//     $(".cf_dashboard_sidebar_wrapper").animate(
//         { scrollTop: $(scrl).offset().top },
//         1500
//     );
// });

// $(window).on("scroll", function () {
//     var scroll = $(window).scrollTop();
//     if (scroll >= 100) {
//         $(".cf_landing_header_wrapper").addClass("active");
//     } else {
//         $(".cf_landing_header_wrapper").removeClass("active");
//     }

//     if ($(this).scrollTop() > 10) {
//         $(".header_wrapper").addClass("sticky");
//     } else {
//         $(".header_wrapper").removeClass("sticky");
//     }

//     var topScrollMenu = $(window).scrollTop();
//     if (topScrollMenu >= 100) {
//         $(".cf_product_overview_mainWrapper > .cf_scroll_section").each(function (
//             i
//         ) {
//             if ($(this).position().top <= topScrollMenu + 130) {
//                 if ($(this).attr("data-scroll")) {
//                     // $(".cf_overview_listWrapper ul li.active").removeClass("active");
//                     // $('.cf_overview_listWrapper ul li a[data-jump="' + $(this).attr("data-scroll") + '"').addClass("active");
//                     // $('.cf_overview_listWrapper ul li a[data-jump="' + $(this).attr("data-scroll") + '"').focus();
//                 }
//             }
//         });
//     } else {
//         // $(".cf_overview_listWrapper ul li:first").addClass("active");
//     }
// });

export default Home