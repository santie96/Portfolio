import { IoCodeSlashSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <>
            <section className=" bg-pink-600 w-full py-10">
                <IoCodeSlashSharp />
                <nav>
                    <ul>
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

export default Footer