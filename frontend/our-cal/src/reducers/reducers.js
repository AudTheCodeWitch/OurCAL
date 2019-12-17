import { combineReducers } from "redux";

const rootReducer = combineReducers({
    cards: cardsReducer,
    blocks: blockReducer
});

export default rootReducer;

function cardsReducer(state = { all: [],}, action) {
    switch (action.type) {
        case 'DELETE_BLOCK':
            console.log('delete button clicked');
            return {
                ...state
            }
        default:
            return state;
    }
}

function blockReducer(state = {}, action) {
    switch (action.type) {
        case 'SUBMIT_BLOCK':
            console.log('block submitted');
            return {
                ...state
            }
        default:
            return state;
    }
}