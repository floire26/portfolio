import { Link } from "react-router-dom"

export default function HomePage() {
    return (
        <section class="text-gray-400 bg-gray-900 body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Hello!
                    <br class="hidden lg:inline-block" />Welcome to my page!
                </h1>
                <p class="mb-8 leading-relaxed">I am Edward, an aspiring software developer!</p>
                <div class="flex justify-center">
                    <Link to="/portofolio" class="mr-5 hover:text-white">
                        <button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">View my portfolios!</button>
                    </Link>
                </div>
                </div>
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img class="object-cover object-center rounded" alt="hero" src="https://react-tailwindcss-portfolio.netlify.app/static/media/developer-dark.3f07bd13.svg" />
                </div>
            </div>
        </section>
    )
}
