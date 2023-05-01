import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from 'redux-thunk'


function portofolioReducer (state = [], action) {
    switch (action.type) {
        case 'portofolio/fetch':
            return state = action.payload;

        default:
            return
    }
}

const store = createStore(portofolioReducer, applyMiddleware(thunk));

export default store;
