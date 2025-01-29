import { Link } from "react-router-dom"

export const NavBar = ()=>{
    return <nav className="w-full h-14 flex justify-center">
        <ul className="flex gap-4 justify-center items-center text-white">
            <Link to="/" className="text-xl p-1 transform transition-transform duration-200 hover:scale-110 border-b border-white">MVR</Link>
            <Link to="/projects" className="transform transition-transform duration-200 hover:scale-110 text-xl p-1 border-b border-white">Projects</Link>
            <Link to="/contact" className="transform transition-transform duration-200 hover:scale-110 text-xl p-1 border-b border-white">Contact</Link>
        </ul>
    </nav>
}