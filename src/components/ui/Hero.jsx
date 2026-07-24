import { Link } from "react-router-dom"
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { LuClock3 } from "react-icons/lu";
import { IoCodeSlash } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";




function Hero() {
    return (
        <>
            <div className="bg-linear-to-br from-[#101A2E] to-[#17233A]">
                <div className="px-10 py-10">
                    <section className="space-y-10 text-white">

                        <div className="space-y-4">
                            {/* Title and paragraf {#2bb,9} */}
                            <div className="space-y-4">
                                <div className="space-y-1">
                                    <span></span>
                                    <h1 className="text-3xl font-semibold font-title">Santi Andrea Emma</h1>
                                    <h2 className="text-xl font-semibold font-title">Junior <span>Front-End Developer</span></h2>
                                </div>

                                <p className="font-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero fuga vitae, laborum iste distinctio, quasi magnam possimus fugit veniam, corrupti laboriosam. Consequatur facere aperiam iusto eius. Quae repudiandae cumque, debitis, accusamus, non numquam quam voluptatibus ab consequatur saepe nulla est molestias maiores praesentium corporis laborum?</p>
                            </div>

                            {/* Button {#dae,24} */}
                            <div className="flex flex-wrap gap-4">

                                <Link>
                                    <button
                                        type="button"
                                        className="py-3 px-6 bg-linear-to-r from-[#06B6D4] via-[#3B82F6] to-[#7C3AED] rounded-3xl font-semibold text-white flex gap-1 items-center whitespace-nowrap text-sm cursor-pointer group transition-transform hover:scale-105 duration-300"
                                    >
                                        Scopri i progetti
                                        <IoIosArrowRoundForward className="transition-transform group-hover:translate-x-1 duration-300" />

                                    </button>
                                </Link>

                                <Link>
                                    <button
                                        type="button"
                                        className="py-3 px-6 rounded-3xl font-semibold whitespace-nowrap border-2 border-white bg-transparent text-sm cursor-pointer transition-transform hover:scale-105 duration-300 flex items-center gap-1"
                                    >
                                        Contattami
                                        <MdOutlineMail />

                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Card {#fa8,27} */}
                        <div className="grid grid-cols-1 gap-4">
                            <div className="p-4 bg-[#17233A] border border-[#24344D] rounded-2xl space-y-2">
                                <div className="flex items-center gap-2 text-2xl font-semibold">
                                    <LuClock3 />
                                    <span>700+</span>
                                </div>
                                <p>Ore di formazione</p>
                            </div>

                            <div className="p-4 bg-[#17233A] border border-[#24344D] rounded-2xl space-y-2">
                                <div className="flex items-center gap-2 text-2xl font-semibold">
                                    <IoCodeSlash />
                                    <span>4</span>
                                </div>

                                <p>Progetti completi</p>
                            </div>

                            <div className="p-4 bg-[#17233A] border border-[#24344D] rounded-2xl space-y-2">
                                <div className="flex items-center gap-2 text-2xl font-semibold">
                                    <FaUsers />
                                    <span>3</span>
                                </div>

                                <p>Progetti in Team</p>
                            </div>
                        </div>

                    </section>

                    <section>

                    </section>
                </div>
            </div>
        </>
    )
}

export default Hero