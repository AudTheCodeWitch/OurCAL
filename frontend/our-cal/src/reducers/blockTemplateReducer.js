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
        case 'CHANGE_COLOR':
            let pixels = state.blockTemplate.map(p => (p.color_variable === (action.data.button)) ? {...p, color: action.data.color} : p);
            return {
                ...state,
                blockTemplate: pixels
            };
        case 'CLEAR_BLOCK':
            let bgColor = action.block.find(p => p.color_variable === 'bg');
            bgColor = bgColor.color;
            let submittedPixels = state.blockTemplate.map(p => {
                return {...p, color: bgColor, color_variable: 'bg'};
            });
            return {
                ...state,
                blockTemplate: submittedPixels
            };
        default:
            return state;
    }
}

export default blockTemplateReducer