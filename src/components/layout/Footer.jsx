import { IoCodeSlashSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <section className=" bg-[#101A2E] w-full py-5 border-t border-t-[#24344D]">
                <div className="flex flex-col gap-4 items-center px-10">
                    <div className="flex items-center gap-1">
                        <div className="flex flex-col gap-3 items-left">
                            <div className="flex flex-col items-left">
                                {/* Logo - view Mobile {#afd,13} */}
                                <NavLink className="md:hidden" to="/">
                                    <h2 className="text-2xl text-white font-semibold tracking-tighter">
                                        <span className="text-[#3B82F6]">{`<`}</span>

                                        S

                                        <span className="text-[#3B82F6]">Dev</span>

                                        /

                                        <span className="text-[#3B82F6]">{`>`}</span>
                                    </h2>
                                </NavLink>
                                <h3 className="text-white font-title text-sm text-left max-w-40">Junior Frontend Developer</h3>
                            </div>

                            <div className="text-white flex gap-4 text-3xl">
                                <a href="https://github.com/santie96" target="_blanck"><IoLogoGithub className="cursor-pointer" /></a>
                                <a href="https://www.linkedin.com/in/santi-andrea-emma/" target="_blanck"><IoLogoLinkedin className="cursor-pointer" /></a>
                            </div>
                        </div>

                        <Link to="/contatti">
                            <button
                                type="button"
                                className="py-3 px-6 bg-linear-to-r from-[#06B6D4] via-[#3B82F6] to-[#7C3AED] rounded-3xl font-semibold text-white flex gap-1 items-center whitespace-nowrap text-sm cursor-pointer group transition-transform hover:scale-105 duration-300"
                            >
                                Contattami
                            </button>
                        </Link>
                    </div>

                    <hr className="border border-[#24344D] w-full " />

                    <p className="text-white text-sm max-w-45 text-center">© 2026 SantiDev — Crafted with React & Tailwind CSS</p>
                </div>
            </section>

        </>

    )
}

export default Footer