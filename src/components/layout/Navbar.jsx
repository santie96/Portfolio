import { HiCode } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import logoPortfolio from "../../assets/img/logo-portolio.png";
import { FiSun } from "react-icons/fi";
import { FaBars } from "react-icons/fa6";

function Navbar() {
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
                        <FaBars  className="text-2xl text-slate-200 cursor-pointer"/>

                        <div className=" flex justify-center bg-slate-700 absolute top-20 h-60 w-60 right-0 rounded-b-2xl">
                            <ul className="flex flex-col items-center justify-evenly gap-4 font-text text-1xl font-medium text-text-primary text-slate-200 w-full">
                            <li className="w-full h-full">
                                <NavLink className="hover:bg-slate-600 w-full h-full flex items-center justify-center" to="/progetti">Progetti</NavLink>
                            </li>
                            <li className="w-full h-full">
                                <NavLink className="hover:bg-slate-600 w-full h-full flex items-center justify-center" to="/about">Chi sono</NavLink>
                            </li>
                            <li className="w-full h-full">
                                <NavLink className="hover:bg-slate-600 w-full h-full flex items-center justify-center" to="/contatti">Contatti</NavLink>
                            </li>
                            <li className="w-full h-full">
                                <button className="hover:bg-slate-600 w-full h-full flex items-center justify-center group text-slate-200 py-2 px-6 cursor-pointer md:flex rounded-b-2xl  flex gap-3">

                        <FiSun className="text-[1.3rem] scale-90 transition-transform duration-300 group-hover:scale-100" />
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