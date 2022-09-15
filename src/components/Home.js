import React, { useContext } from 'react'
import "../templates/assets/css/swiper-bundle.min.css"
import "../templates/assets/css/common.css"
import "../templates/assets/css/dashboard.css"
import "../templates/assets/css/us_sales.css"
import "../templates/assets/css/custom.css"
import "../templates/assets/css/mini-event-calendar.min.css"
import "../templates/assets/css/Home.css"
import logo2 from '../templates/assets/images/logo2.svg'
import search from '../templates/assets/images/search.svg'
import green_caret from '../templates/assets/images/green_caret.svg'
import red_caret from '../templates/assets/images/red_caret.svg'
import profile from '../templates/assets/images/mini_profile.png'

function Home() {

    // const user = useContext(UserContext)
    
    return (
        <div className="cf_dashboard_main_wrapper">
            <div className="cf_dashboard_sidebar_wrapper">
                <div className="cf_dashboard_sidebar_inner">
                    <div className="cf_sidebar_logo_block">
                        <label className="sidebar_toggle"><span className="cf_icon cf_left"></span></label>
                        <a href="/"><img src={logo2} alt="Cafetra" className="img-fluid"/></a>
                    </div>
                    <div className="cf_sidebar_search_block">
                        <div className="cf_sidebar_search_inner">
                            <span className="cf_icon cf_search"></span>
                            <input type="text" placeholder="Search here..."/>
                        </div>
                    </div>
                    <div className="cf_sidebar_list_block">
                        <ul className="cf_sidebar_menu">
                            <li className="cf_submenu_block">
                                <a href="/"><span className="cf_icon cf_home"></span><label>Home</label></a>
                            </li>
                            <li className="cf_submenu_block">
                                <a href="/" className="menu_scrl"><span className="cf_icon cf_weather"></span><label>Weather</label><span
                                    className="cf_icon cf_down"></span></a>
                                <ul className="cf_sidebar_submenu">
                                    <li><a href="/">Trade</a></li>
                                    <li><a href="/">USDA Flash</a></li>
                                </ul>
                            </li>
                            <li className="cf_submenu_block">
                                <a href="/" className="menu_scrl"><span className="cf_icon cf_crops"></span><label>Crops</label><span
                                    className="cf_icon cf_down"></span></a>
                                <ul className="cf_sidebar_submenu">
                                    <li><a href="/">US Sales</a></li>
                                    <li><a href="/">US Inspections</a></li>
                                    <li><a href="/">USDA Flash</a></li>
                                    <li><a href="/">EU Weekly Trade Data</a></li>
                                    <li><a href="/">Lineup Data</a></li>
                                    <li><a href="/">Tender Data</a></li>
                                    <li><a href="/">Custom Data</a></li>
                                </ul>
                            </li>

                            <li className="cf_submenu_block">
                                <a href="/" className="menu_scrl"><span className="cf_icon cf_sds"></span><label>S&D’s</label><span
                                    className="cf_icon cf_down"></span></a>
                                <ul className="cf_sidebar_submenu">
                                    <li><a href="/">US Sales</a></li>
                                    <li><a href="/">US Inspections</a></li>
                                    <li><a href="/">USDA Flash</a></li>
                                    <li><a href="/">EU Weekly Trade Data</a></li>
                                    <li><a href="/">Lineup Data</a></li>
                                    <li><a href="/">Tender Data</a></li>
                                    <li><a href="/">Custom Data</a></li>
                                </ul>
                            </li>
                            <li className="cf_submenu_block">
                                <a href="/" className="menu_scrl"><span className="cf_icon cf_trade"></span><label>Trade</label><span
                                    className="cf_icon cf_down"></span></a>
                                <ul className="cf_sidebar_submenu">
                                    <li><a href="/">US Sales</a></li>
                                    <li><a href="/">US Inspections</a></li>
                                    <li><a href="/">USDA Flash</a></li>
                                    <li><a href="/">EU Weekly Trade Data</a></li>
                                    <li><a href="/">Lineup Data</a></li>
                                    <li><a href="/">Tender Data</a></li>
                                    <li><a href="/">Custom Data</a></li>
                                </ul>
                            </li>
                            <li className="cf_submenu_block">
                                <a href="/" className="menu_scrl"><span className="cf_icon cf_policy"></span><label>Policies</label><span
                                    className="cf_icon cf_down"></span></a>
                                <ul className="cf_sidebar_submenu">
                                    <li><a href="/">US Sales</a></li>
                                    <li><a href="/">US Inspections</a></li>
                                </ul>
                            </li>
                            <li className="cf_submenu_block">
                                <a href="/" className="menu_scrl"><span className="cf_icon cf_process"></span><label>Processing Capacity</label><span
                                    className="cf_icon cf_down"></span></a>
                                <ul className="cf_sidebar_submenu">
                                    <li><a href="/">US Sales</a></li>
                                    <li><a href="/">US Inspections</a></li>
                                </ul>
                            </li>
                            <li className="cf_submenu_block">
                                <a href="/" className="menu_scrl"><span className="cf_icon cf_price"></span><label>Prices</label><span
                                    className="cf_icon cf_down"></span></a>
                                <ul className="cf_sidebar_submenu">
                                    <li><a href="/">US Sales</a></li>
                                    <li><a href="/">US Inspections</a></li>
                                    <li><a href="/">USDA Flash</a></li>
                                    <li><a href="/">EU Weekly Trade Data</a></li>
                                    <li><a href="/">Lineup Data</a></li>
                                    <li><a href="/">Tender Data</a></li>
                                    <li><a href="/">Custom Data</a></li>
                                </ul>
                            </li>
                            <li className="cf_submenu_block">
                                <a href="/" className="menu_scrl"><span className="cf_icon cf_price_analysis"></span><label>Price Analysis</label><span
                                    className="cf_icon cf_down"></span></a>
                                <ul className="cf_sidebar_submenu">
                                    <li><a href="/">US Sales</a></li>
                                    <li><a href="/">US Inspections</a></li>
                                    <li><a href="/">USDA Flash</a></li>
                                    <li><a href="/">EU Weekly Trade Data</a></li>
                                    <li><a href="/">Lineup Data</a></li>
                                    <li><a href="/">Tender Data</a></li>
                                    <li><a href="/">Custom Data</a></li>
                                </ul>
                            </li>
                            <li className="cf_submenu_block">
                                <a href="/" className="menu_scrl"><span className="cf_icon cf_sentiment"></span><label>Sentiment</label><span
                                    className="cf_icon cf_down"></span></a>
                                <ul className="cf_sidebar_submenu">
                                    <li><a href="/">US Sales</a></li>
                                    <li><a href="/">US Inspections</a></li>
                                </ul>
                            </li>
                            <li className="cf_submenu_block">
                                <a href="/" className="menu_scrl"><span className="cf_icon cf_picture"></span><label>The Big Picture</label><span
                                    className="cf_icon cf_down"></span></a>
                                <ul className="cf_sidebar_submenu">
                                    <li><a href="/">US Sales</a></li>
                                    <li><a href="/">US Inspections</a></li>
                                </ul>
                            </li>
                            <li className="cf_submenu_block">
                                <a href="/" className="menu_scrl"><span className="cf_icon cf_report"></span><label>Report Archieve</label><span
                                    className="cf_icon cf_down"></span></a>
                                <ul className="cf_sidebar_submenu">
                                    <li><a href="/">US Sales</a></li>
                                    <li><a href="/">US Inspections</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="cf_info_list_block">
                        <div className="cf_sidebar_list_block">
                            <ul className="cf_sidebar_menu">
                                <li className="cf_submenu_block">
                                    <a href="l/" className="menu_scrl"><span className="cf_icon cf_info"></span><label>Info</label><span
                                        className="cf_icon cf_down"></span></a>
                                    <ul className="cf_sidebar_submenu">
                                        <li><a href="/">Ceras Analytics</a></li>
                                        <li><a href="/">Products</a></li>
                                        <li><a href="/">Pricing</a></li>
                                        <li><a href="/">Tutorials</a></li>
                                        <li><a href="/">API Documentation</a></li>
                                        <li><a href="/">FAQ</a></li>
                                        <li><a href="/">Term of Use</a></li>
                                        <li><a href="/">Contact</a></li>
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
                            <li><a href="/" className="">Home</a></li>
                        </ul>
                    </div>
                    <div className="cf_dashboard_header_profile">
                        <ul>
                            <li>
                                <h5>John Doe</h5>
                            </li>
                            <li>
                                <div className="cf_header_profile_toggle">
                                    <a href="/"><img src={profile} alt="profile"/></a>
                                    <span className="cf_icon cf_down_black"></span>
                                    <ul>
                                        <li>
                                            <a href="/"><span className="cf_icon cf_edit"></span> My Profile</a>
                                        </li>
                                        <li>
                                            <a href="/"><span className="cf_icon cf_bookmark"></span>My Preferences</a>
                                        </li>
                                        <li>
                                            <a href="/"><span className="cf_icon cf_setting"></span>Subscriptions</a>
                                        </li>
                                        <li>
                                            <a href="/"><span className="cf_icon cf_phone"></span>Contact Account Manager</a>
                                        </li>
                                        <li>
                                            <a href="/" data-bs-toggle="modal" data-bs-target="#cf_logout"><span
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
                                                <img src="assets/images/chart.png" className="img-fluid" alt="chart" />
                                            </div>
                                            <ul className="chart_btns">
                                                <li><a href="/"><span className="material-symbols-outlined">chevron_left</span> Previous</a></li>
                                                <li><a href="/">Next <span className="material-symbols-outlined"> chevron_right </span></a></li>
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
                                                        +4.50 <img src={green_caret} alt="caret"/>
                                                    </div>
                                                </li>
                                                <li>
                                                    <p>MATIF RAPESEED</p>
                                                    <div className="price_wrapper">
                                                        <span>CBOT</span>
                                                        <div className="price red">
                                                            -4.00 <img src={green_caret} alt="caret" />
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

export default Home