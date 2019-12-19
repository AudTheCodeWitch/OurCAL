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

export default paletteReducer