import { useDispatch, useSelector } from "react-redux";
import PortfolioCard from "../components/PortfolioCard";
import { getPortfolio } from "../actions/actionCreators";
import { useEffect } from "react";


export default function PortofolioPage() {
    const portfolios = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPortfolio())
    }, [])

    return (
        <section class="text-gray-400 bg-gray-900 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                <h1 class="text-2xl font-medium title-font mb-4 text-white tracking-widest">MY PORTFOLIO</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Here are some projects that I've worked on</p>
                </div>
                <div class="flex flex-wrap -m-4">
                    {
                        !portfolios ? <h1 class="text-2xl font-medium title-font mb-4 text-white tracking-widest">Loading...</h1>: portfolios.map(portfolio => <PortfolioCard portfolio={ portfolio }/>)
                    }
                </div>
            </div>
        </section>
    )
}
