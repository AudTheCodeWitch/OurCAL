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

export default cardsReducer