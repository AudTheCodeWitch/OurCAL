import { combineReducers } from "redux";

const rootReducer = combineReducers({
    cards: cardsReducer,
    blocks: blockReducer
});

export default rootReducer;

function cardsReducer(state = { cards: [] }, action) {
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

function blockReducer(state = {
    all: [{
        id: "1",
        type: "block",
        attributes: {
            name: "White",
            user: {
                id: 1,
                username: "Aud",
                email: "audreacook7@gmail.com",
                created_at: "2019-12-12T18:35:01.749Z",
                updated_at: "2019-12-12T18:35:01.749Z"
            },
            difficulty: {
                id: 1,
                rating: "Beginner",
                created_at: "2019-12-12T18:40:02.861Z",
                updated_at: "2019-12-12T18:40:02.861Z"
            },
            pixels: [
                {
                    id: 448,
                    x: 23,
                    y: 8,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.463Z",
                    updated_at: "2019-12-12T20:10:40.463Z",
                    color_variable: "bg"
                },
                {
                    id: 447,
                    x: 22,
                    y: 8,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.461Z",
                    updated_at: "2019-12-12T20:10:40.461Z",
                    color_variable: "bg"
                },
                {
                    id: 446,
                    x: 21,
                    y: 8,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.459Z",
                    updated_at: "2019-12-12T20:10:40.459Z",
                    color_variable: "bg"
                },
                {
                    id: 445,
                    x: 20,
                    y: 8,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.457Z",
                    updated_at: "2019-12-12T20:10:40.457Z",
                    color_variable: "bg"
                },
                {
                    id: 444,
                    x: 19,
                    y: 8,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.454Z",
                    updated_at: "2019-12-12T20:10:40.454Z",
                    color_variable: "bg"
                },
                {
                    id: 443,
                    x: 18,
                    y: 8,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.452Z",
                    updated_at: "2019-12-12T20:10:40.452Z",
                    color_variable: "bg"
                },
                {
                    id: 442,
                    x: 17,
                    y: 8,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.450Z",
                    updated_at: "2019-12-12T20:10:40.450Z",
                    color_variable: "bg"
                },
                {
                    id: 441,
                    x: 16,
                    y: 8,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.447Z",
                    updated_at: "2019-12-12T20:10:40.447Z",
                    color_variable: "bg"
                },
                {
                    id: 440,
                    x: 15,
                    y: 8,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.444Z",
                    updated_at: "2019-12-12T20:10:40.444Z",
                    color_variable: "bg"
                },
                {
                    id: 439,
                    x: 14,
                    y: 8,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.441Z",
                    updated_at: "2019-12-12T20:10:40.441Z",
                    color_variable: "bg"
                },
                {
                    id: 438,
                    x: 13,
                    y: 8,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.438Z",
                    updated_at: "2019-12-12T20:10:40.438Z",
                    color_variable: "bg"
                },
                {
                    id: 437,
                    x: 12,
                    y: 8,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.436Z",
                    updated_at: "2019-12-12T20:10:40.436Z",
                    color_variable: "bg"
                },
                {
                    id: 436,
                    x: 11,
                    y: 8,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.434Z",
                    updated_at: "2019-12-12T20:10:40.434Z",
                    color_variable: "bg"
                },
                {
                    id: 435,
                    x: 10,
                    y: 8,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.432Z",
                    updated_at: "2019-12-12T20:10:40.432Z",
                    color_variable: "bg"
                },
                {
                    id: 434,
                    x: 9,
                    y: 8,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.429Z",
                    updated_at: "2019-12-12T20:10:40.429Z",
                    color_variable: "bg"
                },
                {
                    id: 433,
                    x: 8,
                    y: 8,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.419Z",
                    updated_at: "2019-12-12T20:10:40.419Z",
                    color_variable: "bg"
                },
                {
                    id: 432,
                    x: 7,
                    y: 8,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.416Z",
                    updated_at: "2019-12-12T20:10:40.416Z",
                    color_variable: "bg"
                },
                {
                    id: 431,
                    x: 6,
                    y: 8,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.414Z",
                    updated_at: "2019-12-12T20:10:40.414Z",
                    color_variable: "bg"
                },
                {
                    id: 430,
                    x: 5,
                    y: 8,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.412Z",
                    updated_at: "2019-12-12T20:10:40.412Z",
                    color_variable: "bg"
                },
                {
                    id: 429,
                    x: 4,
                    y: 8,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.410Z",
                    updated_at: "2019-12-12T20:10:40.410Z",
                    color_variable: "bg"
                },
                {
                    id: 428,
                    x: 3,
                    y: 8,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.407Z",
                    updated_at: "2019-12-12T20:10:40.407Z",
                    color_variable: "bg"
                },
                {
                    id: 427,
                    x: 2,
                    y: 8,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.404Z",
                    updated_at: "2019-12-12T20:10:40.404Z",
                    color_variable: "bg"
                },
                {
                    id: 426,
                    x: 1,
                    y: 8,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.402Z",
                    updated_at: "2019-12-12T20:10:40.402Z",
                    color_variable: "bg"
                },
                {
                    id: 425,
                    x: 25,
                    y: 9,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.400Z",
                    updated_at: "2019-12-12T20:10:40.400Z",
                    color_variable: "bg"
                },
                {
                    id: 424,
                    x: 24,
                    y: 9,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.398Z",
                    updated_at: "2019-12-12T20:10:40.398Z",
                    color_variable: "bg"
                },
                {
                    id: 423,
                    x: 23,
                    y: 9,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.396Z",
                    updated_at: "2019-12-12T20:10:40.396Z",
                    color_variable: "bg"
                },
                {
                    id: 422,
                    x: 22,
                    y: 9,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.393Z",
                    updated_at: "2019-12-12T20:10:40.393Z",
                    color_variable: "bg"
                },
                {
                    id: 421,
                    x: 21,
                    y: 9,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.391Z",
                    updated_at: "2019-12-12T20:10:40.391Z",
                    color_variable: "bg"
                },
                {
                    id: 420,
                    x: 20,
                    y: 9,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.388Z",
                    updated_at: "2019-12-12T20:10:40.388Z",
                    color_variable: "bg"
                },
                {
                    id: 419,
                    x: 19,
                    y: 9,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.385Z",
                    updated_at: "2019-12-12T20:10:40.385Z",
                    color_variable: "bg"
                },
                {
                    id: 418,
                    x: 18,
                    y: 9,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.383Z",
                    updated_at: "2019-12-12T20:10:40.383Z",
                    color_variable: "bg"
                },
                {
                    id: 417,
                    x: 17,
                    y: 9,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.381Z",
                    updated_at: "2019-12-12T20:10:40.381Z",
                    color_variable: "bg"
                },
                {
                    id: 416,
                    x: 16,
                    y: 9,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.376Z",
                    updated_at: "2019-12-12T20:10:40.376Z",
                    color_variable: "bg"
                },
                {
                    id: 415,
                    x: 15,
                    y: 9,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.374Z",
                    updated_at: "2019-12-12T20:10:40.374Z",
                    color_variable: "bg"
                },
                {
                    id: 414,
                    x: 14,
                    y: 9,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.372Z",
                    updated_at: "2019-12-12T20:10:40.372Z",
                    color_variable: "bg"
                },
                {
                    id: 413,
                    x: 13,
                    y: 9,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.370Z",
                    updated_at: "2019-12-12T20:10:40.370Z",
                    color_variable: "bg"
                },
                {
                    id: 412,
                    x: 12,
                    y: 9,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.367Z",
                    updated_at: "2019-12-12T20:10:40.367Z",
                    color_variable: "bg"
                },
                {
                    id: 411,
                    x: 11,
                    y: 9,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.365Z",
                    updated_at: "2019-12-12T20:10:40.365Z",
                    color_variable: "bg"
                },
                {
                    id: 410,
                    x: 10,
                    y: 9,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.362Z",
                    updated_at: "2019-12-12T20:10:40.362Z",
                    color_variable: "bg"
                },
                {
                    id: 409,
                    x: 9,
                    y: 9,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.360Z",
                    updated_at: "2019-12-12T20:10:40.360Z",
                    color_variable: "bg"
                },
                {
                    id: 408,
                    x: 8,
                    y: 9,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.357Z",
                    updated_at: "2019-12-12T20:10:40.357Z",
                    color_variable: "bg"
                },
                {
                    id: 407,
                    x: 7,
                    y: 9,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.355Z",
                    updated_at: "2019-12-12T20:10:40.355Z",
                    color_variable: "bg"
                },
                {
                    id: 406,
                    x: 6,
                    y: 9,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.353Z",
                    updated_at: "2019-12-12T20:10:40.353Z",
                    color_variable: "bg"
                },
                {
                    id: 405,
                    x: 5,
                    y: 9,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.348Z",
                    updated_at: "2019-12-12T20:10:40.348Z",
                    color_variable: "bg"
                },
                {
                    id: 404,
                    x: 4,
                    y: 9,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.345Z",
                    updated_at: "2019-12-12T20:10:40.345Z",
                    color_variable: "bg"
                },
                {
                    id: 403,
                    x: 3,
                    y: 9,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.343Z",
                    updated_at: "2019-12-12T20:10:40.343Z",
                    color_variable: "bg"
                },
                {
                    id: 402,
                    x: 2,
                    y: 9,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.340Z",
                    updated_at: "2019-12-12T20:10:40.340Z",
                    color_variable: "bg"
                },
                {
                    id: 401,
                    x: 1,
                    y: 9,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.338Z",
                    updated_at: "2019-12-12T20:10:40.338Z",
                    color_variable: "bg"
                },
                {
                    id: 400,
                    x: 25,
                    y: 10,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.336Z",
                    updated_at: "2019-12-12T20:10:40.336Z",
                    color_variable: "bg"
                },
                {
                    id: 399,
                    x: 24,
                    y: 10,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.333Z",
                    updated_at: "2019-12-12T20:10:40.333Z",
                    color_variable: "bg"
                },
                {
                    id: 398,
                    x: 23,
                    y: 10,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.331Z",
                    updated_at: "2019-12-12T20:10:40.331Z",
                    color_variable: "bg"
                },
                {
                    id: 397,
                    x: 22,
                    y: 10,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.329Z",
                    updated_at: "2019-12-12T20:10:40.329Z",
                    color_variable: "bg"
                },
                {
                    id: 396,
                    x: 21,
                    y: 10,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.327Z",
                    updated_at: "2019-12-12T20:10:40.327Z",
                    color_variable: "bg"
                },
                {
                    id: 395,
                    x: 20,
                    y: 10,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.325Z",
                    updated_at: "2019-12-12T20:10:40.325Z",
                    color_variable: "bg"
                },
                {
                    id: 394,
                    x: 19,
                    y: 10,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.322Z",
                    updated_at: "2019-12-12T20:10:40.322Z",
                    color_variable: "bg"
                },
                {
                    id: 393,
                    x: 18,
                    y: 10,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.317Z",
                    updated_at: "2019-12-12T20:10:40.317Z",
                    color_variable: "bg"
                },
                {
                    id: 392,
                    x: 17,
                    y: 10,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.315Z",
                    updated_at: "2019-12-12T20:10:40.315Z",
                    color_variable: "bg"
                },
                {
                    id: 391,
                    x: 16,
                    y: 10,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.313Z",
                    updated_at: "2019-12-12T20:10:40.313Z",
                    color_variable: "bg"
                },
                {
                    id: 390,
                    x: 15,
                    y: 10,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.311Z",
                    updated_at: "2019-12-12T20:10:40.311Z",
                    color_variable: "bg"
                },
                {
                    id: 389,
                    x: 14,
                    y: 10,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.308Z",
                    updated_at: "2019-12-12T20:10:40.308Z",
                    color_variable: "bg"
                },
                {
                    id: 388,
                    x: 13,
                    y: 10,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.306Z",
                    updated_at: "2019-12-12T20:10:40.306Z",
                    color_variable: "bg"
                },
                {
                    id: 387,
                    x: 12,
                    y: 10,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.304Z",
                    updated_at: "2019-12-12T20:10:40.304Z",
                    color_variable: "bg"
                },
                {
                    id: 386,
                    x: 11,
                    y: 10,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.301Z",
                    updated_at: "2019-12-12T20:10:40.301Z",
                    color_variable: "bg"
                },
                {
                    id: 385,
                    x: 10,
                    y: 10,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.299Z",
                    updated_at: "2019-12-12T20:10:40.299Z",
                    color_variable: "bg"
                },
                {
                    id: 384,
                    x: 9,
                    y: 10,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.297Z",
                    updated_at: "2019-12-12T20:10:40.297Z",
                    color_variable: "bg"
                },
                {
                    id: 383,
                    x: 8,
                    y: 10,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.294Z",
                    updated_at: "2019-12-12T20:10:40.294Z",
                    color_variable: "bg"
                },
                {
                    id: 382,
                    x: 7,
                    y: 10,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.292Z",
                    updated_at: "2019-12-12T20:10:40.292Z",
                    color_variable: "bg"
                },
                {
                    id: 381,
                    x: 6,
                    y: 10,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.290Z",
                    updated_at: "2019-12-12T20:10:40.290Z",
                    color_variable: "bg"
                },
                {
                    id: 380,
                    x: 5,
                    y: 10,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.287Z",
                    updated_at: "2019-12-12T20:10:40.287Z",
                    color_variable: "bg"
                },
                {
                    id: 379,
                    x: 4,
                    y: 10,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.285Z",
                    updated_at: "2019-12-12T20:10:40.285Z",
                    color_variable: "bg"
                },
                {
                    id: 378,
                    x: 3,
                    y: 10,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.281Z",
                    updated_at: "2019-12-12T20:10:40.281Z",
                    color_variable: "bg"
                },
                {
                    id: 377,
                    x: 2,
                    y: 10,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.279Z",
                    updated_at: "2019-12-12T20:10:40.279Z",
                    color_variable: "bg"
                },
                {
                    id: 376,
                    x: 1,
                    y: 10,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.276Z",
                    updated_at: "2019-12-12T20:10:40.276Z",
                    color_variable: "bg"
                },
                {
                    id: 375,
                    x: 25,
                    y: 11,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.274Z",
                    updated_at: "2019-12-12T20:10:40.274Z",
                    color_variable: "bg"
                },
                {
                    id: 374,
                    x: 24,
                    y: 11,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.272Z",
                    updated_at: "2019-12-12T20:10:40.272Z",
                    color_variable: "bg"
                },
                {
                    id: 373,
                    x: 23,
                    y: 11,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.270Z",
                    updated_at: "2019-12-12T20:10:40.270Z",
                    color_variable: "bg"
                },
                {
                    id: 372,
                    x: 22,
                    y: 11,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.267Z",
                    updated_at: "2019-12-12T20:10:40.267Z",
                    color_variable: "bg"
                },
                {
                    id: 371,
                    x: 21,
                    y: 11,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.265Z",
                    updated_at: "2019-12-12T20:10:40.265Z",
                    color_variable: "bg"
                },
                {
                    id: 370,
                    x: 20,
                    y: 11,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.263Z",
                    updated_at: "2019-12-12T20:10:40.263Z",
                    color_variable: "bg"
                },
                {
                    id: 369,
                    x: 19,
                    y: 11,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.261Z",
                    updated_at: "2019-12-12T20:10:40.261Z",
                    color_variable: "bg"
                },
                {
                    id: 368,
                    x: 18,
                    y: 11,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.259Z",
                    updated_at: "2019-12-12T20:10:40.259Z",
                    color_variable: "bg"
                },
                {
                    id: 367,
                    x: 17,
                    y: 11,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.256Z",
                    updated_at: "2019-12-12T20:10:40.256Z",
                    color_variable: "bg"
                },
                {
                    id: 366,
                    x: 16,
                    y: 11,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.251Z",
                    updated_at: "2019-12-12T20:10:40.251Z",
                    color_variable: "bg"
                },
                {
                    id: 365,
                    x: 15,
                    y: 11,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.249Z",
                    updated_at: "2019-12-12T20:10:40.249Z",
                    color_variable: "bg"
                },
                {
                    id: 364,
                    x: 14,
                    y: 11,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.247Z",
                    updated_at: "2019-12-12T20:10:40.247Z",
                    color_variable: "bg"
                },
                {
                    id: 363,
                    x: 13,
                    y: 11,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.245Z",
                    updated_at: "2019-12-12T20:10:40.245Z",
                    color_variable: "bg"
                },
                {
                    id: 362,
                    x: 12,
                    y: 11,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.243Z",
                    updated_at: "2019-12-12T20:10:40.243Z",
                    color_variable: "bg"
                },
                {
                    id: 361,
                    x: 11,
                    y: 11,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.240Z",
                    updated_at: "2019-12-12T20:10:40.240Z",
                    color_variable: "bg"
                },
                {
                    id: 360,
                    x: 10,
                    y: 11,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.238Z",
                    updated_at: "2019-12-12T20:10:40.238Z",
                    color_variable: "bg"
                },
                {
                    id: 359,
                    x: 9,
                    y: 11,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.236Z",
                    updated_at: "2019-12-12T20:10:40.236Z",
                    color_variable: "bg"
                },
                {
                    id: 358,
                    x: 8,
                    y: 11,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.233Z",
                    updated_at: "2019-12-12T20:10:40.233Z",
                    color_variable: "bg"
                },
                {
                    id: 357,
                    x: 7,
                    y: 11,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.230Z",
                    updated_at: "2019-12-12T20:10:40.230Z",
                    color_variable: "bg"
                },
                {
                    id: 356,
                    x: 6,
                    y: 11,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.228Z",
                    updated_at: "2019-12-12T20:10:40.228Z",
                    color_variable: "bg"
                },
                {
                    id: 355,
                    x: 5,
                    y: 11,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.224Z",
                    updated_at: "2019-12-12T20:10:40.224Z",
                    color_variable: "bg"
                },
                {
                    id: 354,
                    x: 4,
                    y: 11,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.221Z",
                    updated_at: "2019-12-12T20:10:40.221Z",
                    color_variable: "bg"
                },
                {
                    id: 353,
                    x: 3,
                    y: 11,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.219Z",
                    updated_at: "2019-12-12T20:10:40.219Z",
                    color_variable: "bg"
                },
                {
                    id: 352,
                    x: 2,
                    y: 11,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.216Z",
                    updated_at: "2019-12-12T20:10:40.216Z",
                    color_variable: "bg"
                },
                {
                    id: 351,
                    x: 1,
                    y: 11,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.214Z",
                    updated_at: "2019-12-12T20:10:40.214Z",
                    color_variable: "bg"
                },
                {
                    id: 350,
                    x: 25,
                    y: 12,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.212Z",
                    updated_at: "2019-12-12T20:10:40.212Z",
                    color_variable: "bg"
                },
                {
                    id: 349,
                    x: 24,
                    y: 12,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.210Z",
                    updated_at: "2019-12-12T20:10:40.210Z",
                    color_variable: "bg"
                },
                {
                    id: 348,
                    x: 23,
                    y: 12,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.207Z",
                    updated_at: "2019-12-12T20:10:40.207Z",
                    color_variable: "bg"
                },
                {
                    id: 347,
                    x: 22,
                    y: 12,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.205Z",
                    updated_at: "2019-12-12T20:10:40.205Z",
                    color_variable: "bg"
                },
                {
                    id: 346,
                    x: 21,
                    y: 12,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.194Z",
                    updated_at: "2019-12-12T20:10:40.194Z",
                    color_variable: "bg"
                },
                {
                    id: 345,
                    x: 20,
                    y: 12,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.192Z",
                    updated_at: "2019-12-12T20:10:40.192Z",
                    color_variable: "bg"
                },
                {
                    id: 344,
                    x: 19,
                    y: 12,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.190Z",
                    updated_at: "2019-12-12T20:10:40.190Z",
                    color_variable: "bg"
                },
                {
                    id: 343,
                    x: 18,
                    y: 12,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.186Z",
                    updated_at: "2019-12-12T20:10:40.186Z",
                    color_variable: "bg"
                },
                {
                    id: 342,
                    x: 17,
                    y: 12,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.184Z",
                    updated_at: "2019-12-12T20:10:40.184Z",
                    color_variable: "bg"
                },
                {
                    id: 341,
                    x: 16,
                    y: 12,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.182Z",
                    updated_at: "2019-12-12T20:10:40.182Z",
                    color_variable: "bg"
                },
                {
                    id: 340,
                    x: 15,
                    y: 12,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.179Z",
                    updated_at: "2019-12-12T20:10:40.179Z",
                    color_variable: "bg"
                },
                {
                    id: 339,
                    x: 14,
                    y: 12,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.177Z",
                    updated_at: "2019-12-12T20:10:40.177Z",
                    color_variable: "bg"
                },
                {
                    id: 338,
                    x: 13,
                    y: 12,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.175Z",
                    updated_at: "2019-12-12T20:10:40.175Z",
                    color_variable: "bg"
                },
                {
                    id: 337,
                    x: 12,
                    y: 12,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.172Z",
                    updated_at: "2019-12-12T20:10:40.172Z",
                    color_variable: "bg"
                },
                {
                    id: 336,
                    x: 11,
                    y: 12,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.170Z",
                    updated_at: "2019-12-12T20:10:40.170Z",
                    color_variable: "bg"
                },
                {
                    id: 335,
                    x: 10,
                    y: 12,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.168Z",
                    updated_at: "2019-12-12T20:10:40.168Z",
                    color_variable: "bg"
                },
                {
                    id: 334,
                    x: 9,
                    y: 12,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.165Z",
                    updated_at: "2019-12-12T20:10:40.165Z",
                    color_variable: "bg"
                },
                {
                    id: 333,
                    x: 8,
                    y: 12,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.163Z",
                    updated_at: "2019-12-12T20:10:40.163Z",
                    color_variable: "bg"
                },
                {
                    id: 332,
                    x: 7,
                    y: 12,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.161Z",
                    updated_at: "2019-12-12T20:10:40.161Z",
                    color_variable: "bg"
                },
                {
                    id: 331,
                    x: 6,
                    y: 12,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.157Z",
                    updated_at: "2019-12-12T20:10:40.157Z",
                    color_variable: "bg"
                },
                {
                    id: 330,
                    x: 5,
                    y: 12,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.155Z",
                    updated_at: "2019-12-12T20:10:40.155Z",
                    color_variable: "bg"
                },
                {
                    id: 329,
                    x: 4,
                    y: 12,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.153Z",
                    updated_at: "2019-12-12T20:10:40.153Z",
                    color_variable: "bg"
                },
                {
                    id: 328,
                    x: 3,
                    y: 12,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.151Z",
                    updated_at: "2019-12-12T20:10:40.151Z",
                    color_variable: "bg"
                },
                {
                    id: 327,
                    x: 2,
                    y: 12,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.148Z",
                    updated_at: "2019-12-12T20:10:40.148Z",
                    color_variable: "bg"
                },
                {
                    id: 326,
                    x: 1,
                    y: 12,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.146Z",
                    updated_at: "2019-12-12T20:10:40.146Z",
                    color_variable: "bg"
                },
                {
                    id: 325,
                    x: 25,
                    y: 13,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.143Z",
                    updated_at: "2019-12-12T20:10:40.143Z",
                    color_variable: "bg"
                },
                {
                    id: 324,
                    x: 24,
                    y: 13,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.142Z",
                    updated_at: "2019-12-12T20:10:40.142Z",
                    color_variable: "bg"
                },
                {
                    id: 323,
                    x: 23,
                    y: 13,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.139Z",
                    updated_at: "2019-12-12T20:10:40.139Z",
                    color_variable: "bg"
                },
                {
                    id: 322,
                    x: 22,
                    y: 13,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.137Z",
                    updated_at: "2019-12-12T20:10:40.137Z",
                    color_variable: "bg"
                },
                {
                    id: 321,
                    x: 21,
                    y: 13,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.134Z",
                    updated_at: "2019-12-12T20:10:40.134Z",
                    color_variable: "bg"
                },
                {
                    id: 320,
                    x: 20,
                    y: 13,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.130Z",
                    updated_at: "2019-12-12T20:10:40.130Z",
                    color_variable: "bg"
                },
                {
                    id: 319,
                    x: 19,
                    y: 13,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.127Z",
                    updated_at: "2019-12-12T20:10:40.127Z",
                    color_variable: "bg"
                },
                {
                    id: 318,
                    x: 18,
                    y: 13,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.125Z",
                    updated_at: "2019-12-12T20:10:40.125Z",
                    color_variable: "bg"
                },
                {
                    id: 317,
                    x: 17,
                    y: 13,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.123Z",
                    updated_at: "2019-12-12T20:10:40.123Z",
                    color_variable: "bg"
                },
                {
                    id: 316,
                    x: 16,
                    y: 13,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.121Z",
                    updated_at: "2019-12-12T20:10:40.121Z",
                    color_variable: "bg"
                },
                {
                    id: 315,
                    x: 15,
                    y: 13,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.119Z",
                    updated_at: "2019-12-12T20:10:40.119Z",
                    color_variable: "bg"
                },
                {
                    id: 314,
                    x: 14,
                    y: 13,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.117Z",
                    updated_at: "2019-12-12T20:10:40.117Z",
                    color_variable: "bg"
                },
                {
                    id: 313,
                    x: 13,
                    y: 13,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.114Z",
                    updated_at: "2019-12-12T20:10:40.114Z",
                    color_variable: "bg"
                },
                {
                    id: 312,
                    x: 12,
                    y: 13,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.112Z",
                    updated_at: "2019-12-12T20:10:40.112Z",
                    color_variable: "bg"
                },
                {
                    id: 311,
                    x: 11,
                    y: 13,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.110Z",
                    updated_at: "2019-12-12T20:10:40.110Z",
                    color_variable: "bg"
                },
                {
                    id: 310,
                    x: 10,
                    y: 13,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.108Z",
                    updated_at: "2019-12-12T20:10:40.108Z",
                    color_variable: "bg"
                },
                {
                    id: 309,
                    x: 9,
                    y: 13,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.105Z",
                    updated_at: "2019-12-12T20:10:40.105Z",
                    color_variable: "bg"
                },
                {
                    id: 308,
                    x: 8,
                    y: 13,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.101Z",
                    updated_at: "2019-12-12T20:10:40.101Z",
                    color_variable: "bg"
                },
                {
                    id: 307,
                    x: 7,
                    y: 13,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.098Z",
                    updated_at: "2019-12-12T20:10:40.098Z",
                    color_variable: "bg"
                },
                {
                    id: 306,
                    x: 6,
                    y: 13,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.096Z",
                    updated_at: "2019-12-12T20:10:40.096Z",
                    color_variable: "bg"
                },
                {
                    id: 305,
                    x: 5,
                    y: 13,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.094Z",
                    updated_at: "2019-12-12T20:10:40.094Z",
                    color_variable: "bg"
                },
                {
                    id: 304,
                    x: 4,
                    y: 13,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.092Z",
                    updated_at: "2019-12-12T20:10:40.092Z",
                    color_variable: "bg"
                },
                {
                    id: 303,
                    x: 3,
                    y: 13,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.089Z",
                    updated_at: "2019-12-12T20:10:40.089Z",
                    color_variable: "bg"
                },
                {
                    id: 302,
                    x: 2,
                    y: 13,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.087Z",
                    updated_at: "2019-12-12T20:10:40.087Z",
                    color_variable: "bg"
                },
                {
                    id: 301,
                    x: 1,
                    y: 13,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.085Z",
                    updated_at: "2019-12-12T20:10:40.085Z",
                    color_variable: "bg"
                },
                {
                    id: 300,
                    x: 25,
                    y: 14,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.083Z",
                    updated_at: "2019-12-12T20:10:40.083Z",
                    color_variable: "bg"
                },
                {
                    id: 299,
                    x: 24,
                    y: 14,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.081Z",
                    updated_at: "2019-12-12T20:10:40.081Z",
                    color_variable: "bg"
                },
                {
                    id: 298,
                    x: 23,
                    y: 14,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.078Z",
                    updated_at: "2019-12-12T20:10:40.078Z",
                    color_variable: "bg"
                },
                {
                    id: 297,
                    x: 22,
                    y: 14,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.076Z",
                    updated_at: "2019-12-12T20:10:40.076Z",
                    color_variable: "bg"
                },
                {
                    id: 296,
                    x: 21,
                    y: 14,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.074Z",
                    updated_at: "2019-12-12T20:10:40.074Z",
                    color_variable: "bg"
                },
                {
                    id: 295,
                    x: 20,
                    y: 14,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.072Z",
                    updated_at: "2019-12-12T20:10:40.072Z",
                    color_variable: "bg"
                },
                {
                    id: 294,
                    x: 19,
                    y: 14,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.069Z",
                    updated_at: "2019-12-12T20:10:40.069Z",
                    color_variable: "bg"
                },
                {
                    id: 293,
                    x: 18,
                    y: 14,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.067Z",
                    updated_at: "2019-12-12T20:10:40.067Z",
                    color_variable: "bg"
                },
                {
                    id: 292,
                    x: 17,
                    y: 14,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.064Z",
                    updated_at: "2019-12-12T20:10:40.064Z",
                    color_variable: "bg"
                },
                {
                    id: 291,
                    x: 16,
                    y: 14,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.060Z",
                    updated_at: "2019-12-12T20:10:40.060Z",
                    color_variable: "bg"
                },
                {
                    id: 290,
                    x: 15,
                    y: 14,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.058Z",
                    updated_at: "2019-12-12T20:10:40.058Z",
                    color_variable: "bg"
                },
                {
                    id: 289,
                    x: 14,
                    y: 14,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.056Z",
                    updated_at: "2019-12-12T20:10:40.056Z",
                    color_variable: "bg"
                },
                {
                    id: 288,
                    x: 13,
                    y: 14,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.053Z",
                    updated_at: "2019-12-12T20:10:40.053Z",
                    color_variable: "bg"
                },
                {
                    id: 287,
                    x: 12,
                    y: 14,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.051Z",
                    updated_at: "2019-12-12T20:10:40.051Z",
                    color_variable: "bg"
                },
                {
                    id: 286,
                    x: 11,
                    y: 14,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.049Z",
                    updated_at: "2019-12-12T20:10:40.049Z",
                    color_variable: "bg"
                },
                {
                    id: 285,
                    x: 10,
                    y: 14,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.046Z",
                    updated_at: "2019-12-12T20:10:40.046Z",
                    color_variable: "bg"
                },
                {
                    id: 284,
                    x: 9,
                    y: 14,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.044Z",
                    updated_at: "2019-12-12T20:10:40.044Z",
                    color_variable: "bg"
                },
                {
                    id: 283,
                    x: 8,
                    y: 14,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.041Z",
                    updated_at: "2019-12-12T20:10:40.041Z",
                    color_variable: "bg"
                },
                {
                    id: 282,
                    x: 7,
                    y: 14,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.039Z",
                    updated_at: "2019-12-12T20:10:40.039Z",
                    color_variable: "bg"
                },
                {
                    id: 281,
                    x: 6,
                    y: 14,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.036Z",
                    updated_at: "2019-12-12T20:10:40.036Z",
                    color_variable: "bg"
                },
                {
                    id: 280,
                    x: 5,
                    y: 14,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.033Z",
                    updated_at: "2019-12-12T20:10:40.033Z",
                    color_variable: "bg"
                },
                {
                    id: 279,
                    x: 4,
                    y: 14,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.030Z",
                    updated_at: "2019-12-12T20:10:40.030Z",
                    color_variable: "bg"
                },
                {
                    id: 278,
                    x: 3,
                    y: 14,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.028Z",
                    updated_at: "2019-12-12T20:10:40.028Z",
                    color_variable: "bg"
                },
                {
                    id: 277,
                    x: 2,
                    y: 14,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.026Z",
                    updated_at: "2019-12-12T20:10:40.026Z",
                    color_variable: "bg"
                },
                {
                    id: 276,
                    x: 1,
                    y: 14,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.024Z",
                    updated_at: "2019-12-12T20:10:40.024Z",
                    color_variable: "bg"
                },
                {
                    id: 275,
                    x: 25,
                    y: 15,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.022Z",
                    updated_at: "2019-12-12T20:10:40.022Z",
                    color_variable: "bg"
                },
                {
                    id: 274,
                    x: 24,
                    y: 15,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.019Z",
                    updated_at: "2019-12-12T20:10:40.019Z",
                    color_variable: "bg"
                },
                {
                    id: 273,
                    x: 23,
                    y: 15,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.017Z",
                    updated_at: "2019-12-12T20:10:40.017Z",
                    color_variable: "bg"
                },
                {
                    id: 272,
                    x: 22,
                    y: 15,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.015Z",
                    updated_at: "2019-12-12T20:10:40.015Z",
                    color_variable: "bg"
                },
                {
                    id: 271,
                    x: 21,
                    y: 15,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.013Z",
                    updated_at: "2019-12-12T20:10:40.013Z",
                    color_variable: "bg"
                },
                {
                    id: 270,
                    x: 20,
                    y: 15,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.010Z",
                    updated_at: "2019-12-12T20:10:40.010Z",
                    color_variable: "bg"
                },
                {
                    id: 269,
                    x: 19,
                    y: 15,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.008Z",
                    updated_at: "2019-12-12T20:10:40.008Z",
                    color_variable: "bg"
                },
                {
                    id: 268,
                    x: 18,
                    y: 15,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.004Z",
                    updated_at: "2019-12-12T20:10:40.004Z",
                    color_variable: "bg"
                },
                {
                    id: 267,
                    x: 17,
                    y: 15,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.001Z",
                    updated_at: "2019-12-12T20:10:40.001Z",
                    color_variable: "bg"
                },
                {
                    id: 266,
                    x: 16,
                    y: 15,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.999Z",
                    updated_at: "2019-12-12T20:10:39.999Z",
                    color_variable: "bg"
                },
                {
                    id: 265,
                    x: 15,
                    y: 15,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.997Z",
                    updated_at: "2019-12-12T20:10:39.997Z",
                    color_variable: "bg"
                },
                {
                    id: 264,
                    x: 14,
                    y: 15,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.995Z",
                    updated_at: "2019-12-12T20:10:39.995Z",
                    color_variable: "bg"
                },
                {
                    id: 263,
                    x: 13,
                    y: 15,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.993Z",
                    updated_at: "2019-12-12T20:10:39.993Z",
                    color_variable: "bg"
                },
                {
                    id: 262,
                    x: 12,
                    y: 15,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.990Z",
                    updated_at: "2019-12-12T20:10:39.990Z",
                    color_variable: "bg"
                },
                {
                    id: 261,
                    x: 11,
                    y: 15,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.988Z",
                    updated_at: "2019-12-12T20:10:39.988Z",
                    color_variable: "bg"
                },
                {
                    id: 260,
                    x: 10,
                    y: 15,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.986Z",
                    updated_at: "2019-12-12T20:10:39.986Z",
                    color_variable: "bg"
                },
                {
                    id: 259,
                    x: 9,
                    y: 15,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.983Z",
                    updated_at: "2019-12-12T20:10:39.983Z",
                    color_variable: "bg"
                },
                {
                    id: 258,
                    x: 8,
                    y: 15,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.973Z",
                    updated_at: "2019-12-12T20:10:39.973Z",
                    color_variable: "bg"
                },
                {
                    id: 257,
                    x: 7,
                    y: 15,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.969Z",
                    updated_at: "2019-12-12T20:10:39.969Z",
                    color_variable: "bg"
                },
                {
                    id: 256,
                    x: 6,
                    y: 15,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.966Z",
                    updated_at: "2019-12-12T20:10:39.966Z",
                    color_variable: "bg"
                },
                {
                    id: 255,
                    x: 5,
                    y: 15,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.964Z",
                    updated_at: "2019-12-12T20:10:39.964Z",
                    color_variable: "bg"
                },
                {
                    id: 254,
                    x: 4,
                    y: 15,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.962Z",
                    updated_at: "2019-12-12T20:10:39.962Z",
                    color_variable: "bg"
                },
                {
                    id: 253,
                    x: 3,
                    y: 15,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.960Z",
                    updated_at: "2019-12-12T20:10:39.960Z",
                    color_variable: "bg"
                },
                {
                    id: 252,
                    x: 2,
                    y: 15,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.958Z",
                    updated_at: "2019-12-12T20:10:39.958Z",
                    color_variable: "bg"
                },
                {
                    id: 251,
                    x: 1,
                    y: 15,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.955Z",
                    updated_at: "2019-12-12T20:10:39.955Z",
                    color_variable: "bg"
                },
                {
                    id: 250,
                    x: 25,
                    y: 16,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.953Z",
                    updated_at: "2019-12-12T20:10:39.953Z",
                    color_variable: "bg"
                },
                {
                    id: 249,
                    x: 24,
                    y: 16,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.951Z",
                    updated_at: "2019-12-12T20:10:39.951Z",
                    color_variable: "bg"
                },
                {
                    id: 248,
                    x: 23,
                    y: 16,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.948Z",
                    updated_at: "2019-12-12T20:10:39.948Z",
                    color_variable: "bg"
                },
                {
                    id: 247,
                    x: 22,
                    y: 16,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.946Z",
                    updated_at: "2019-12-12T20:10:39.946Z",
                    color_variable: "bg"
                },
                {
                    id: 246,
                    x: 21,
                    y: 16,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.944Z",
                    updated_at: "2019-12-12T20:10:39.944Z",
                    color_variable: "bg"
                },
                {
                    id: 245,
                    x: 20,
                    y: 16,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.941Z",
                    updated_at: "2019-12-12T20:10:39.941Z",
                    color_variable: "bg"
                },
                {
                    id: 244,
                    x: 19,
                    y: 16,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.939Z",
                    updated_at: "2019-12-12T20:10:39.939Z",
                    color_variable: "bg"
                },
                {
                    id: 243,
                    x: 18,
                    y: 16,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.937Z",
                    updated_at: "2019-12-12T20:10:39.937Z",
                    color_variable: "bg"
                },
                {
                    id: 242,
                    x: 17,
                    y: 16,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.935Z",
                    updated_at: "2019-12-12T20:10:39.935Z",
                    color_variable: "bg"
                },
                {
                    id: 241,
                    x: 16,
                    y: 16,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.933Z",
                    updated_at: "2019-12-12T20:10:39.933Z",
                    color_variable: "bg"
                },
                {
                    id: 240,
                    x: 15,
                    y: 16,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.931Z",
                    updated_at: "2019-12-12T20:10:39.931Z",
                    color_variable: "bg"
                },
                {
                    id: 239,
                    x: 14,
                    y: 16,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.929Z",
                    updated_at: "2019-12-12T20:10:39.929Z",
                    color_variable: "bg"
                },
                {
                    id: 238,
                    x: 13,
                    y: 16,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.926Z",
                    updated_at: "2019-12-12T20:10:39.926Z",
                    color_variable: "bg"
                },
                {
                    id: 237,
                    x: 12,
                    y: 16,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.924Z",
                    updated_at: "2019-12-12T20:10:39.924Z",
                    color_variable: "bg"
                },
                {
                    id: 236,
                    x: 11,
                    y: 16,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.922Z",
                    updated_at: "2019-12-12T20:10:39.922Z",
                    color_variable: "bg"
                },
                {
                    id: 235,
                    x: 10,
                    y: 16,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.920Z",
                    updated_at: "2019-12-12T20:10:39.920Z",
                    color_variable: "bg"
                },
                {
                    id: 234,
                    x: 9,
                    y: 16,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.917Z",
                    updated_at: "2019-12-12T20:10:39.917Z",
                    color_variable: "bg"
                },
                {
                    id: 233,
                    x: 8,
                    y: 16,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.915Z",
                    updated_at: "2019-12-12T20:10:39.915Z",
                    color_variable: "bg"
                },
                {
                    id: 232,
                    x: 7,
                    y: 16,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.910Z",
                    updated_at: "2019-12-12T20:10:39.910Z",
                    color_variable: "bg"
                },
                {
                    id: 231,
                    x: 6,
                    y: 16,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.908Z",
                    updated_at: "2019-12-12T20:10:39.908Z",
                    color_variable: "bg"
                },
                {
                    id: 230,
                    x: 5,
                    y: 16,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.906Z",
                    updated_at: "2019-12-12T20:10:39.906Z",
                    color_variable: "bg"
                },
                {
                    id: 229,
                    x: 4,
                    y: 16,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.904Z",
                    updated_at: "2019-12-12T20:10:39.904Z",
                    color_variable: "bg"
                },
                {
                    id: 228,
                    x: 3,
                    y: 16,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.902Z",
                    updated_at: "2019-12-12T20:10:39.902Z",
                    color_variable: "bg"
                },
                {
                    id: 227,
                    x: 2,
                    y: 16,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.900Z",
                    updated_at: "2019-12-12T20:10:39.900Z",
                    color_variable: "bg"
                },
                {
                    id: 226,
                    x: 1,
                    y: 16,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.899Z",
                    updated_at: "2019-12-12T20:10:39.899Z",
                    color_variable: "bg"
                },
                {
                    id: 225,
                    x: 25,
                    y: 17,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.897Z",
                    updated_at: "2019-12-12T20:10:39.897Z",
                    color_variable: "bg"
                },
                {
                    id: 224,
                    x: 24,
                    y: 17,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.895Z",
                    updated_at: "2019-12-12T20:10:39.895Z",
                    color_variable: "bg"
                },
                {
                    id: 223,
                    x: 23,
                    y: 17,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.893Z",
                    updated_at: "2019-12-12T20:10:39.893Z",
                    color_variable: "bg"
                },
                {
                    id: 222,
                    x: 22,
                    y: 17,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.891Z",
                    updated_at: "2019-12-12T20:10:39.891Z",
                    color_variable: "bg"
                },
                {
                    id: 221,
                    x: 21,
                    y: 17,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.889Z",
                    updated_at: "2019-12-12T20:10:39.889Z",
                    color_variable: "bg"
                },
                {
                    id: 220,
                    x: 20,
                    y: 17,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.887Z",
                    updated_at: "2019-12-12T20:10:39.887Z",
                    color_variable: "bg"
                },
                {
                    id: 219,
                    x: 19,
                    y: 17,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.886Z",
                    updated_at: "2019-12-12T20:10:39.886Z",
                    color_variable: "bg"
                },
                {
                    id: 218,
                    x: 18,
                    y: 17,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.884Z",
                    updated_at: "2019-12-12T20:10:39.884Z",
                    color_variable: "bg"
                },
                {
                    id: 217,
                    x: 17,
                    y: 17,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.882Z",
                    updated_at: "2019-12-12T20:10:39.882Z",
                    color_variable: "bg"
                },
                {
                    id: 216,
                    x: 16,
                    y: 17,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.880Z",
                    updated_at: "2019-12-12T20:10:39.880Z",
                    color_variable: "bg"
                },
                {
                    id: 215,
                    x: 15,
                    y: 17,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.878Z",
                    updated_at: "2019-12-12T20:10:39.878Z",
                    color_variable: "bg"
                },
                {
                    id: 214,
                    x: 14,
                    y: 17,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.876Z",
                    updated_at: "2019-12-12T20:10:39.876Z",
                    color_variable: "bg"
                },
                {
                    id: 213,
                    x: 13,
                    y: 17,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.874Z",
                    updated_at: "2019-12-12T20:10:39.874Z",
                    color_variable: "bg"
                },
                {
                    id: 212,
                    x: 12,
                    y: 17,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.870Z",
                    updated_at: "2019-12-12T20:10:39.870Z",
                    color_variable: "bg"
                },
                {
                    id: 211,
                    x: 11,
                    y: 17,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.868Z",
                    updated_at: "2019-12-12T20:10:39.868Z",
                    color_variable: "bg"
                },
                {
                    id: 210,
                    x: 10,
                    y: 17,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.867Z",
                    updated_at: "2019-12-12T20:10:39.867Z",
                    color_variable: "bg"
                },
                {
                    id: 209,
                    x: 9,
                    y: 17,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.865Z",
                    updated_at: "2019-12-12T20:10:39.865Z",
                    color_variable: "bg"
                },
                {
                    id: 208,
                    x: 8,
                    y: 17,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.863Z",
                    updated_at: "2019-12-12T20:10:39.863Z",
                    color_variable: "bg"
                },
                {
                    id: 207,
                    x: 7,
                    y: 17,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.861Z",
                    updated_at: "2019-12-12T20:10:39.861Z",
                    color_variable: "bg"
                },
                {
                    id: 206,
                    x: 6,
                    y: 17,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.859Z",
                    updated_at: "2019-12-12T20:10:39.859Z",
                    color_variable: "bg"
                },
                {
                    id: 205,
                    x: 5,
                    y: 17,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.857Z",
                    updated_at: "2019-12-12T20:10:39.857Z",
                    color_variable: "bg"
                },
                {
                    id: 204,
                    x: 4,
                    y: 17,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.855Z",
                    updated_at: "2019-12-12T20:10:39.855Z",
                    color_variable: "bg"
                },
                {
                    id: 203,
                    x: 3,
                    y: 17,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.853Z",
                    updated_at: "2019-12-12T20:10:39.853Z",
                    color_variable: "bg"
                },
                {
                    id: 202,
                    x: 2,
                    y: 17,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.851Z",
                    updated_at: "2019-12-12T20:10:39.851Z",
                    color_variable: "bg"
                },
                {
                    id: 201,
                    x: 1,
                    y: 17,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.850Z",
                    updated_at: "2019-12-12T20:10:39.850Z",
                    color_variable: "bg"
                },
                {
                    id: 200,
                    x: 25,
                    y: 18,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.848Z",
                    updated_at: "2019-12-12T20:10:39.848Z",
                    color_variable: "bg"
                },
                {
                    id: 199,
                    x: 24,
                    y: 18,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.845Z",
                    updated_at: "2019-12-12T20:10:39.845Z",
                    color_variable: "bg"
                },
                {
                    id: 198,
                    x: 23,
                    y: 18,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.842Z",
                    updated_at: "2019-12-12T20:10:39.842Z",
                    color_variable: "bg"
                },
                {
                    id: 197,
                    x: 22,
                    y: 18,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.841Z",
                    updated_at: "2019-12-12T20:10:39.841Z",
                    color_variable: "bg"
                },
                {
                    id: 196,
                    x: 21,
                    y: 18,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.839Z",
                    updated_at: "2019-12-12T20:10:39.839Z",
                    color_variable: "bg"
                },
                {
                    id: 195,
                    x: 20,
                    y: 18,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.837Z",
                    updated_at: "2019-12-12T20:10:39.837Z",
                    color_variable: "bg"
                },
                {
                    id: 194,
                    x: 19,
                    y: 18,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.835Z",
                    updated_at: "2019-12-12T20:10:39.835Z",
                    color_variable: "bg"
                },
                {
                    id: 193,
                    x: 18,
                    y: 18,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.833Z",
                    updated_at: "2019-12-12T20:10:39.833Z",
                    color_variable: "bg"
                },
                {
                    id: 192,
                    x: 17,
                    y: 18,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.831Z",
                    updated_at: "2019-12-12T20:10:39.831Z",
                    color_variable: "bg"
                },
                {
                    id: 191,
                    x: 16,
                    y: 18,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.830Z",
                    updated_at: "2019-12-12T20:10:39.830Z",
                    color_variable: "bg"
                },
                {
                    id: 190,
                    x: 15,
                    y: 18,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.828Z",
                    updated_at: "2019-12-12T20:10:39.828Z",
                    color_variable: "bg"
                },
                {
                    id: 189,
                    x: 14,
                    y: 18,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.826Z",
                    updated_at: "2019-12-12T20:10:39.826Z",
                    color_variable: "bg"
                },
                {
                    id: 188,
                    x: 13,
                    y: 18,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.824Z",
                    updated_at: "2019-12-12T20:10:39.824Z",
                    color_variable: "bg"
                },
                {
                    id: 187,
                    x: 12,
                    y: 18,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.822Z",
                    updated_at: "2019-12-12T20:10:39.822Z",
                    color_variable: "bg"
                },
                {
                    id: 186,
                    x: 11,
                    y: 18,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.820Z",
                    updated_at: "2019-12-12T20:10:39.820Z",
                    color_variable: "bg"
                },
                {
                    id: 185,
                    x: 10,
                    y: 18,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.817Z",
                    updated_at: "2019-12-12T20:10:39.817Z",
                    color_variable: "bg"
                },
                {
                    id: 184,
                    x: 9,
                    y: 18,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.814Z",
                    updated_at: "2019-12-12T20:10:39.814Z",
                    color_variable: "bg"
                },
                {
                    id: 183,
                    x: 8,
                    y: 18,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.812Z",
                    updated_at: "2019-12-12T20:10:39.812Z",
                    color_variable: "bg"
                },
                {
                    id: 182,
                    x: 7,
                    y: 18,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.810Z",
                    updated_at: "2019-12-12T20:10:39.810Z",
                    color_variable: "bg"
                },
                {
                    id: 181,
                    x: 6,
                    y: 18,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.808Z",
                    updated_at: "2019-12-12T20:10:39.808Z",
                    color_variable: "bg"
                },
                {
                    id: 180,
                    x: 5,
                    y: 18,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.806Z",
                    updated_at: "2019-12-12T20:10:39.806Z",
                    color_variable: "bg"
                },
                {
                    id: 179,
                    x: 4,
                    y: 18,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.804Z",
                    updated_at: "2019-12-12T20:10:39.804Z",
                    color_variable: "bg"
                },
                {
                    id: 178,
                    x: 3,
                    y: 18,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.802Z",
                    updated_at: "2019-12-12T20:10:39.802Z",
                    color_variable: "bg"
                },
                {
                    id: 177,
                    x: 2,
                    y: 18,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.800Z",
                    updated_at: "2019-12-12T20:10:39.800Z",
                    color_variable: "bg"
                },
                {
                    id: 176,
                    x: 1,
                    y: 18,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.798Z",
                    updated_at: "2019-12-12T20:10:39.798Z",
                    color_variable: "bg"
                },
                {
                    id: 175,
                    x: 25,
                    y: 19,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.797Z",
                    updated_at: "2019-12-12T20:10:39.797Z",
                    color_variable: "bg"
                },
                {
                    id: 174,
                    x: 24,
                    y: 19,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.795Z",
                    updated_at: "2019-12-12T20:10:39.795Z",
                    color_variable: "bg"
                },
                {
                    id: 173,
                    x: 23,
                    y: 19,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.793Z",
                    updated_at: "2019-12-12T20:10:39.793Z",
                    color_variable: "bg"
                },
                {
                    id: 172,
                    x: 22,
                    y: 19,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.791Z",
                    updated_at: "2019-12-12T20:10:39.791Z",
                    color_variable: "bg"
                },
                {
                    id: 171,
                    x: 21,
                    y: 19,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.789Z",
                    updated_at: "2019-12-12T20:10:39.789Z",
                    color_variable: "bg"
                },
                {
                    id: 170,
                    x: 20,
                    y: 19,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.787Z",
                    updated_at: "2019-12-12T20:10:39.787Z",
                    color_variable: "bg"
                },
                {
                    id: 169,
                    x: 19,
                    y: 19,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.785Z",
                    updated_at: "2019-12-12T20:10:39.785Z",
                    color_variable: "bg"
                },
                {
                    id: 168,
                    x: 18,
                    y: 19,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.775Z",
                    updated_at: "2019-12-12T20:10:39.775Z",
                    color_variable: "bg"
                },
                {
                    id: 167,
                    x: 17,
                    y: 19,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.773Z",
                    updated_at: "2019-12-12T20:10:39.773Z",
                    color_variable: "bg"
                },
                {
                    id: 166,
                    x: 16,
                    y: 19,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.771Z",
                    updated_at: "2019-12-12T20:10:39.771Z",
                    color_variable: "bg"
                },
                {
                    id: 165,
                    x: 15,
                    y: 19,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.769Z",
                    updated_at: "2019-12-12T20:10:39.769Z",
                    color_variable: "bg"
                },
                {
                    id: 164,
                    x: 14,
                    y: 19,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.767Z",
                    updated_at: "2019-12-12T20:10:39.767Z",
                    color_variable: "bg"
                },
                {
                    id: 163,
                    x: 13,
                    y: 19,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.765Z",
                    updated_at: "2019-12-12T20:10:39.765Z",
                    color_variable: "bg"
                },
                {
                    id: 162,
                    x: 12,
                    y: 19,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.763Z",
                    updated_at: "2019-12-12T20:10:39.763Z",
                    color_variable: "bg"
                },
                {
                    id: 161,
                    x: 11,
                    y: 19,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.761Z",
                    updated_at: "2019-12-12T20:10:39.761Z",
                    color_variable: "bg"
                },
                {
                    id: 160,
                    x: 10,
                    y: 19,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.759Z",
                    updated_at: "2019-12-12T20:10:39.759Z",
                    color_variable: "bg"
                },
                {
                    id: 159,
                    x: 9,
                    y: 19,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.757Z",
                    updated_at: "2019-12-12T20:10:39.757Z",
                    color_variable: "bg"
                },
                {
                    id: 158,
                    x: 8,
                    y: 19,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.753Z",
                    updated_at: "2019-12-12T20:10:39.753Z",
                    color_variable: "bg"
                },
                {
                    id: 157,
                    x: 7,
                    y: 19,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.751Z",
                    updated_at: "2019-12-12T20:10:39.751Z",
                    color_variable: "bg"
                },
                {
                    id: 156,
                    x: 6,
                    y: 19,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.749Z",
                    updated_at: "2019-12-12T20:10:39.749Z",
                    color_variable: "bg"
                },
                {
                    id: 155,
                    x: 5,
                    y: 19,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.747Z",
                    updated_at: "2019-12-12T20:10:39.747Z",
                    color_variable: "bg"
                },
                {
                    id: 154,
                    x: 4,
                    y: 19,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.745Z",
                    updated_at: "2019-12-12T20:10:39.745Z",
                    color_variable: "bg"
                },
                {
                    id: 153,
                    x: 3,
                    y: 19,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.743Z",
                    updated_at: "2019-12-12T20:10:39.743Z",
                    color_variable: "bg"
                },
                {
                    id: 152,
                    x: 2,
                    y: 19,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.742Z",
                    updated_at: "2019-12-12T20:10:39.742Z",
                    color_variable: "bg"
                },
                {
                    id: 151,
                    x: 1,
                    y: 19,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.740Z",
                    updated_at: "2019-12-12T20:10:39.740Z",
                    color_variable: "bg"
                },
                {
                    id: 150,
                    x: 25,
                    y: 20,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.738Z",
                    updated_at: "2019-12-12T20:10:39.738Z",
                    color_variable: "bg"
                },
                {
                    id: 149,
                    x: 24,
                    y: 20,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.736Z",
                    updated_at: "2019-12-12T20:10:39.736Z",
                    color_variable: "bg"
                },
                {
                    id: 148,
                    x: 23,
                    y: 20,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.734Z",
                    updated_at: "2019-12-12T20:10:39.734Z",
                    color_variable: "bg"
                },
                {
                    id: 147,
                    x: 22,
                    y: 20,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.732Z",
                    updated_at: "2019-12-12T20:10:39.732Z",
                    color_variable: "bg"
                },
                {
                    id: 146,
                    x: 21,
                    y: 20,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.730Z",
                    updated_at: "2019-12-12T20:10:39.730Z",
                    color_variable: "bg"
                },
                {
                    id: 145,
                    x: 20,
                    y: 20,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.728Z",
                    updated_at: "2019-12-12T20:10:39.728Z",
                    color_variable: "bg"
                },
                {
                    id: 144,
                    x: 19,
                    y: 20,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.725Z",
                    updated_at: "2019-12-12T20:10:39.725Z",
                    color_variable: "bg"
                },
                {
                    id: 143,
                    x: 18,
                    y: 20,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.723Z",
                    updated_at: "2019-12-12T20:10:39.723Z",
                    color_variable: "bg"
                },
                {
                    id: 142,
                    x: 17,
                    y: 20,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.721Z",
                    updated_at: "2019-12-12T20:10:39.721Z",
                    color_variable: "bg"
                },
                {
                    id: 141,
                    x: 16,
                    y: 20,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.717Z",
                    updated_at: "2019-12-12T20:10:39.717Z",
                    color_variable: "bg"
                },
                {
                    id: 140,
                    x: 15,
                    y: 20,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.715Z",
                    updated_at: "2019-12-12T20:10:39.715Z",
                    color_variable: "bg"
                },
                {
                    id: 139,
                    x: 14,
                    y: 20,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.712Z",
                    updated_at: "2019-12-12T20:10:39.712Z",
                    color_variable: "bg"
                },
                {
                    id: 138,
                    x: 13,
                    y: 20,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.710Z",
                    updated_at: "2019-12-12T20:10:39.710Z",
                    color_variable: "bg"
                },
                {
                    id: 137,
                    x: 12,
                    y: 20,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.708Z",
                    updated_at: "2019-12-12T20:10:39.708Z",
                    color_variable: "bg"
                },
                {
                    id: 136,
                    x: 11,
                    y: 20,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.705Z",
                    updated_at: "2019-12-12T20:10:39.705Z",
                    color_variable: "bg"
                },
                {
                    id: 135,
                    x: 10,
                    y: 20,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.703Z",
                    updated_at: "2019-12-12T20:10:39.703Z",
                    color_variable: "bg"
                },
                {
                    id: 134,
                    x: 9,
                    y: 20,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.701Z",
                    updated_at: "2019-12-12T20:10:39.701Z",
                    color_variable: "bg"
                },
                {
                    id: 133,
                    x: 8,
                    y: 20,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.698Z",
                    updated_at: "2019-12-12T20:10:39.698Z",
                    color_variable: "bg"
                },
                {
                    id: 132,
                    x: 7,
                    y: 20,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.696Z",
                    updated_at: "2019-12-12T20:10:39.696Z",
                    color_variable: "bg"
                },
                {
                    id: 131,
                    x: 6,
                    y: 20,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.693Z",
                    updated_at: "2019-12-12T20:10:39.693Z",
                    color_variable: "bg"
                },
                {
                    id: 130,
                    x: 5,
                    y: 20,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.689Z",
                    updated_at: "2019-12-12T20:10:39.689Z",
                    color_variable: "bg"
                },
                {
                    id: 129,
                    x: 4,
                    y: 20,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.687Z",
                    updated_at: "2019-12-12T20:10:39.687Z",
                    color_variable: "bg"
                },
                {
                    id: 128,
                    x: 3,
                    y: 20,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.685Z",
                    updated_at: "2019-12-12T20:10:39.685Z",
                    color_variable: "bg"
                },
                {
                    id: 127,
                    x: 2,
                    y: 20,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.682Z",
                    updated_at: "2019-12-12T20:10:39.682Z",
                    color_variable: "bg"
                },
                {
                    id: 126,
                    x: 1,
                    y: 20,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.680Z",
                    updated_at: "2019-12-12T20:10:39.680Z",
                    color_variable: "bg"
                },
                {
                    id: 125,
                    x: 25,
                    y: 21,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.678Z",
                    updated_at: "2019-12-12T20:10:39.678Z",
                    color_variable: "bg"
                },
                {
                    id: 124,
                    x: 24,
                    y: 21,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.676Z",
                    updated_at: "2019-12-12T20:10:39.676Z",
                    color_variable: "bg"
                },
                {
                    id: 123,
                    x: 23,
                    y: 21,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.674Z",
                    updated_at: "2019-12-12T20:10:39.674Z",
                    color_variable: "bg"
                },
                {
                    id: 122,
                    x: 22,
                    y: 21,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.672Z",
                    updated_at: "2019-12-12T20:10:39.672Z",
                    color_variable: "bg"
                },
                {
                    id: 121,
                    x: 21,
                    y: 21,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.669Z",
                    updated_at: "2019-12-12T20:10:39.669Z",
                    color_variable: "bg"
                },
                {
                    id: 120,
                    x: 20,
                    y: 21,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.667Z",
                    updated_at: "2019-12-12T20:10:39.667Z",
                    color_variable: "bg"
                },
                {
                    id: 119,
                    x: 19,
                    y: 21,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.665Z",
                    updated_at: "2019-12-12T20:10:39.665Z",
                    color_variable: "bg"
                },
                {
                    id: 118,
                    x: 18,
                    y: 21,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.663Z",
                    updated_at: "2019-12-12T20:10:39.663Z",
                    color_variable: "bg"
                },
                {
                    id: 117,
                    x: 17,
                    y: 21,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.661Z",
                    updated_at: "2019-12-12T20:10:39.661Z",
                    color_variable: "bg"
                },
                {
                    id: 116,
                    x: 16,
                    y: 21,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.659Z",
                    updated_at: "2019-12-12T20:10:39.659Z",
                    color_variable: "bg"
                },
                {
                    id: 115,
                    x: 15,
                    y: 21,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.656Z",
                    updated_at: "2019-12-12T20:10:39.656Z",
                    color_variable: "bg"
                },
                {
                    id: 114,
                    x: 14,
                    y: 21,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.653Z",
                    updated_at: "2019-12-12T20:10:39.653Z",
                    color_variable: "bg"
                },
                {
                    id: 113,
                    x: 13,
                    y: 21,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.650Z",
                    updated_at: "2019-12-12T20:10:39.650Z",
                    color_variable: "bg"
                },
                {
                    id: 112,
                    x: 12,
                    y: 21,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.648Z",
                    updated_at: "2019-12-12T20:10:39.648Z",
                    color_variable: "bg"
                },
                {
                    id: 111,
                    x: 11,
                    y: 21,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.646Z",
                    updated_at: "2019-12-12T20:10:39.646Z",
                    color_variable: "bg"
                },
                {
                    id: 110,
                    x: 10,
                    y: 21,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.644Z",
                    updated_at: "2019-12-12T20:10:39.644Z",
                    color_variable: "bg"
                },
                {
                    id: 109,
                    x: 9,
                    y: 21,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.641Z",
                    updated_at: "2019-12-12T20:10:39.641Z",
                    color_variable: "bg"
                },
                {
                    id: 108,
                    x: 8,
                    y: 21,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.639Z",
                    updated_at: "2019-12-12T20:10:39.639Z",
                    color_variable: "bg"
                },
                {
                    id: 107,
                    x: 7,
                    y: 21,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.637Z",
                    updated_at: "2019-12-12T20:10:39.637Z",
                    color_variable: "bg"
                },
                {
                    id: 106,
                    x: 6,
                    y: 21,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.635Z",
                    updated_at: "2019-12-12T20:10:39.635Z",
                    color_variable: "bg"
                },
                {
                    id: 105,
                    x: 5,
                    y: 21,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.632Z",
                    updated_at: "2019-12-12T20:10:39.632Z",
                    color_variable: "bg"
                },
                {
                    id: 104,
                    x: 4,
                    y: 21,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.630Z",
                    updated_at: "2019-12-12T20:10:39.630Z",
                    color_variable: "bg"
                },
                {
                    id: 103,
                    x: 3,
                    y: 21,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.627Z",
                    updated_at: "2019-12-12T20:10:39.627Z",
                    color_variable: "bg"
                },
                {
                    id: 102,
                    x: 2,
                    y: 21,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.625Z",
                    updated_at: "2019-12-12T20:10:39.625Z",
                    color_variable: "bg"
                },
                {
                    id: 101,
                    x: 1,
                    y: 21,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.623Z",
                    updated_at: "2019-12-12T20:10:39.623Z",
                    color_variable: "bg"
                },
                {
                    id: 100,
                    x: 25,
                    y: 22,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.621Z",
                    updated_at: "2019-12-12T20:10:39.621Z",
                    color_variable: "bg"
                },
                {
                    id: 99,
                    x: 24,
                    y: 22,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.618Z",
                    updated_at: "2019-12-12T20:10:39.618Z",
                    color_variable: "bg"
                },
                {
                    id: 98,
                    x: 23,
                    y: 22,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.616Z",
                    updated_at: "2019-12-12T20:10:39.616Z",
                    color_variable: "bg"
                },
                {
                    id: 97,
                    x: 22,
                    y: 22,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.614Z",
                    updated_at: "2019-12-12T20:10:39.614Z",
                    color_variable: "bg"
                },
                {
                    id: 96,
                    x: 21,
                    y: 22,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.611Z",
                    updated_at: "2019-12-12T20:10:39.611Z",
                    color_variable: "bg"
                },
                {
                    id: 95,
                    x: 20,
                    y: 22,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.609Z",
                    updated_at: "2019-12-12T20:10:39.609Z",
                    color_variable: "bg"
                },
                {
                    id: 94,
                    x: 19,
                    y: 22,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.607Z",
                    updated_at: "2019-12-12T20:10:39.607Z",
                    color_variable: "bg"
                },
                {
                    id: 93,
                    x: 18,
                    y: 22,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.604Z",
                    updated_at: "2019-12-12T20:10:39.604Z",
                    color_variable: "bg"
                },
                {
                    id: 92,
                    x: 17,
                    y: 22,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.601Z",
                    updated_at: "2019-12-12T20:10:39.601Z",
                    color_variable: "bg"
                },
                {
                    id: 91,
                    x: 16,
                    y: 22,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.598Z",
                    updated_at: "2019-12-12T20:10:39.598Z",
                    color_variable: "bg"
                },
                {
                    id: 90,
                    x: 15,
                    y: 22,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.596Z",
                    updated_at: "2019-12-12T20:10:39.596Z",
                    color_variable: "bg"
                },
                {
                    id: 89,
                    x: 14,
                    y: 22,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.593Z",
                    updated_at: "2019-12-12T20:10:39.593Z",
                    color_variable: "bg"
                },
                {
                    id: 88,
                    x: 13,
                    y: 22,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.591Z",
                    updated_at: "2019-12-12T20:10:39.591Z",
                    color_variable: "bg"
                },
                {
                    id: 87,
                    x: 12,
                    y: 22,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.589Z",
                    updated_at: "2019-12-12T20:10:39.589Z",
                    color_variable: "bg"
                },
                {
                    id: 86,
                    x: 11,
                    y: 22,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.586Z",
                    updated_at: "2019-12-12T20:10:39.586Z",
                    color_variable: "bg"
                },
                {
                    id: 85,
                    x: 10,
                    y: 22,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.584Z",
                    updated_at: "2019-12-12T20:10:39.584Z",
                    color_variable: "bg"
                },
                {
                    id: 84,
                    x: 9,
                    y: 22,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.582Z",
                    updated_at: "2019-12-12T20:10:39.582Z",
                    color_variable: "bg"
                },
                {
                    id: 83,
                    x: 8,
                    y: 22,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.579Z",
                    updated_at: "2019-12-12T20:10:39.579Z",
                    color_variable: "bg"
                },
                {
                    id: 82,
                    x: 7,
                    y: 22,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.575Z",
                    updated_at: "2019-12-12T20:10:39.575Z",
                    color_variable: "bg"
                },
                {
                    id: 81,
                    x: 6,
                    y: 22,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.573Z",
                    updated_at: "2019-12-12T20:10:39.573Z",
                    color_variable: "bg"
                },
                {
                    id: 80,
                    x: 5,
                    y: 22,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.571Z",
                    updated_at: "2019-12-12T20:10:39.571Z",
                    color_variable: "bg"
                },
                {
                    id: 79,
                    x: 4,
                    y: 22,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.568Z",
                    updated_at: "2019-12-12T20:10:39.568Z",
                    color_variable: "bg"
                },
                {
                    id: 78,
                    x: 3,
                    y: 22,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.566Z",
                    updated_at: "2019-12-12T20:10:39.566Z",
                    color_variable: "bg"
                },
                {
                    id: 77,
                    x: 2,
                    y: 22,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.555Z",
                    updated_at: "2019-12-12T20:10:39.555Z",
                    color_variable: "bg"
                },
                {
                    id: 76,
                    x: 1,
                    y: 22,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.553Z",
                    updated_at: "2019-12-12T20:10:39.553Z",
                    color_variable: "bg"
                },
                {
                    id: 75,
                    x: 25,
                    y: 23,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.550Z",
                    updated_at: "2019-12-12T20:10:39.550Z",
                    color_variable: "bg"
                },
                {
                    id: 74,
                    x: 24,
                    y: 23,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.548Z",
                    updated_at: "2019-12-12T20:10:39.548Z",
                    color_variable: "bg"
                },
                {
                    id: 73,
                    x: 23,
                    y: 23,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.545Z",
                    updated_at: "2019-12-12T20:10:39.545Z",
                    color_variable: "bg"
                },
                {
                    id: 72,
                    x: 22,
                    y: 23,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.542Z",
                    updated_at: "2019-12-12T20:10:39.542Z",
                    color_variable: "bg"
                },
                {
                    id: 71,
                    x: 21,
                    y: 23,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.539Z",
                    updated_at: "2019-12-12T20:10:39.539Z",
                    color_variable: "bg"
                },
                {
                    id: 70,
                    x: 20,
                    y: 23,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.536Z",
                    updated_at: "2019-12-12T20:10:39.536Z",
                    color_variable: "bg"
                },
                {
                    id: 69,
                    x: 19,
                    y: 23,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.533Z",
                    updated_at: "2019-12-12T20:10:39.533Z",
                    color_variable: "bg"
                },
                {
                    id: 68,
                    x: 18,
                    y: 23,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.531Z",
                    updated_at: "2019-12-12T20:10:39.531Z",
                    color_variable: "bg"
                },
                {
                    id: 67,
                    x: 17,
                    y: 23,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.528Z",
                    updated_at: "2019-12-12T20:10:39.528Z",
                    color_variable: "bg"
                },
                {
                    id: 66,
                    x: 16,
                    y: 23,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.526Z",
                    updated_at: "2019-12-12T20:10:39.526Z",
                    color_variable: "bg"
                },
                {
                    id: 65,
                    x: 15,
                    y: 23,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.523Z",
                    updated_at: "2019-12-12T20:10:39.523Z",
                    color_variable: "bg"
                },
                {
                    id: 64,
                    x: 14,
                    y: 23,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.520Z",
                    updated_at: "2019-12-12T20:10:39.520Z",
                    color_variable: "bg"
                },
                {
                    id: 63,
                    x: 13,
                    y: 23,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.518Z",
                    updated_at: "2019-12-12T20:10:39.518Z",
                    color_variable: "bg"
                },
                {
                    id: 62,
                    x: 12,
                    y: 23,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.515Z",
                    updated_at: "2019-12-12T20:10:39.515Z",
                    color_variable: "bg"
                },
                {
                    id: 61,
                    x: 11,
                    y: 23,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.513Z",
                    updated_at: "2019-12-12T20:10:39.513Z",
                    color_variable: "bg"
                },
                {
                    id: 60,
                    x: 10,
                    y: 23,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.510Z",
                    updated_at: "2019-12-12T20:10:39.510Z",
                    color_variable: "bg"
                },
                {
                    id: 59,
                    x: 9,
                    y: 23,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.508Z",
                    updated_at: "2019-12-12T20:10:39.508Z",
                    color_variable: "bg"
                },
                {
                    id: 58,
                    x: 8,
                    y: 23,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.505Z",
                    updated_at: "2019-12-12T20:10:39.505Z",
                    color_variable: "bg"
                },
                {
                    id: 57,
                    x: 7,
                    y: 23,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.503Z",
                    updated_at: "2019-12-12T20:10:39.503Z",
                    color_variable: "bg"
                },
                {
                    id: 56,
                    x: 6,
                    y: 23,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.500Z",
                    updated_at: "2019-12-12T20:10:39.500Z",
                    color_variable: "bg"
                },
                {
                    id: 55,
                    x: 5,
                    y: 23,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.497Z",
                    updated_at: "2019-12-12T20:10:39.497Z",
                    color_variable: "bg"
                },
                {
                    id: 54,
                    x: 4,
                    y: 23,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.495Z",
                    updated_at: "2019-12-12T20:10:39.495Z",
                    color_variable: "bg"
                },
                {
                    id: 53,
                    x: 3,
                    y: 23,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.492Z",
                    updated_at: "2019-12-12T20:10:39.492Z",
                    color_variable: "bg"
                },
                {
                    id: 52,
                    x: 2,
                    y: 23,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.490Z",
                    updated_at: "2019-12-12T20:10:39.490Z",
                    color_variable: "bg"
                },
                {
                    id: 51,
                    x: 1,
                    y: 23,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.487Z",
                    updated_at: "2019-12-12T20:10:39.487Z",
                    color_variable: "bg"
                },
                {
                    id: 50,
                    x: 25,
                    y: 24,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.485Z",
                    updated_at: "2019-12-12T20:10:39.485Z",
                    color_variable: "bg"
                },
                {
                    id: 49,
                    x: 24,
                    y: 24,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.482Z",
                    updated_at: "2019-12-12T20:10:39.482Z",
                    color_variable: "bg"
                },
                {
                    id: 48,
                    x: 23,
                    y: 24,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.479Z",
                    updated_at: "2019-12-12T20:10:39.479Z",
                    color_variable: "bg"
                },
                {
                    id: 47,
                    x: 22,
                    y: 24,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.477Z",
                    updated_at: "2019-12-12T20:10:39.477Z",
                    color_variable: "bg"
                },
                {
                    id: 46,
                    x: 21,
                    y: 24,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.474Z",
                    updated_at: "2019-12-12T20:10:39.474Z",
                    color_variable: "bg"
                },
                {
                    id: 45,
                    x: 20,
                    y: 24,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.471Z",
                    updated_at: "2019-12-12T20:10:39.471Z",
                    color_variable: "bg"
                },
                {
                    id: 44,
                    x: 19,
                    y: 24,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.469Z",
                    updated_at: "2019-12-12T20:10:39.469Z",
                    color_variable: "bg"
                },
                {
                    id: 43,
                    x: 18,
                    y: 24,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.466Z",
                    updated_at: "2019-12-12T20:10:39.466Z",
                    color_variable: "bg"
                },
                {
                    id: 625,
                    x: 25,
                    y: 1,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.889Z",
                    updated_at: "2019-12-12T20:10:40.889Z",
                    color_variable: "bg"
                },
                {
                    id: 624,
                    x: 24,
                    y: 1,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.887Z",
                    updated_at: "2019-12-12T20:10:40.887Z",
                    color_variable: "bg"
                },
                {
                    id: 623,
                    x: 23,
                    y: 1,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.884Z",
                    updated_at: "2019-12-12T20:10:40.884Z",
                    color_variable: "bg"
                },
                {
                    id: 622,
                    x: 22,
                    y: 1,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.882Z",
                    updated_at: "2019-12-12T20:10:40.882Z",
                    color_variable: "bg"
                },
                {
                    id: 621,
                    x: 21,
                    y: 1,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.880Z",
                    updated_at: "2019-12-12T20:10:40.880Z",
                    color_variable: "bg"
                },
                {
                    id: 620,
                    x: 20,
                    y: 1,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.878Z",
                    updated_at: "2019-12-12T20:10:40.878Z",
                    color_variable: "bg"
                },
                {
                    id: 619,
                    x: 19,
                    y: 1,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.871Z",
                    updated_at: "2019-12-12T20:10:40.871Z",
                    color_variable: "bg"
                },
                {
                    id: 618,
                    x: 18,
                    y: 1,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.869Z",
                    updated_at: "2019-12-12T20:10:40.869Z",
                    color_variable: "bg"
                },
                {
                    id: 617,
                    x: 17,
                    y: 1,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.867Z",
                    updated_at: "2019-12-12T20:10:40.867Z",
                    color_variable: "bg"
                },
                {
                    id: 616,
                    x: 16,
                    y: 1,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.864Z",
                    updated_at: "2019-12-12T20:10:40.864Z",
                    color_variable: "bg"
                },
                {
                    id: 615,
                    x: 15,
                    y: 1,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.862Z",
                    updated_at: "2019-12-12T20:10:40.862Z",
                    color_variable: "bg"
                },
                {
                    id: 614,
                    x: 14,
                    y: 1,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.860Z",
                    updated_at: "2019-12-12T20:10:40.860Z",
                    color_variable: "bg"
                },
                {
                    id: 613,
                    x: 13,
                    y: 1,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.858Z",
                    updated_at: "2019-12-12T20:10:40.858Z",
                    color_variable: "bg"
                },
                {
                    id: 612,
                    x: 12,
                    y: 1,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.855Z",
                    updated_at: "2019-12-12T20:10:40.855Z",
                    color_variable: "bg"
                },
                {
                    id: 611,
                    x: 11,
                    y: 1,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.853Z",
                    updated_at: "2019-12-12T20:10:40.853Z",
                    color_variable: "bg"
                },
                {
                    id: 610,
                    x: 10,
                    y: 1,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.850Z",
                    updated_at: "2019-12-12T20:10:40.850Z",
                    color_variable: "bg"
                },
                {
                    id: 609,
                    x: 9,
                    y: 1,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.848Z",
                    updated_at: "2019-12-12T20:10:40.848Z",
                    color_variable: "bg"
                },
                {
                    id: 608,
                    x: 8,
                    y: 1,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.843Z",
                    updated_at: "2019-12-12T20:10:40.843Z",
                    color_variable: "bg"
                },
                {
                    id: 607,
                    x: 7,
                    y: 1,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.841Z",
                    updated_at: "2019-12-12T20:10:40.841Z",
                    color_variable: "bg"
                },
                {
                    id: 606,
                    x: 6,
                    y: 1,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.839Z",
                    updated_at: "2019-12-12T20:10:40.839Z",
                    color_variable: "bg"
                },
                {
                    id: 605,
                    x: 5,
                    y: 1,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.836Z",
                    updated_at: "2019-12-12T20:10:40.836Z",
                    color_variable: "bg"
                },
                {
                    id: 604,
                    x: 4,
                    y: 1,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.834Z",
                    updated_at: "2019-12-12T20:10:40.834Z",
                    color_variable: "bg"
                },
                {
                    id: 603,
                    x: 3,
                    y: 1,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.832Z",
                    updated_at: "2019-12-12T20:10:40.832Z",
                    color_variable: "bg"
                },
                {
                    id: 602,
                    x: 2,
                    y: 1,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.822Z",
                    updated_at: "2019-12-12T20:10:40.822Z",
                    color_variable: "bg"
                },
                {
                    id: 601,
                    x: 1,
                    y: 1,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.818Z",
                    updated_at: "2019-12-12T20:10:40.818Z",
                    color_variable: "bg"
                },
                {
                    id: 600,
                    x: 25,
                    y: 2,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.815Z",
                    updated_at: "2019-12-12T20:10:40.815Z",
                    color_variable: "bg"
                },
                {
                    id: 599,
                    x: 24,
                    y: 2,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.812Z",
                    updated_at: "2019-12-12T20:10:40.812Z",
                    color_variable: "bg"
                },
                {
                    id: 598,
                    x: 23,
                    y: 2,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.810Z",
                    updated_at: "2019-12-12T20:10:40.810Z",
                    color_variable: "bg"
                },
                {
                    id: 597,
                    x: 22,
                    y: 2,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.808Z",
                    updated_at: "2019-12-12T20:10:40.808Z",
                    color_variable: "bg"
                },
                {
                    id: 596,
                    x: 21,
                    y: 2,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.806Z",
                    updated_at: "2019-12-12T20:10:40.806Z",
                    color_variable: "bg"
                },
                {
                    id: 595,
                    x: 20,
                    y: 2,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.804Z",
                    updated_at: "2019-12-12T20:10:40.804Z",
                    color_variable: "bg"
                },
                {
                    id: 594,
                    x: 19,
                    y: 2,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.801Z",
                    updated_at: "2019-12-12T20:10:40.801Z",
                    color_variable: "bg"
                },
                {
                    id: 593,
                    x: 18,
                    y: 2,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.799Z",
                    updated_at: "2019-12-12T20:10:40.799Z",
                    color_variable: "bg"
                },
                {
                    id: 592,
                    x: 17,
                    y: 2,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.796Z",
                    updated_at: "2019-12-12T20:10:40.796Z",
                    color_variable: "bg"
                },
                {
                    id: 591,
                    x: 16,
                    y: 2,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.793Z",
                    updated_at: "2019-12-12T20:10:40.793Z",
                    color_variable: "bg"
                },
                {
                    id: 590,
                    x: 15,
                    y: 2,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.789Z",
                    updated_at: "2019-12-12T20:10:40.789Z",
                    color_variable: "bg"
                },
                {
                    id: 589,
                    x: 14,
                    y: 2,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.786Z",
                    updated_at: "2019-12-12T20:10:40.786Z",
                    color_variable: "bg"
                },
                {
                    id: 588,
                    x: 13,
                    y: 2,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.783Z",
                    updated_at: "2019-12-12T20:10:40.783Z",
                    color_variable: "bg"
                },
                {
                    id: 587,
                    x: 12,
                    y: 2,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.781Z",
                    updated_at: "2019-12-12T20:10:40.781Z",
                    color_variable: "bg"
                },
                {
                    id: 586,
                    x: 11,
                    y: 2,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.779Z",
                    updated_at: "2019-12-12T20:10:40.779Z",
                    color_variable: "bg"
                },
                {
                    id: 585,
                    x: 10,
                    y: 2,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.776Z",
                    updated_at: "2019-12-12T20:10:40.776Z",
                    color_variable: "bg"
                },
                {
                    id: 584,
                    x: 9,
                    y: 2,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.774Z",
                    updated_at: "2019-12-12T20:10:40.774Z",
                    color_variable: "bg"
                },
                {
                    id: 583,
                    x: 8,
                    y: 2,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.772Z",
                    updated_at: "2019-12-12T20:10:40.772Z",
                    color_variable: "bg"
                },
                {
                    id: 582,
                    x: 7,
                    y: 2,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.770Z",
                    updated_at: "2019-12-12T20:10:40.770Z",
                    color_variable: "bg"
                },
                {
                    id: 581,
                    x: 6,
                    y: 2,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.768Z",
                    updated_at: "2019-12-12T20:10:40.768Z",
                    color_variable: "bg"
                },
                {
                    id: 580,
                    x: 5,
                    y: 2,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.766Z",
                    updated_at: "2019-12-12T20:10:40.766Z",
                    color_variable: "bg"
                },
                {
                    id: 579,
                    x: 4,
                    y: 2,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.763Z",
                    updated_at: "2019-12-12T20:10:40.763Z",
                    color_variable: "bg"
                },
                {
                    id: 578,
                    x: 3,
                    y: 2,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.761Z",
                    updated_at: "2019-12-12T20:10:40.761Z",
                    color_variable: "bg"
                },
                {
                    id: 577,
                    x: 2,
                    y: 2,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.759Z",
                    updated_at: "2019-12-12T20:10:40.759Z",
                    color_variable: "bg"
                },
                {
                    id: 576,
                    x: 1,
                    y: 2,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.756Z",
                    updated_at: "2019-12-12T20:10:40.756Z",
                    color_variable: "bg"
                },
                {
                    id: 575,
                    x: 25,
                    y: 3,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.754Z",
                    updated_at: "2019-12-12T20:10:40.754Z",
                    color_variable: "bg"
                },
                {
                    id: 574,
                    x: 24,
                    y: 3,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.749Z",
                    updated_at: "2019-12-12T20:10:40.749Z",
                    color_variable: "bg"
                },
                {
                    id: 573,
                    x: 23,
                    y: 3,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.746Z",
                    updated_at: "2019-12-12T20:10:40.746Z",
                    color_variable: "bg"
                },
                {
                    id: 572,
                    x: 22,
                    y: 3,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.744Z",
                    updated_at: "2019-12-12T20:10:40.744Z",
                    color_variable: "bg"
                },
                {
                    id: 571,
                    x: 21,
                    y: 3,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.742Z",
                    updated_at: "2019-12-12T20:10:40.742Z",
                    color_variable: "bg"
                },
                {
                    id: 570,
                    x: 20,
                    y: 3,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.740Z",
                    updated_at: "2019-12-12T20:10:40.740Z",
                    color_variable: "bg"
                },
                {
                    id: 569,
                    x: 19,
                    y: 3,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.737Z",
                    updated_at: "2019-12-12T20:10:40.737Z",
                    color_variable: "bg"
                },
                {
                    id: 568,
                    x: 18,
                    y: 3,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.735Z",
                    updated_at: "2019-12-12T20:10:40.735Z",
                    color_variable: "bg"
                },
                {
                    id: 567,
                    x: 17,
                    y: 3,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.733Z",
                    updated_at: "2019-12-12T20:10:40.733Z",
                    color_variable: "bg"
                },
                {
                    id: 566,
                    x: 16,
                    y: 3,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.731Z",
                    updated_at: "2019-12-12T20:10:40.731Z",
                    color_variable: "bg"
                },
                {
                    id: 565,
                    x: 15,
                    y: 3,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.728Z",
                    updated_at: "2019-12-12T20:10:40.728Z",
                    color_variable: "bg"
                },
                {
                    id: 564,
                    x: 14,
                    y: 3,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.726Z",
                    updated_at: "2019-12-12T20:10:40.726Z",
                    color_variable: "bg"
                },
                {
                    id: 563,
                    x: 13,
                    y: 3,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.724Z",
                    updated_at: "2019-12-12T20:10:40.724Z",
                    color_variable: "bg"
                },
                {
                    id: 562,
                    x: 12,
                    y: 3,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.717Z",
                    updated_at: "2019-12-12T20:10:40.717Z",
                    color_variable: "bg"
                },
                {
                    id: 561,
                    x: 11,
                    y: 3,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.715Z",
                    updated_at: "2019-12-12T20:10:40.715Z",
                    color_variable: "bg"
                },
                {
                    id: 560,
                    x: 10,
                    y: 3,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.713Z",
                    updated_at: "2019-12-12T20:10:40.713Z",
                    color_variable: "bg"
                },
                {
                    id: 559,
                    x: 9,
                    y: 3,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.711Z",
                    updated_at: "2019-12-12T20:10:40.711Z",
                    color_variable: "bg"
                },
                {
                    id: 558,
                    x: 8,
                    y: 3,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.709Z",
                    updated_at: "2019-12-12T20:10:40.709Z",
                    color_variable: "bg"
                },
                {
                    id: 557,
                    x: 7,
                    y: 3,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.708Z",
                    updated_at: "2019-12-12T20:10:40.708Z",
                    color_variable: "bg"
                },
                {
                    id: 556,
                    x: 6,
                    y: 3,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.706Z",
                    updated_at: "2019-12-12T20:10:40.706Z",
                    color_variable: "bg"
                },
                {
                    id: 555,
                    x: 5,
                    y: 3,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.703Z",
                    updated_at: "2019-12-12T20:10:40.703Z",
                    color_variable: "bg"
                },
                {
                    id: 554,
                    x: 4,
                    y: 3,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.701Z",
                    updated_at: "2019-12-12T20:10:40.701Z",
                    color_variable: "bg"
                },
                {
                    id: 553,
                    x: 3,
                    y: 3,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.700Z",
                    updated_at: "2019-12-12T20:10:40.700Z",
                    color_variable: "bg"
                },
                {
                    id: 552,
                    x: 2,
                    y: 3,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.698Z",
                    updated_at: "2019-12-12T20:10:40.698Z",
                    color_variable: "bg"
                },
                {
                    id: 551,
                    x: 1,
                    y: 3,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.695Z",
                    updated_at: "2019-12-12T20:10:40.695Z",
                    color_variable: "bg"
                },
                {
                    id: 550,
                    x: 25,
                    y: 4,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.690Z",
                    updated_at: "2019-12-12T20:10:40.690Z",
                    color_variable: "bg"
                },
                {
                    id: 549,
                    x: 24,
                    y: 4,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.687Z",
                    updated_at: "2019-12-12T20:10:40.687Z",
                    color_variable: "bg"
                },
                {
                    id: 548,
                    x: 23,
                    y: 4,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.685Z",
                    updated_at: "2019-12-12T20:10:40.685Z",
                    color_variable: "bg"
                },
                {
                    id: 547,
                    x: 22,
                    y: 4,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.683Z",
                    updated_at: "2019-12-12T20:10:40.683Z",
                    color_variable: "bg"
                },
                {
                    id: 546,
                    x: 21,
                    y: 4,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.682Z",
                    updated_at: "2019-12-12T20:10:40.682Z",
                    color_variable: "bg"
                },
                {
                    id: 545,
                    x: 20,
                    y: 4,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.680Z",
                    updated_at: "2019-12-12T20:10:40.680Z",
                    color_variable: "bg"
                },
                {
                    id: 544,
                    x: 19,
                    y: 4,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.678Z",
                    updated_at: "2019-12-12T20:10:40.678Z",
                    color_variable: "bg"
                },
                {
                    id: 543,
                    x: 18,
                    y: 4,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.676Z",
                    updated_at: "2019-12-12T20:10:40.676Z",
                    color_variable: "bg"
                },
                {
                    id: 542,
                    x: 17,
                    y: 4,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.674Z",
                    updated_at: "2019-12-12T20:10:40.674Z",
                    color_variable: "bg"
                },
                {
                    id: 541,
                    x: 16,
                    y: 4,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.672Z",
                    updated_at: "2019-12-12T20:10:40.672Z",
                    color_variable: "bg"
                },
                {
                    id: 540,
                    x: 15,
                    y: 4,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.670Z",
                    updated_at: "2019-12-12T20:10:40.670Z",
                    color_variable: "bg"
                },
                {
                    id: 539,
                    x: 14,
                    y: 4,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.668Z",
                    updated_at: "2019-12-12T20:10:40.668Z",
                    color_variable: "bg"
                },
                {
                    id: 538,
                    x: 13,
                    y: 4,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.667Z",
                    updated_at: "2019-12-12T20:10:40.667Z",
                    color_variable: "bg"
                },
                {
                    id: 537,
                    x: 12,
                    y: 4,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.665Z",
                    updated_at: "2019-12-12T20:10:40.665Z",
                    color_variable: "bg"
                },
                {
                    id: 536,
                    x: 11,
                    y: 4,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.661Z",
                    updated_at: "2019-12-12T20:10:40.661Z",
                    color_variable: "bg"
                },
                {
                    id: 535,
                    x: 10,
                    y: 4,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.658Z",
                    updated_at: "2019-12-12T20:10:40.658Z",
                    color_variable: "bg"
                },
                {
                    id: 534,
                    x: 9,
                    y: 4,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.656Z",
                    updated_at: "2019-12-12T20:10:40.656Z",
                    color_variable: "bg"
                },
                {
                    id: 533,
                    x: 8,
                    y: 4,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.654Z",
                    updated_at: "2019-12-12T20:10:40.654Z",
                    color_variable: "bg"
                },
                {
                    id: 532,
                    x: 7,
                    y: 4,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.652Z",
                    updated_at: "2019-12-12T20:10:40.652Z",
                    color_variable: "bg"
                },
                {
                    id: 531,
                    x: 6,
                    y: 4,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.650Z",
                    updated_at: "2019-12-12T20:10:40.650Z",
                    color_variable: "bg"
                },
                {
                    id: 530,
                    x: 5,
                    y: 4,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.648Z",
                    updated_at: "2019-12-12T20:10:40.648Z",
                    color_variable: "bg"
                },
                {
                    id: 529,
                    x: 4,
                    y: 4,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.646Z",
                    updated_at: "2019-12-12T20:10:40.646Z",
                    color_variable: "bg"
                },
                {
                    id: 528,
                    x: 3,
                    y: 4,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.644Z",
                    updated_at: "2019-12-12T20:10:40.644Z",
                    color_variable: "bg"
                },
                {
                    id: 527,
                    x: 2,
                    y: 4,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.642Z",
                    updated_at: "2019-12-12T20:10:40.642Z",
                    color_variable: "bg"
                },
                {
                    id: 526,
                    x: 1,
                    y: 4,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.641Z",
                    updated_at: "2019-12-12T20:10:40.641Z",
                    color_variable: "bg"
                },
                {
                    id: 525,
                    x: 25,
                    y: 5,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.638Z",
                    updated_at: "2019-12-12T20:10:40.638Z",
                    color_variable: "bg"
                },
                {
                    id: 524,
                    x: 24,
                    y: 5,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.636Z",
                    updated_at: "2019-12-12T20:10:40.636Z",
                    color_variable: "bg"
                },
                {
                    id: 523,
                    x: 23,
                    y: 5,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.634Z",
                    updated_at: "2019-12-12T20:10:40.634Z",
                    color_variable: "bg"
                },
                {
                    id: 522,
                    x: 22,
                    y: 5,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.631Z",
                    updated_at: "2019-12-12T20:10:40.631Z",
                    color_variable: "bg"
                },
                {
                    id: 521,
                    x: 21,
                    y: 5,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.628Z",
                    updated_at: "2019-12-12T20:10:40.628Z",
                    color_variable: "bg"
                },
                {
                    id: 520,
                    x: 20,
                    y: 5,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.627Z",
                    updated_at: "2019-12-12T20:10:40.627Z",
                    color_variable: "bg"
                },
                {
                    id: 519,
                    x: 19,
                    y: 5,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.624Z",
                    updated_at: "2019-12-12T20:10:40.624Z",
                    color_variable: "bg"
                },
                {
                    id: 518,
                    x: 18,
                    y: 5,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.615Z",
                    updated_at: "2019-12-12T20:10:40.615Z",
                    color_variable: "bg"
                },
                {
                    id: 517,
                    x: 17,
                    y: 5,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.613Z",
                    updated_at: "2019-12-12T20:10:40.613Z",
                    color_variable: "bg"
                },
                {
                    id: 516,
                    x: 16,
                    y: 5,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.611Z",
                    updated_at: "2019-12-12T20:10:40.611Z",
                    color_variable: "bg"
                },
                {
                    id: 515,
                    x: 15,
                    y: 5,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.610Z",
                    updated_at: "2019-12-12T20:10:40.610Z",
                    color_variable: "bg"
                },
                {
                    id: 514,
                    x: 14,
                    y: 5,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.608Z",
                    updated_at: "2019-12-12T20:10:40.608Z",
                    color_variable: "bg"
                },
                {
                    id: 513,
                    x: 13,
                    y: 5,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.606Z",
                    updated_at: "2019-12-12T20:10:40.606Z",
                    color_variable: "bg"
                },
                {
                    id: 512,
                    x: 12,
                    y: 5,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.604Z",
                    updated_at: "2019-12-12T20:10:40.604Z",
                    color_variable: "bg"
                },
                {
                    id: 511,
                    x: 11,
                    y: 5,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.602Z",
                    updated_at: "2019-12-12T20:10:40.602Z",
                    color_variable: "bg"
                },
                {
                    id: 510,
                    x: 10,
                    y: 5,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.599Z",
                    updated_at: "2019-12-12T20:10:40.599Z",
                    color_variable: "bg"
                },
                {
                    id: 509,
                    x: 9,
                    y: 5,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.598Z",
                    updated_at: "2019-12-12T20:10:40.598Z",
                    color_variable: "bg"
                },
                {
                    id: 508,
                    x: 8,
                    y: 5,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.593Z",
                    updated_at: "2019-12-12T20:10:40.593Z",
                    color_variable: "bg"
                },
                {
                    id: 507,
                    x: 7,
                    y: 5,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.591Z",
                    updated_at: "2019-12-12T20:10:40.591Z",
                    color_variable: "bg"
                },
                {
                    id: 506,
                    x: 6,
                    y: 5,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.589Z",
                    updated_at: "2019-12-12T20:10:40.589Z",
                    color_variable: "bg"
                },
                {
                    id: 505,
                    x: 5,
                    y: 5,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.587Z",
                    updated_at: "2019-12-12T20:10:40.587Z",
                    color_variable: "bg"
                },
                {
                    id: 504,
                    x: 4,
                    y: 5,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.585Z",
                    updated_at: "2019-12-12T20:10:40.585Z",
                    color_variable: "bg"
                },
                {
                    id: 503,
                    x: 3,
                    y: 5,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.583Z",
                    updated_at: "2019-12-12T20:10:40.583Z",
                    color_variable: "bg"
                },
                {
                    id: 502,
                    x: 2,
                    y: 5,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.581Z",
                    updated_at: "2019-12-12T20:10:40.581Z",
                    color_variable: "bg"
                },
                {
                    id: 501,
                    x: 1,
                    y: 5,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.579Z",
                    updated_at: "2019-12-12T20:10:40.579Z",
                    color_variable: "bg"
                },
                {
                    id: 500,
                    x: 25,
                    y: 6,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.577Z",
                    updated_at: "2019-12-12T20:10:40.577Z",
                    color_variable: "bg"
                },
                {
                    id: 499,
                    x: 24,
                    y: 6,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.575Z",
                    updated_at: "2019-12-12T20:10:40.575Z",
                    color_variable: "bg"
                },
                {
                    id: 498,
                    x: 23,
                    y: 6,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.573Z",
                    updated_at: "2019-12-12T20:10:40.573Z",
                    color_variable: "bg"
                },
                {
                    id: 497,
                    x: 22,
                    y: 6,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.571Z",
                    updated_at: "2019-12-12T20:10:40.571Z",
                    color_variable: "bg"
                },
                {
                    id: 496,
                    x: 21,
                    y: 6,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.569Z",
                    updated_at: "2019-12-12T20:10:40.569Z",
                    color_variable: "bg"
                },
                {
                    id: 495,
                    x: 20,
                    y: 6,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.566Z",
                    updated_at: "2019-12-12T20:10:40.566Z",
                    color_variable: "bg"
                },
                {
                    id: 494,
                    x: 19,
                    y: 6,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.564Z",
                    updated_at: "2019-12-12T20:10:40.564Z",
                    color_variable: "bg"
                },
                {
                    id: 493,
                    x: 18,
                    y: 6,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.562Z",
                    updated_at: "2019-12-12T20:10:40.562Z",
                    color_variable: "bg"
                },
                {
                    id: 492,
                    x: 17,
                    y: 6,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.560Z",
                    updated_at: "2019-12-12T20:10:40.560Z",
                    color_variable: "bg"
                },
                {
                    id: 491,
                    x: 16,
                    y: 6,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.558Z",
                    updated_at: "2019-12-12T20:10:40.558Z",
                    color_variable: "bg"
                },
                {
                    id: 490,
                    x: 15,
                    y: 6,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.557Z",
                    updated_at: "2019-12-12T20:10:40.557Z",
                    color_variable: "bg"
                },
                {
                    id: 489,
                    x: 14,
                    y: 6,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.555Z",
                    updated_at: "2019-12-12T20:10:40.555Z",
                    color_variable: "bg"
                },
                {
                    id: 488,
                    x: 13,
                    y: 6,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.553Z",
                    updated_at: "2019-12-12T20:10:40.553Z",
                    color_variable: "bg"
                },
                {
                    id: 487,
                    x: 12,
                    y: 6,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.551Z",
                    updated_at: "2019-12-12T20:10:40.551Z",
                    color_variable: "bg"
                },
                {
                    id: 486,
                    x: 11,
                    y: 6,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.549Z",
                    updated_at: "2019-12-12T20:10:40.549Z",
                    color_variable: "bg"
                },
                {
                    id: 485,
                    x: 10,
                    y: 6,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.548Z",
                    updated_at: "2019-12-12T20:10:40.548Z",
                    color_variable: "bg"
                },
                {
                    id: 484,
                    x: 9,
                    y: 6,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.546Z",
                    updated_at: "2019-12-12T20:10:40.546Z",
                    color_variable: "bg"
                },
                {
                    id: 483,
                    x: 8,
                    y: 6,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.544Z",
                    updated_at: "2019-12-12T20:10:40.544Z",
                    color_variable: "bg"
                },
                {
                    id: 482,
                    x: 7,
                    y: 6,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.542Z",
                    updated_at: "2019-12-12T20:10:40.542Z",
                    color_variable: "bg"
                },
                {
                    id: 481,
                    x: 6,
                    y: 6,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.540Z",
                    updated_at: "2019-12-12T20:10:40.540Z",
                    color_variable: "bg"
                },
                {
                    id: 480,
                    x: 5,
                    y: 6,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.536Z",
                    updated_at: "2019-12-12T20:10:40.536Z",
                    color_variable: "bg"
                },
                {
                    id: 479,
                    x: 4,
                    y: 6,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.533Z",
                    updated_at: "2019-12-12T20:10:40.533Z",
                    color_variable: "bg"
                },
                {
                    id: 478,
                    x: 3,
                    y: 6,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.531Z",
                    updated_at: "2019-12-12T20:10:40.531Z",
                    color_variable: "bg"
                },
                {
                    id: 477,
                    x: 2,
                    y: 6,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.529Z",
                    updated_at: "2019-12-12T20:10:40.529Z",
                    color_variable: "bg"
                },
                {
                    id: 476,
                    x: 1,
                    y: 6,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.528Z",
                    updated_at: "2019-12-12T20:10:40.528Z",
                    color_variable: "bg"
                },
                {
                    id: 475,
                    x: 25,
                    y: 7,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.526Z",
                    updated_at: "2019-12-12T20:10:40.526Z",
                    color_variable: "bg"
                },
                {
                    id: 474,
                    x: 24,
                    y: 7,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.524Z",
                    updated_at: "2019-12-12T20:10:40.524Z",
                    color_variable: "bg"
                },
                {
                    id: 473,
                    x: 23,
                    y: 7,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.522Z",
                    updated_at: "2019-12-12T20:10:40.522Z",
                    color_variable: "bg"
                },
                {
                    id: 472,
                    x: 22,
                    y: 7,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.521Z",
                    updated_at: "2019-12-12T20:10:40.521Z",
                    color_variable: "bg"
                },
                {
                    id: 471,
                    x: 21,
                    y: 7,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.519Z",
                    updated_at: "2019-12-12T20:10:40.519Z",
                    color_variable: "bg"
                },
                {
                    id: 470,
                    x: 20,
                    y: 7,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.517Z",
                    updated_at: "2019-12-12T20:10:40.517Z",
                    color_variable: "bg"
                },
                {
                    id: 469,
                    x: 19,
                    y: 7,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.515Z",
                    updated_at: "2019-12-12T20:10:40.515Z",
                    color_variable: "bg"
                },
                {
                    id: 468,
                    x: 18,
                    y: 7,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.513Z",
                    updated_at: "2019-12-12T20:10:40.513Z",
                    color_variable: "bg"
                },
                {
                    id: 467,
                    x: 17,
                    y: 7,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.511Z",
                    updated_at: "2019-12-12T20:10:40.511Z",
                    color_variable: "bg"
                },
                {
                    id: 466,
                    x: 16,
                    y: 7,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.509Z",
                    updated_at: "2019-12-12T20:10:40.509Z",
                    color_variable: "bg"
                },
                {
                    id: 465,
                    x: 15,
                    y: 7,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.505Z",
                    updated_at: "2019-12-12T20:10:40.505Z",
                    color_variable: "bg"
                },
                {
                    id: 464,
                    x: 14,
                    y: 7,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.503Z",
                    updated_at: "2019-12-12T20:10:40.503Z",
                    color_variable: "bg"
                },
                {
                    id: 463,
                    x: 13,
                    y: 7,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.500Z",
                    updated_at: "2019-12-12T20:10:40.500Z",
                    color_variable: "bg"
                },
                {
                    id: 462,
                    x: 12,
                    y: 7,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.498Z",
                    updated_at: "2019-12-12T20:10:40.498Z",
                    color_variable: "bg"
                },
                {
                    id: 461,
                    x: 11,
                    y: 7,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.496Z",
                    updated_at: "2019-12-12T20:10:40.496Z",
                    color_variable: "bg"
                },
                {
                    id: 460,
                    x: 10,
                    y: 7,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.493Z",
                    updated_at: "2019-12-12T20:10:40.493Z",
                    color_variable: "bg"
                },
                {
                    id: 459,
                    x: 9,
                    y: 7,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.491Z",
                    updated_at: "2019-12-12T20:10:40.491Z",
                    color_variable: "bg"
                },
                {
                    id: 458,
                    x: 8,
                    y: 7,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.489Z",
                    updated_at: "2019-12-12T20:10:40.489Z",
                    color_variable: "bg"
                },
                {
                    id: 457,
                    x: 7,
                    y: 7,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.486Z",
                    updated_at: "2019-12-12T20:10:40.486Z",
                    color_variable: "bg"
                },
                {
                    id: 456,
                    x: 6,
                    y: 7,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.484Z",
                    updated_at: "2019-12-12T20:10:40.484Z",
                    color_variable: "bg"
                },
                {
                    id: 455,
                    x: 5,
                    y: 7,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.482Z",
                    updated_at: "2019-12-12T20:10:40.482Z",
                    color_variable: "bg"
                },
                {
                    id: 454,
                    x: 4,
                    y: 7,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.480Z",
                    updated_at: "2019-12-12T20:10:40.480Z",
                    color_variable: "bg"
                },
                {
                    id: 453,
                    x: 3,
                    y: 7,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.477Z",
                    updated_at: "2019-12-12T20:10:40.477Z",
                    color_variable: "bg"
                },
                {
                    id: 452,
                    x: 2,
                    y: 7,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.475Z",
                    updated_at: "2019-12-12T20:10:40.475Z",
                    color_variable: "bg"
                },
                {
                    id: 451,
                    x: 1,
                    y: 7,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.473Z",
                    updated_at: "2019-12-12T20:10:40.473Z",
                    color_variable: "bg"
                },
                {
                    id: 450,
                    x: 25,
                    y: 8,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.467Z",
                    updated_at: "2019-12-12T20:10:40.467Z",
                    color_variable: "bg"
                },
                {
                    id: 449,
                    x: 24,
                    y: 8,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:40.465Z",
                    updated_at: "2019-12-12T20:10:40.465Z",
                    color_variable: "bg"
                },
                {
                    id: 42,
                    x: 17,
                    y: 24,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.464Z",
                    updated_at: "2019-12-12T20:10:39.464Z",
                    color_variable: "bg"
                },
                {
                    id: 41,
                    x: 16,
                    y: 24,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.461Z",
                    updated_at: "2019-12-12T20:10:39.461Z",
                    color_variable: "bg"
                },
                {
                    id: 40,
                    x: 15,
                    y: 24,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.458Z",
                    updated_at: "2019-12-12T20:10:39.458Z",
                    color_variable: "bg"
                },
                {
                    id: 39,
                    x: 14,
                    y: 24,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.456Z",
                    updated_at: "2019-12-12T20:10:39.456Z",
                    color_variable: "bg"
                },
                {
                    id: 38,
                    x: 13,
                    y: 24,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.453Z",
                    updated_at: "2019-12-12T20:10:39.453Z",
                    color_variable: "bg"
                },
                {
                    id: 37,
                    x: 12,
                    y: 24,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.450Z",
                    updated_at: "2019-12-12T20:10:39.450Z",
                    color_variable: "bg"
                },
                {
                    id: 36,
                    x: 11,
                    y: 24,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.448Z",
                    updated_at: "2019-12-12T20:10:39.448Z",
                    color_variable: "bg"
                },
                {
                    id: 35,
                    x: 10,
                    y: 24,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.445Z",
                    updated_at: "2019-12-12T20:10:39.445Z",
                    color_variable: "bg"
                },
                {
                    id: 34,
                    x: 9,
                    y: 24,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.443Z",
                    updated_at: "2019-12-12T20:10:39.443Z",
                    color_variable: "bg"
                },
                {
                    id: 33,
                    x: 8,
                    y: 24,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.438Z",
                    updated_at: "2019-12-12T20:10:39.438Z",
                    color_variable: "bg"
                },
                {
                    id: 32,
                    x: 7,
                    y: 24,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.436Z",
                    updated_at: "2019-12-12T20:10:39.436Z",
                    color_variable: "bg"
                },
                {
                    id: 31,
                    x: 6,
                    y: 24,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.433Z",
                    updated_at: "2019-12-12T20:10:39.433Z",
                    color_variable: "bg"
                },
                {
                    id: 30,
                    x: 5,
                    y: 24,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.430Z",
                    updated_at: "2019-12-12T20:10:39.430Z",
                    color_variable: "bg"
                },
                {
                    id: 29,
                    x: 4,
                    y: 24,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.428Z",
                    updated_at: "2019-12-12T20:10:39.428Z",
                    color_variable: "bg"
                },
                {
                    id: 28,
                    x: 3,
                    y: 24,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.425Z",
                    updated_at: "2019-12-12T20:10:39.425Z",
                    color_variable: "bg"
                },
                {
                    id: 27,
                    x: 2,
                    y: 24,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.423Z",
                    updated_at: "2019-12-12T20:10:39.423Z",
                    color_variable: "bg"
                },
                {
                    id: 26,
                    x: 1,
                    y: 24,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.420Z",
                    updated_at: "2019-12-12T20:10:39.420Z",
                    color_variable: "bg"
                },
                {
                    id: 25,
                    x: 25,
                    y: 25,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.417Z",
                    updated_at: "2019-12-12T20:10:39.417Z",
                    color_variable: "bg"
                },
                {
                    id: 24,
                    x: 24,
                    y: 25,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.415Z",
                    updated_at: "2019-12-12T20:10:39.415Z",
                    color_variable: "bg"
                },
                {
                    id: 23,
                    x: 23,
                    y: 25,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.412Z",
                    updated_at: "2019-12-12T20:10:39.412Z",
                    color_variable: "bg"
                },
                {
                    id: 22,
                    x: 22,
                    y: 25,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.409Z",
                    updated_at: "2019-12-12T20:10:39.409Z",
                    color_variable: "bg"
                },
                {
                    id: 21,
                    x: 21,
                    y: 25,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.407Z",
                    updated_at: "2019-12-12T20:10:39.407Z",
                    color_variable: "bg"
                },
                {
                    id: 20,
                    x: 20,
                    y: 25,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.404Z",
                    updated_at: "2019-12-12T20:10:39.404Z",
                    color_variable: "bg"
                },
                {
                    id: 19,
                    x: 19,
                    y: 25,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.402Z",
                    updated_at: "2019-12-12T20:10:39.402Z",
                    color_variable: "bg"
                },
                {
                    id: 18,
                    x: 18,
                    y: 25,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.399Z",
                    updated_at: "2019-12-12T20:10:39.399Z",
                    color_variable: "bg"
                },
                {
                    id: 17,
                    x: 17,
                    y: 25,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.397Z",
                    updated_at: "2019-12-12T20:10:39.397Z",
                    color_variable: "bg"
                },
                {
                    id: 16,
                    x: 16,
                    y: 25,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.395Z",
                    updated_at: "2019-12-12T20:10:39.395Z",
                    color_variable: "bg"
                },
                {
                    id: 15,
                    x: 15,
                    y: 25,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.392Z",
                    updated_at: "2019-12-12T20:10:39.392Z",
                    color_variable: "bg"
                },
                {
                    id: 14,
                    x: 14,
                    y: 25,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.389Z",
                    updated_at: "2019-12-12T20:10:39.389Z",
                    color_variable: "bg"
                },
                {
                    id: 13,
                    x: 13,
                    y: 25,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.387Z",
                    updated_at: "2019-12-12T20:10:39.387Z",
                    color_variable: "bg"
                },
                {
                    id: 12,
                    x: 12,
                    y: 25,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.384Z",
                    updated_at: "2019-12-12T20:10:39.384Z",
                    color_variable: "bg"
                },
                {
                    id: 11,
                    x: 11,
                    y: 25,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.381Z",
                    updated_at: "2019-12-12T20:10:39.381Z",
                    color_variable: "bg"
                },
                {
                    id: 10,
                    x: 10,
                    y: 25,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.378Z",
                    updated_at: "2019-12-12T20:10:39.378Z",
                    color_variable: "bg"
                },
                {
                    id: 9,
                    x: 9,
                    y: 25,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.376Z",
                    updated_at: "2019-12-12T20:10:39.376Z",
                    color_variable: "bg"
                },
                {
                    id: 8,
                    x: 8,
                    y: 25,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.372Z",
                    updated_at: "2019-12-12T20:10:39.372Z",
                    color_variable: "bg"
                },
                {
                    id: 7,
                    x: 7,
                    y: 25,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.369Z",
                    updated_at: "2019-12-12T20:10:39.369Z",
                    color_variable: "bg"
                },
                {
                    id: 6,
                    x: 6,
                    y: 25,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.367Z",
                    updated_at: "2019-12-12T20:10:39.367Z",
                    color_variable: "bg"
                },
                {
                    id: 5,
                    x: 5,
                    y: 25,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.364Z",
                    updated_at: "2019-12-12T20:10:39.364Z",
                    color_variable: "bg"
                },
                {
                    id: 4,
                    x: 4,
                    y: 25,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.361Z",
                    updated_at: "2019-12-12T20:10:39.361Z",
                    color_variable: "bg"
                },
                {
                    id: 3,
                    x: 3,
                    y: 25,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.358Z",
                    updated_at: "2019-12-12T20:10:39.358Z",
                    color_variable: "bg"
                },
                {
                    id: 2,
                    x: 2,
                    y: 25,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.356Z",
                    updated_at: "2019-12-12T20:10:39.356Z",
                    color_variable: "bg"
                },
                {
                    id: 1,
                    x: 1,
                    y: 25,
                    color: "rgb(255, 255, 255)",
                    block_id: 1,
                    created_at: "2019-12-12T20:10:39.342Z",
                    updated_at: "2019-12-12T20:10:39.342Z",
                    color_variable: "bg"
                }
            ]
        }
    }]
}, action) {
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