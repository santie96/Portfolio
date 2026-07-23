import { HiCode } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { FiSun } from "react-icons/fi";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import SideBarMenu from "./component_navbar/SideBarMenu";
import { AiOutlineDownload } from "react-icons/ai";






function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <header className="w-full bg-[#101A2E] flex justify-center items-center">
                <div className="flex items-center justify-between w-full px-10 h-28">

                    <section className="flex items-center gap-5 font-logo">
                        {/* Logo - view Desktop {#d24,13} */}
                        <NavLink className="max-[641px]:hidden" to="/">
                            <h2 className="text-4xl text-white font-semibold tracking-tighter">
                                <span className="text-[#3B82F6]">{`<`}</span>

                                Santi

                                <span className="text-[#3B82F6]">Dev</span>

                                /

                                <span className="text-[#3B82F6]">{`>`}</span>
                            </h2>
                        </NavLink>

                        
                        {/* Logo - view Mobile {#afd,13} */}
                        <NavLink className="min-[641px]:hidden" to="/">
                            <h2 className=" text-white font-semibold tracking-tighter">
                                <span className="text-[#3B82F6]">{`<`}</span>

                                S

                                <span className="text-[#3B82F6]">Dev</span>

                                /

                                <span className="text-[#3B82F6]">{`>`}</span>
                            </h2>
                        </NavLink>
                    </section>


                    {/* SideBarMenu - view Mobile  {#afd,7} */}
                    <section className="flex items-center min-[1024px]:hidden">
                        <button className="cursor-pointer text-text-inverse transition-transform hover:scale-125 duration-300" onClick={() => setIsMenuOpen(valore => !valore)}>
                            <FaBars className="text-xl text-white" />
                        </button>

                        <SideBarMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
                    </section>


                    {/* Navigation Menu - view Desktop  {#d24,23} */}
                    <section className="max-[1024px]:hidden">
                        <ul className="flex gap-6 text-white font-title">
                            <li>
                                <NavLink>Home</NavLink>
                            </li>
                            <li>
                                <NavLink>Chi sono</NavLink>
                            </li>
                            <li>
                                <NavLink>Progetti</NavLink>
                            </li>
                            <li>
                                <NavLink>Skills</NavLink>
                            </li>
                            <li>
                                <NavLink>Esperienza</NavLink>
                            </li>
                            <li>
                                <NavLink>Contatti</NavLink>
                            </li>
                        </ul>

                    </section>

                    {/* button Sarica CV - view Desktop {#d24,7} */}
                    <section className="max-[1024px]:hidden">
                        <button 
                        type="button"
                        className="text-white py-3 px-8 border-2 rounded-4xl font-text flex gap-1 items-center">
                            Scarica CV <AiOutlineDownload className="font-semibold text-xl"/>
                        </button>
                    </section>

                </div>

            </header>

        </>

    )
}

export default Navbar