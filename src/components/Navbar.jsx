import './navbar.css';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { RxHome } from 'react-icons/rx';
import { ImFloppyDisk } from 'react-icons/im';
import { FaGithubAlt, FaLinkedin, FaUserAlt } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleItemClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <nav className="navbar">
            <div className="content">
            
            <ul className="main-menu">
                <li className={`menu-item ${activeIndex === 0 ? 'active' : ''}`}>
                <a href="#home" className="menu-link" onClick={() => handleItemClick(0)}>
                    <RxHome />
                </a>
                </li>
                <li className={`menu-item ${activeIndex === 1 ? 'active' : ''}`}>
                <a href="#about" className="menu-link" onClick={() => handleItemClick(1)}>
                    <FaUserAlt />
                </a>
                </li>
                <li className={`menu-item ${activeIndex === 2 ? 'active' : ''}`}>
                <a href="#skills" className="menu-link" onClick={() => handleItemClick(2)}>
                    <HiOutlineBookOpen />
                </a>
                </li>
                <li className={`menu-item ${activeIndex === 3 ? 'active' : ''}`}>
                <a href="#portfolio" className="menu-link" onClick={() => handleItemClick(3)}>
                    <ImFloppyDisk />
                </a>
                </li>
                <li className="menu-item">
                <a href="https://www.linkedin.com/in/david-fernandez-comesa%C3%B1a/" className="menu-link">
                    <FaLinkedin />
                </a>
                </li>
                <li className="menu-item">
                <a href="https://github.com/davidFCDev" className="menu-link">
                    <FaGithubAlt />
                </a>
                </li>
            </ul>
            </div>
        </nav>
        );
};

export default Navbar;