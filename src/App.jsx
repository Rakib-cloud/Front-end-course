import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
    return (
        <div className="min-h-screen bg-neutral-100">
            <Navbar />
            <main className="container mx-auto px-4 py-8">
                <Outlet />
            </main>
        </div>
    )
}

export default App