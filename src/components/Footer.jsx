import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
    <div>
        <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
                {/* Company Info */}
                <aside className="flex flex-col ml-7">
                    <img src="/skill.png" alt="SkillSwap Logo" className="w-14 h-14 mb-2" />
                    <h2 className="text-2xl font-bold">SkillSwap</h2>
                    <p className="mt-1 text-sm text-gray-600">
                        A Local Skill Exchange Platform for individuals <br /> to offer, learn, and trade skills within their local area.
                    </p>
                </aside>


                {/* Services */}
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Guitar Lessons</a>
                    <a className="link link-hover">Language Exchange</a>
                    <a className="link link-hover">Coding Help</a>
                    <a className="link link-hover">Yoga Training</a>
                </nav>

                {/* Legal */}
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>

                {/* Social Links + Contact Info */}
                <nav>
                    <h6 className="footer-title">Connect & Contact</h6>
                    <div className="flex flex-col">
                        <div className="mt-0 text-sm">
                            <p>Email: info@skillswap.com</p>
                            <p>Phone: +880 123 456 789</p>
                        </div>
                        <div className="flex space-x-4 text-xl mt-4">
                            {/* Social icons with hover brand colors */}
                            <a href="#" className="transition-colors duration-300 hover:text-[#1877F2]"><FaFacebookF /></a>
                            <a href="#" className="transition-colors duration-300 hover:text-[#1DA1F2]"><FaTwitter /></a>
                            <a href="#" className="transition-colors duration-300 hover:text-[#C13584]"><FaInstagram /></a>
                            <a href="#" className="transition-colors duration-300 hover:text-[#0A66C2]"><FaLinkedinIn /></a>
                        </div>
                    </div>
                </nav>
            </footer>
            <div className="w-full mt-0 bg-base-200">
                <hr className="border-gray-400" />
                <p className="text-center text-sm p-2 text-gray-500">
                    &copy; {new Date().getFullYear()} All rights reserved by <span className='font-bold hover:text-[#1DA1F2]'>MD Mahbub Zaman</span>
                </p>
            </div>
    </div>
    );
};

export default Footer;
