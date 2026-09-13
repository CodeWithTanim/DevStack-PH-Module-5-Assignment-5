import { useState } from "react";
import logo from "../assets/logo-text.png";
import hamburger from "../assets/hamburger.png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="sticky top-0 z-50 border-b border-gray-200 bg-white">
            <nav className="flex items-center justify-between container mx-auto py-4 px-4">
                {/* Desktop Logo */}
                <div className="hidden md:block">
                    <a href="#home">
                        <img src={logo} className="w-28" alt="Dev Stack" />
                    </a>
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        <img src={hamburger} className="w-5" alt="Menu" />
                    </button>
                </div>

                {/* Mobile Logo */}
                <div className="md:hidden">
                    <a href="#home">
                        <img src={logo} className="w-24" alt="Dev Stack" />
                    </a>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8">
                    <li>
                        <a href="#home">Home</a>
                    </li>

                    <li>
                        <a href="#technologies">Technologies</a>
                    </li>

                    <li>
                        <a href="#projects">Projects</a>
                    </li>

                    <li>
                        <a href="#about">About</a>
                    </li>

                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>

                {/* Buttons */}
                <div className="flex items-center gap-2 md:gap-4">
                    <button className="rounded-full bg-white px-2 md:px-3 py-2 text-gray-500 hover:scale-105 transition-transform duration-300">
                        Sign In
                    </button>

                    <button className="rounded-full bg-[#D91B7E] px-3 md:px-4 py-2 text-white hover:scale-105 transition-transform duration-300">
                        Sign Up
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <ul className="md:hidden flex flex-col items-center gap-4 py-4 border-t border-gray-200">
                    <li>
                        <a href="#home" onClick={() => setMenuOpen(false)}>
                            Home
                        </a>
                    </li>

                    <li>
                        <a href="#technologies" onClick={() => setMenuOpen(false)}>
                            Technologies
                        </a>
                    </li>

                    <li>
                        <a href="#projects" onClick={() => setMenuOpen(false)}>
                            Projects
                        </a>
                    </li>

                    <li>
                        <a href="#about" onClick={() => setMenuOpen(false)}>
                            About
                        </a>
                    </li>

                    <li>
                        <a href="#contact" onClick={() => setMenuOpen(false)}>
                            Contact
                        </a>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Navbar;
