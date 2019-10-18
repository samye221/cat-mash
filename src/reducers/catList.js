const initialState = {
    catList: [],
}

const reducer = (state = initialState, action) => {
    if (action.type === 'LOAD_CAT_LIST') {
        const cats = action.cats.images.map(c => {
            return Object.assign(c, {count: 0})
        })
        return {
            ...state,
            catList: cats
        }
    }
    return state
}

export default reducer
