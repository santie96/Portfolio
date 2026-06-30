import { HiCode } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import logoPortfolio from "../../assets/img/logo-portolio.png";

function Navbar() {
    return (
        <>
            <section className="bg-bg-primary w-full flex justify-center py-8 border-b-2 border-text-primary">
                <div className="flex items-center justify-between text-center w-4/5">
                    <div className="flex items-center gap-4">
                        <img className="w-18" src={logoPortfolio} alt="Logo portfolio" />
                    </div>
                    <nav>
                        <ul className="flex gap-4 font-text text-1xl font-medium text-text-primary">
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
                </div>
            </section>

        </>

    )
}

export default Navbar