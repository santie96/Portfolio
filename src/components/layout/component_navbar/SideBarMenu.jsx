import { NavLink } from "react-router-dom"
import { IoClose } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";



function SidebarMenu({ isOpen, onClose }) {
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-40" onClick={onClose}>
                </div>
            )}

            <div className={`fixed top-0 left-0 w-full h-dvh bg-linear-to-br from-[#101A2E] to-[#17233A] z-50 transition-all duration-500 ease-in-out ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 pointer-events-none"}`}>
                <div className="flex h-full flex-col gap-6 text-white">
                    <div className="group flex justify-end items-center px-10 h-20 border-b border-b-[#24344D]">
                        <button className="cursor-pointer group-hover:bg-accent rounded-full duration-300"
                            onClick={onClose}
                        >
                            <IoClose className="text-3xl md:text-4xl font-mono" />
                        </button>
                    </div>



                    <ul className="w-full flex flex-1 flex-col items-center text-2xl md:text-3xl">
                        <li className=" w-full group">
                            <NavLink className="transition-colors flex items-center justify-center group-hover:bg-accent duration-300 py-6 font-mono"
                                to="/"
                                onClick={onClose}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className=" w-full group">
                            <NavLink className="transition-colors flex items-center justify-center group-hover:bg-accent duration-300 py-6 font-mono"
                                to="chi-sono"
                                onClick={onClose}
                            >
                                Chi sono
                            </NavLink>
                        </li>
                        <li className=" w-full group">
                            <NavLink className="transition-colors flex items-center justify-center group-hover:bg-accent duration-300 py-6 font-mono"
                                to="progetti"
                                onClick={onClose}
                            >
                                Progetti
                            </NavLink>
                        </li>
                        <li className=" w-full group">
                            <NavLink className="transition-colors flex items-center justify-center group-hover:bg-accent duration-300 py-6 font-mono"
                                to="skills"
                                onClick={onClose}
                            >
                                Skills
                            </NavLink>
                        </li>
                        <li className=" w-full group">
                            <NavLink className="transition-colors flex items-center justify-center group-hover:bg-accent duration-300 py-6 font-mono"
                                to="esperienza"
                                onClick={onClose}
                            >
                                Esperienza
                            </NavLink>
                        </li>
                        <li className=" w-full group">
                            <NavLink className="transition-colors flex items-center justify-center group-hover:bg-accent duration-300 py-6 font-mono"
                                to="contatti"
                                onClick={onClose}
                            >
                                Contatti
                            </NavLink>
                        </li>
                    </ul>

                    <div className="py-15 text-text-inverse flex gap-6 items-center justify-center text-3xl md:text-4xl">
                        <a href="https://github.com/santie96" target="_blanck"><IoLogoGithub className="cursor-pointer"/></a>
                        <a href="https://www.linkedin.com/in/santi-andrea-emma/" target="_blanck"><IoLogoLinkedin className="cursor-pointer"/></a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SidebarMenu