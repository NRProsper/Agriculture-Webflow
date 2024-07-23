import {Link} from "react-router-dom";
import Logo from "../assets/img/nav_logo.svg"
import {
    IoSearchOutline as Search,
    IoCartOutline as Cart
} from "react-icons/io5";
import {
    FaBarsStaggered as Bars
} from "react-icons/fa6";
import {FaTimes as Close} from "react-icons/fa";
import {useEffect, useState} from "react";

const NavBar = () => {
    const navLinks = ["Home", "About", "Shop", "Projects", "News"];
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden")
        }else {
            document.body.classList.remove("overflow-hidden")
        }

    }, [isOpen]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setScrolled(scrollTop > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={scrolled ? `fixed w-full bg-white shadow-lg z-[999] transition-all duration-300` : ``}>
            {/*Mobile and Tablet NavBar*/}
            <div
                className={`mobile-tablet lg:hidden fixed top-0 left-0 z-[999] w-full h-full bg-neutral transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="container mx-auto px-[16px]">
                    <div className={`flex items-center justify-between ${scrolled ? `py-[12px] ` : `py-[30px]`}`}>
                        <Link to={"/"} className="logo">
                            <img src={Logo} alt="Agriculture webflow Logo" className="h-10"/>
                        </Link>
                        <button
                            className="text-darkGreen"
                            onClick={() => setIsOpen(false)}
                        >
                            <Close size={40}/>
                        </button>
                    </div>
                    <nav>
                        <ul className="flex flex-col w-full items-start mt-6 space-y-6">
                            {navLinks.map((link, idx) => (
                                <li className="text-darkGreen" key={idx}>
                                    <Link className="text-2xl px-2 py-1 font-semibold" to={""}>
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div
                        className="mt-6 flex md:hidden items-center jus border border-gray rounded-[33px] space-x-2 p-[4px] pr-[20px]">
                        <Link to={""}
                              className="h-[56px] w-[56px] bg-darkGreen rounded-full flex items-center justify-center text-neutral">
                            <Cart size={21}/>
                        </Link>
                        <span className="font-bold text-[18px]">Cart (0)</span>
                    </div>
                    <div className="footer">
                        
                    </div>
                </div>
            </div>
            {/*Desktop and Laptop Navbar*/}
            <div className="container mx-auto px-[10px] lg:px-0">
                <div
                    className={`navigation relative flex items-center justify-between ${scrolled ? `py-[12px] ` : `py-[30px]`}`}>
                    <div className="flex items-center justify-between space-x-16 xl:space-x-28">
                        <Link to={"/"} className="logo">
                            <img src={Logo} alt="Agriculture webflow Logo"/>
                        </Link>
                        <nav className="hidden lg:inline-block">
                            <ul className="flex items-center justify-center">
                                {
                                    navLinks.map((link, idx) => (
                                        <li className="text-darkGreen" key={idx}>
                                            <Link className="text-[20px] px-[8px] py-[4px] font-semibold"
                                                  to={""}>{link}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </nav>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link to={""}
                              className="h-[56px] w-[56px] bg-lightGreen rounded-full flex items-center justify-center text-neutral">
                            <Search size={21}/>
                        </Link>
                        <div
                            className="hidden md:flex items-center border border-gray rounded-[33px] space-x-2 p-[4px] pr-[20px]">
                            <Link to={""}
                                  className="h-[56px] w-[56px] bg-darkGreen rounded-full flex items-center justify-center text-neutral">
                                <Cart size={21}/>
                            </Link>
                            <span className="font-bold text-[18px]">Cart (0)</span>
                        </div>
                        <button
                            className="visible lg:hidden text-darkGreen"
                            onClick={() => setIsOpen(true)}
                        >
                            <Bars size={32}/>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default NavBar;