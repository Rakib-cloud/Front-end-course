import {Link, Navigate, NavLink} from 'react-router-dom'

function Navbar() {
    return (
        <nav className="bg-gray-400 text-white shadow-md">
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                    <Link to="/" className="text-xl font-bold">My App</Link>
                    <div className="space-x-4">
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? "text-red-500 font-bold text-2xl" : ""}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => isActive ? "text-red-500 font-bold text-2xl" : ""}
                        >
                           About
                        </NavLink>

                        <NavLink
                            to="/details"
                            className={({ isActive }) => isActive ? "text-red-500 font-bold text-2xl" : ""}
                        >
                            Details
                        </NavLink>
                        <NavLink
                            to="/portfolio"
                            className={({ isActive }) => isActive ? "text-red-500 font-bold text-2xl" : ""}
                        >
                            Portfolio
                        </NavLink>




                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar