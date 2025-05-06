import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="bg-gray-400 text-white shadow-md">
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                    <Link to="/" className="text-xl font-bold">My App</Link>
                    <div className="space-x-4">
                        <Link to="/" className="hover:text-primary-light">Home</Link>
                        <Link to="/about" className="hover:text-primary-light">About</Link>
                        <Link to="/details" className="hover:text-primary-light">Details</Link>
                        <Link to="/portfolio" className="hover:text-primary-light">Portfolio</Link>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar