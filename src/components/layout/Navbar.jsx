import { HiCode } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import logoPortfolio from "../../assets/img/logo-portolio.png";
import { FiSun } from "react-icons/fi";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";



function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <section className="bg-slate-800 w-full flex justify-center h-20 border-b-1 border-slate-200">
                <div className="flex items-center justify-between text-center w-4/5">
                    <div className="flex items-center gap-4 basis-1/4">
                        <img className="w-18" src={logoPortfolio} alt="Logo portfolio" />
                    </div>

                    <nav className="md:flex hidden items-center  basis-2/4">
                        <ul className="flex gap-4 font-text text-1xl font-medium text-text-primary text-slate-200">
                            <li>
                                <NavLink className="" to="/progetti">Progetti</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">Chi sono</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contatti">Contatti</NavLink>
                            </li>
                        </ul>
                    </nav>

                    <nav className="md:hidden flex">
                        <FaBars
                            onClick={() => setIsMenuOpen(prev => !prev)}
                            className="text-2xl text-slate-200 cursor-pointer z-20"/>

                        <div className={`absolute top-20 right-0 w-60 h-60 bg-slate-700 rounded-b-2xl flex justify-center transition-all duration-300 ease-in-out ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"}`}>

                            <ul className="flex flex-col items-center justify-evenly w-full text-slate-200 font-medium">

                                <li className="w-full h-full">
                                    <NavLink
                                        className="hover:bg-slate-600 w-full h-full flex items-center justify-center"
                                        to="/progetti"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Progetti
                                    </NavLink>
                                </li>

                                <li className="w-full h-full">
                                    <NavLink
                                        className="hover:bg-slate-600 w-full h-full flex items-center justify-center"
                                        to="/about"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Chi sono
                                    </NavLink>
                                </li>

                                <li className="w-full h-full">
                                    <NavLink
                                        className="hover:bg-slate-600 w-full h-full flex items-center justify-center"
                                        to="/contatti"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Contatti
                                    </NavLink>
                                </li>

                                <li className="w-full h-full">

                                    <button className="hover:bg-slate-600 w-full h-full flex items-center justify-center gap-3 group cursor-pointer rounded-b-2xl">

                                        <FiSun className="text-[1.3rem] transition-transform duration-300 group-hover:scale-110" />

                                        <span>Dark Mode</span>

                                    </button>
                                </li>

                            </ul>
                        </div>
                    </nav>

                    <button className=" group text-slate-200 border-3 border-slate-200 py-2 px-6 rounded-4xl cursor-pointer md:flex hidden">

                        <FiSun className="text-[1.3rem] scale-90 transition-transform duration-300 group-hover:scale-100" />

                    </button>
                </div>
            </section>

        </>

    )
}

export default Navbar