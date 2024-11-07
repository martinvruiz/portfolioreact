import { Link } from "react-router-dom"

export const NavBar = ()=>{
    return <nav className="w-full bg-blue-800 h-14 flex justify-center">
        <ul className="flex gap-4 justify-center items-center text-white">
            <Link to="/" className="text-xl p-1 border-b border-white">MVR</Link>
            <Link to="/proyects" className="text-xl p-1 border-b border-white">Proyectos</Link>
            <Link to="/contact" className="text-xl p-1 border-b border-white">Contacto</Link>
        </ul>
    </nav>
}