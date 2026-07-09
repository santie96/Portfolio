import { HiCode } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import logoPortfolio from "../../assets/img/logo-portolio.png";
import { FiSun } from "react-icons/fi";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import SideBarMenu from "./component_navbar/SideBarMenu";




function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <header className="w-full bg-gray-900 flex justify-center items-center">
                <div className="flex items-center justify-between w-full p-7">
                    <section className="flex items-center gap-5 font-title">
                        <NavLink to="/"><img src={`${logoPortfolio}`} alt="logo" className="w-18" /></NavLink>
                        
                        <h2 className="max-sm:hidden md:text-2xl text-text-inverse">Santi Andrea Emma</h2>
                    </section>


                    <section className="flex items-center">
                        <button className="cursor-pointer text-text-inverse transition-transform hover:scale-125 duration-300" onClick={() => setIsMenuOpen(valore => !valore)}>
                            <FaBars className="text-xl"/>
                        </button>

                        <SideBarMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
                    </section>


                    {/* <section>
                        <ul>
                            <li>
                                <NavLink>Progetto</NavLink>
                            </li>
                            <li>
                                <NavLink>Chi sono</NavLink>
                            </li>
                            <li>
                                <NavLink>Contatti</NavLink>
                            </li>
                        </ul>

                    </section> */}

                </div>

            </header>

        </>

    )
}

export default Navbar