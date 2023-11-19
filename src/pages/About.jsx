export default function About() {
    return (
        <>
            <section className="bg-white pt-20 pt-md-10 dark:bg-gray-900">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">About the Project</h1>
                        <p className="max-w-2xl mb-6 text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400">
                            This project is a journey in React, a playground where I've immersed myself in the world of web development.
                            <br />
                            <br />
                            <span className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-300">Key Practices:</span>
                            <br />
                            <span className="text-gray-500 dark:text-gray-400 ml-4">- Leveraging useState for effective state management.</span>
                            <br />
                            <span className="text-gray-500 dark:text-gray-400 ml-4">- Using Vite to fetch data seamlessly from a public API.</span>
                            <br />
                            <span className="text-gray-500 dark:text-gray-400 ml-4">- Exploring diverse React libraries for enhanced functionality.</span>
                            <br />
                            <span className="text-gray-500 dark:text-gray-400 ml-4">- Implementing dark mode for a visually appealing experience.</span>
                            <br />
                            <span className="text-gray-500 dark:text-gray-400 ml-4">- Deployment on Netlify for accessibility and convenience.</span>
                            <br />
                            <span className="text-gray-500 dark:text-gray-400 ml-4">- Securing sensitive data with environment variables.</span>
                            <br />
                            <span className="text-gray-500 dark:text-gray-400 ml-4">- Incorporating Tailwind CSS (Flowbite) for a responsive frontend.</span>
                            <br />
                            <span className="text-gray-500 dark:text-gray-400 ml-4">- Practicing React Router for seamless navigation.</span>
                        </p>
                        <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            Visit my GitHub Profile
                        </a>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img className="rounded-lg" src="assets/vite.svg" alt="landing" />
                    </div>
                </div>
            </section>
        </>
    );
}
