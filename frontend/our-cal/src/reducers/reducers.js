import { combineReducers } from "redux";

const rootReducer = combineReducers({
    cards: cardsReducer,
    blockTemplate: blockTemplateReducer,
    palette: paletteReducer
});

export default rootReducer;

function cardsReducer(state = { all: [],}, action) {
    switch (action.type) {
        case 'FETCH_BLOCKS':
            return {all: action.payload};
        case 'CREATE_BLOCK':
            return {
                all: [...state.all, action.block.data]
            };
        case 'DELETE_BLOCK':
            let block = state.all.find(b => b.id === action.id);
            let index = state.all.indexOf(block);
            return {
                all: [...state.all.slice(0, index), ...state.all.slice(index + 1)]
            };
        default:
            return state;
    }
}

function blockTemplateReducer(state = {
    blockTemplate: [],
}, action) {
    switch (action.type) {
        case 'ADD_PIXEL':
            return {
                blockTemplate: [...state.blockTemplate, action.payload]
            };
        case 'COLOR_PIXEL':
            let pixel = state.blockTemplate.find(p => (
                p.x === (parseInt(action.payload.id.split(', ')[0])) &&
                p.y ===(parseInt(action.payload.id.split(', ')[1]))));
            let index = state.blockTemplate.indexOf(pixel);
            pixel.color = action.payload.color;
            pixel.color_variable = action.payload.pen;
            return {
                blockTemplate: [...state.blockTemplate.slice(0, index), pixel, ...state.blockTemplate.slice(index + 1)]
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