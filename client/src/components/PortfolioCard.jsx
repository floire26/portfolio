export default function PortfolioCard({ portfolio }) {
    return <>
        <div class="p-4 lg:w-1/2">
        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={ portfolio.imageUrl } />
          <div class="flex-grow sm:pl-8">
            <h2 class="title-font font-medium text-lg text-white">{ portfolio.title }</h2>
            <a href={ portfolio.url }>
                <h3 class="text-gray-500 mb-3">Portfolio Link</h3>
            </a>
            <p class="mb-4">{ portfolio.summary }</p>
          </div>
        </div>
      </div>
    </>
}
