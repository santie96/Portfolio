import { IoCodeSlashSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <>
            <section className=" bg-[#101A2E] w-full py-5 border-t border-t-[#24344D]">
                <div className="flex items-center px-10">
                    {/* Logo - view Mobile {#afd,13} */}
                        <NavLink className="md:hidden" to="/">
                            <h2 className="text-xl text-white font-semibold tracking-tighter">
                                <span className="text-[#3B82F6]">{`<`}</span>

                                S

                                <span className="text-[#3B82F6]">Dev</span>

                                /

                                <span className="text-[#3B82F6]">{`>`}</span>
                            </h2>
                        </NavLink>
                    <nav>
                        <ul className="flex">
                            <li>
                                <NavLink to="/progetti">Progetti</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">Chi sono</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contatti">Contatti</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>

        </>

    )
}

export default Footer