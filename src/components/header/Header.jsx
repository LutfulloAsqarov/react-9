import React from "react";
import "./Header.scss";
import logo from "../../assets/images/logo.svg";
import { NavLink, Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
    return (
        <header className="header">
            <nav className="header__navbar container">
                <div className="header__logo">
                    <Link>
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <ul className="header__list">
                    <li className="header__item">
                        <NavLink className="header__link" to={"/"}>
                            Home
                        </NavLink>
                    </li>
                    <li className="header__item">
                        <a className="header__link" href="#">
                            Contact
                        </a>
                    </li>
                    <li className="header__item">
                        <a href="#" className="header__link">
                            About
                        </a>
                    </li>
                    <li className="header__item">
                        <NavLink className="sign-in" to={"/log-in"}>
                            Sign in
                        </NavLink>
                    </li>
                    <li className="header__item--close">
                        <span>X</span>
                    </li>
                </ul>
                <div className="header__right">
                    <div className="header__search">
                        <input
                            className="header__search__input"
                            type="text"
                            placeholder="What are you looking for?"
                        />
                        <IoSearch />
                    </div>
                    <div className="header__heart">
                        <Link>
                            <FaRegHeart />
                            {/* <sup className="counter"></sup> */}
                        </Link>
                        <Link>
                            <FiShoppingCart />
                        </Link>
                    </div>
                    <button className="header__hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
