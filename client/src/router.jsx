import { createBrowserRouter } from "react-router-dom";
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import PortofolioPage from "./pages/Portofolio";
import NavBar from "./components/NavBar";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/about',
                element: <AboutPage />
            },
            {
                path: '/portofolio',
                element: <PortofolioPage />
            },
        ]
    }
])

export default router;
