function portfolio (){
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center text-center py-24 px-4 bg-white shadow-md">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Your Name</h1>
                <p className="text-lg md:text-xl text-gray-600 mb-6">Frontend Developer | Designer | Learner</p>
                <a
                    href="#contact"
                    className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition"
                >
                    Get in Touch
                </a>
            </section>

            {/* About Section */}
            <section className="py-16 px-6 max-w-4xl mx-auto">
                <h2 className="text-3xl font-semibold mb-4">About Me</h2>
                <p className="text-gray-700 leading-relaxed">
                    I'm a passionate frontend developer with experience in building responsive, accessible, and visually
                    appealing web applications. I love working with React, Tailwind, and solving real-world problems
                    through clean code and design.
                </p>
            </section>

            {/* Skills Section */}
            <section className="py-16 px-6 bg-gray-100">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-semibold mb-6 text-center">Skills</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
                        {['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Git'].map((skill) => (
                            <div key={skill} className="bg-white p-4 rounded shadow hover:shadow-lg transition">
                                <p className="text-lg font-medium">{skill}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section
                id="contact"
                className="py-16 px-6 text-center bg-blue-600 text-white"
            >
                <h2 className="text-3xl font-semibold mb-4">Let's work together!</h2>
                <p className="mb-6">Have a project in mind or just want to say hello?</p>
                <a
                    href="mailto:your@email.com"
                    className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition"
                >
                    Contact Me
                </a>
            </section>
        </div>
    )
}
export default portfolio