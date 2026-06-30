import { IoCodeSlashSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <>
            <section className=" bg-pink-600 w-full py-4 flex items-center justify-around text-center">
                <div className="flex items-center gap-2 text-3xl">
                    <IoCodeSlashSharp />
                    <h2>Santi Andrea Emma</h2>
                </div>
                <nav>
                    <ul className="flex gap-4">
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
            </section>

        </>

    )
}

export default Navbar