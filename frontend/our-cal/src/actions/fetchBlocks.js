export function fetchBlocks() {
    return (dispatch) => {
        fetch('http://localhost:3000/api/blocks')
            .then(resp => resp.json())
            .then(blocks => dispatch({
                type: 'FETCH_BLOCKS',
                payload: blocks.data
            }))
    }
}