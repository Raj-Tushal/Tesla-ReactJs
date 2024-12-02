import logo from "../assets/logo.png";
import { useState, useEffect } from "react";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);

    // Function to show the menu in smaller screens
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Effect to handle scroll events
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <header
            className={`z-10 fixed top-0 left-0 right-0 w-full h-14 flex items-center justify-between px-10 max-sm:px-5 max-sm:h-16 transition-transform duration-700 
            ${visible && !menuOpen ? 'translate-y-0' : menuOpen ? 'translate-y-0' : '-translate-y-full'}`} // Adjust this line
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
        >
            {/* Logo */}
            <div className="flex items-center justify-center">
                <a href="Tesla" src="#"><img src={logo} alt="Logo" className="h-28 w-36" /></a>
            </div>``

            {/* Menu */}
            <div>
                <ul
                    className={`flex gap-10 text-xs text-[#ffffff] justify-center items-center font-extrabold transition-all duration-500
                    max-sm:absolute max-sm:text-xl max-sm:top-0 max-sm:left-1/2 max-sm:-translate-x-1/2 max-sm:flex-col max-sm:w-full max-sm:h-screen max-sm:gap-20 max-sm:bg-white
                    max-sm:text-[#171420] max-sm:items-center max-sm:font-semibold
                    ${menuOpen ? "max-sm:opacity-100 max-sm:h-full max-sm:fixed" : "max-sm:opacity-0 max-sm:h-0"} max-sm:transition-all max-sm:duration-500 max-sm:overflow-hidden`}
                >
                    <li className="max-sm:w-full max-sm:pl-10"><a href="Model Y">Model Y</a></li>
                    <li className="max-sm:w-full max-sm:pl-10"><a href="Model S">Model S</a></li>
                    <li className="max-sm:w-full max-sm:pl-10"><a href="Model X">Model X</a></li>
                    <li className="max-sm:w-full max-sm:pl-10"><a href="Cybertruck">Cybertruck</a></li>
                    <li className="max-sm:w-full max-sm:pl-10"><a href="Solar Roof">Solar Roof</a></li>
                    <li className="max-sm:w-full max-sm:pl-10"><a href="Solar Panels">Solar Panels</a></li>
                </ul>
            </div>

            {/* Cart & Hamburger Menu */}
            <div>
                <ul className="flex gap-5 text-xl justify-center items-center text-[#ffffff]">
                    <a href="#"><li className="font-bold max-sm:hidden">Shop</li></a>
                    <li className="max-sm:hidden">
                        <a href="#"><i className="fa-solid fa-user"></i></a>
                    </li>
                    {/* Hamburger menu icon and Close (X) icon */}
                    <li className="relative">
                        {/* Hamburger icon */}
                        <i
                            className={`fa-solid fa-bars cursor-pointer lg:hidden ${menuOpen ? "hidden" : "block"}`}
                            onClick={toggleMenu}
                            style={{ fontSize: "24px" }} // Keep bars size as is
                        ></i>

                        {/* Cross (X) icon */}
                        <i
                            className={`fa-solid fa-xmark cursor-pointer text-black ${menuOpen ? "block" : "hidden"}`}
                            onClick={toggleMenu}
                            style={{
                                fontSize: "24px", // Match the size of bars
                                position: "absolute",
                                top: "0",
                                right: "0", // Position cross exactly at the bars' spot
                            }}
                        ></i>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
