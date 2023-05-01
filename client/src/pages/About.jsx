import { Link } from "react-router-dom"

export default function AboutPage() {
    return (
        <section class="text-gray-400 bg-gray-900 body-font">
            <div class="container px-5 py-24 mx-auto flex flex-col">
                <div class="lg:w-4/6 mx-auto">
                <div class="rounded-lg h-64 overflow-hidden">
                    <img alt="content" class="object-cover object-center h-full w-full" src="https://i0.wp.com/www.theseattledataguy.com/wp-content/uploads/2021/05/fotis-fotopoulos-DuHKoV44prg-unsplash-scaled.jpg?fit=2560%2C1707&ssl=1" />
            </div>
            <div class="flex flex-col sm:flex-row mt-10">
                <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                </div>
                <div class="flex flex-col items-center text-center justify-center">
                    <h2 class="font-medium title-font mt-4 text-white text-lg">Edward Alexander</h2>
                    <div class="w-12 h-1 bg-blue-500 rounded mt-2 mb-4"></div>
                    <p class="text-base text-gray-400">Aspiring Software Developer</p>
                </div>
                </div>
                    <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                    <p class="leading-relaxed text-lg mb-4">I'm an aspiring software developer. I've graduated from university in 2023 and currently in training to become a software developer. Nice to meet you!</p>
                    <Link to="/portofolio" class="text-blue-400 inline-flex items-center">View my portfolio
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </Link>
                </div>
            </div>
            </div>
        </div>
        </section>
    )
}
