import { useRouteError, Link } from 'react-router-dom'

function ErrorPage() {
    const error = useRouteError()

    return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-100">
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
                <h1 className="text-4xl font-bold text-error mb-4">Oops!</h1>
                <p className="text-xl text-neutral-700 mb-4">
                    {error.statusText || error.message || "An unexpected error occurred"}
                </p>
                <Link to="/" className="text-primary hover:text-primary-dark">
                    Go back to home page
                </Link>
            </div>
        </div>
    )
}

export default ErrorPage