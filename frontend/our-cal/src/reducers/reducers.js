import { combineReducers } from "redux";

const rootReducer = combineReducers({
    cards: cardsReducer,
    block: blockReducer,
    palette: paletteReducer
});

export default rootReducer;

function cardsReducer(state = { all: [],}, action) {
    switch (action.type) {
        case 'FETCH_BLOCKS':
            return {all: action.payload};
        case 'DELETE_BLOCK':
            console.log('delete button clicked');
            let block = state.all.find(b => b.id === action.id);
            let index = state.all.indexOf(block);
            return {
                all: [...state.all.slice(0, index), ...state.all.slice(index + 1)]
            }
        default:
            return state;
    }
}

function blockReducer(state = {
    blockDetails: {},
    blockTemplate: {}
,}, action) {
    switch (action.type) {
        case 'SUBMIT_BLOCK':
            console.log('block submitted');
            return {
            };
        default:
            return state;
    }
}

function paletteReducer(state = {
    colors: {
        bg: '#fff',
        c1: '#fff',
        c2: '#fff',
        c3: '#fff',
        c4: '#fff',
        c5: '#fff'},
    pen: '',
}, action) {
    switch (action.type) {
        case 'CHANGE_COLOR':
            let button = action.data.button;
            let color = action.data.color;
            return {
                ...state,
                colors: {
                    ...state.colors,
                    [button]: color
                }
            };
        case 'SET_PEN':
            return {
                ...state,
                pen: action.penNumber
            };
        default:
            return state;
    }
}