import fetchPortofolio from "../helpers/fetch";

export function getPortfolio() {
    return function(dispatch) {
        fetchPortofolio()
        .then(payload => {
            dispatch({
                type: 'portofolio/fetch',
                payload
            })
        })
        .catch(err => console.log(err))
    }
}
