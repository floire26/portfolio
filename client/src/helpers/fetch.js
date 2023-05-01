import axios from 'axios'

export default async function fetchPortofolio() {
    const { data } = await axios({
        method: 'GET',
        url: `${import.meta.env.VITE_BASE_URL}/portfolios`
    })

    return data;
}
