import { combineReducers } from "redux";

const rootReducer = combineReducers({
    cards: cardsReducer,
    block: blockReducer
});

export default rootReducer;

function cardsReducer(state = { all: [],}, action) {
    switch (action.type) {
        case 'FETCH_BLOCKS':
            console.log('fetching');
            return {all: action.payload};
        case 'DELETE_BLOCK':
            console.log('delete button clicked');
            let block = state.all.find(b => b.id === action.id);
            let index = state.all.indexOf(block);
            return {
                all: [...state.all.slice(0, index), ... state.all.slice(index + 1)]
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