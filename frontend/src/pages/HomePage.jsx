import React from 'react';
import { FaInstagram, FaLinkedin, FaHome, FaInfoCircle, FaPhone, FaSignInAlt, FaUserPlus, FaArrowRight } from 'react-icons/fa';
import "./HomePage.css"
import Logo from "../assets/logo.png";
import mainimg from "../assets/mainimg.png";
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="main-homepage-container">
            <div className="home-navbar">
                <div className="logo-section">
                    <img src={Logo} alt="She Can Foundation Logo" className="logo-img" />
                </div>
                <div className="home-nav-content">
                    <a href="#home" className="nav-link"><FaHome className="nav-icon" /> Home</a>
                    <a href="#about" className="nav-link"><FaInfoCircle className="nav-icon" /> About</a>
                    <a href="/internships" className="nav-link">Internships</a>
                    <a href="/LoginPage" className="nav-link">Dashboard</a>
                </div>
                <div className="home-nav-buttons">
                    <a href="/LoginPage"><button className="home-login btn-primary"><FaSignInAlt /> Login</button></a>
                    <a href="/LoginPage"><button className="home-signup btn-secondary"><FaUserPlus /> Signup</button></a>
                </div>
            </div>

            <div className="home-hero-section" id="home">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Empowering Women. Building Futures.</h1>
                        <h3>Join She Can Foundation in creating opportunities, fostering entrepreneurship, and promoting gender equality for women across India.</h3>
                        <div className="hero-buttons">
                            <button className="btn-primary"><FaSignInAlt /> Login</button>
                            <button className="btn-outline">Explore Programs <FaArrowRight /></button>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src={mainimg} alt="Women empowerment" className='home-img' />
                    </div>
                </div>
            </div>

            <div className="home-about-section" id="about">
                <h2 className="section-title">About Us</h2>
                <div className="about-content">
                    <p>
                        She Can Foundation is a non‑profit organization dedicated to empowering women and promoting gender equality in India.
                        Our mission is to support women entrepreneurs, provide skill‑building opportunities, and create a safe, collaborative community where every woman can thrive.
                    </p>
                    <p>
                        Through mentorship programs, training workshops, and networking initiatives, we help women turn their ambitions into impactful ventures.
                        Together, we are building a future where every woman is confident, independent, and unstoppable.
                    </p>
                </div>
            </div>

            <footer className="home-footer">
                <div className="footer-social">
                    <h4>Follow us on</h4>
                    <div className="social-links">
                        <a href="#" className="social-link"><FaInstagram /> Instagram</a>
                        <a href="#" className="social-link"><FaLinkedin /> LinkedIn</a>
                    </div>
                </div>
                <div className="footer-links">
                    <ul>
                        <li><a href="#home"><FaHome /> Home</a></li>
                        <li><a href="#about"><FaInfoCircle /> About</a></li>
                        <li><a href="#contact"><FaPhone /> Contact</a></li>
                        <li><a href="#login"><FaSignInAlt /> Login</a></li>
                    </ul>
                    <ul>
                        <li><a href="#programs">Our Programs</a></li>
                        <li><a href="#success">Success Stories</a></li>
                        <li><a href="#volunteer">Volunteer</a></li>
                        <li><a href="#donate">Donate</a></li>
                    </ul>
                </div>
                <div className="footer-copyright">
                    <p>© {new Date().getFullYear()} She Can Foundation. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;