import { HiCode } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { FiSun } from "react-icons/fi";
import { FaBars } from "react-icons/fa6";
import { useState, useEffect  } from "react";
import SideBarMenu from "./component_navbar/SideBarMenu";
import { AiOutlineDownload } from "react-icons/ai";



function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    return (
        <>
            <header className="w-full bg-[#101A2E] flex justify-center items-center border-b border-b-[#24344D]">
                <div className="flex items-center justify-between w-full px-10 h-20 md:h-28">

                    <section className="flex items-center gap-5 font-logo">
                        {/* Logo - view Desktop {#d24,13} */}
                        <NavLink className="hidden md:block" to="/">
                            <h2 className="text-4xl text-white font-semibold tracking-tighter">
                                <span className="text-[#3B82F6]">{`<`}</span>

                                Santi

                                <span className="text-[#3B82F6]">Dev</span>

                                /

                                <span className="text-[#3B82F6]">{`>`}</span>
                            </h2>
                        </NavLink>


                        {/* Logo - view Mobile {#afd,13} */}
                        <NavLink className="md:hidden" to="/">
                            <h2 className="text-3xl text-white font-semibold tracking-tighter">
                                <span className="text-[#3B82F6]">{`<`}</span>

                                S

                                <span className="text-[#3B82F6]">Dev</span>

                                /

                                <span className="text-[#3B82F6]">{`>`}</span>
                            </h2>
                        </NavLink>
                    </section>


                    {/* SideBarMenu - view Mobile  {#afd,7} */}
                    <section className="flex items-center lg:hidden">
                        <button className="cursor-pointer text-text-inverse transition-transform hover:scale-125 duration-300" onClick={() => setIsMenuOpen(valore => !valore)}>
                            <FaBars className="text-xl md:text-2xl text-white" />
                        </button>

                        <SideBarMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
                    </section>


                    {/* Navigation Menu - view Desktop  {#d24,23} */}
                    <section className="hidden lg:block">
                        <ul className="flex gap-6 text-white font-title">
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/chi-sono">Chi sono</NavLink>
                            </li>
                            <li>
                                <NavLink to="progetti">Progetti</NavLink>
                            </li>
                            <li>
                                <NavLink to="/skills">Skills</NavLink>
                            </li>
                            <li>
                                <NavLink to="/esperienza" >Esperienza</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contatti" >Contatti</NavLink>
                            </li>
                        </ul>

                    </section>

                    {/* button Sarica CV - view Desktop {#d24,7} */}
                    <section className="hidden lg:block">
                        <button
                            type="button"
                            className="text-white py-3 px-8 border-2 cursor-pointer rounded-4xl font-text flex gap-1 items-center">
                            Scarica CV <AiOutlineDownload className="font-semibold text-xl" />
                        </button>
                    </section>

                </div>

            </header>

        </>

    )
}

export default Navbar