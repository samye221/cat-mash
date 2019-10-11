const initialState = {
    catList: []
}

const reducer = (state = initialState, action) => {
    if (action.type === 'LOAD_CAT_LIST') {
        return {
            ...state,
            catList: action.cats
        }
    }

    return state
}

export default reducer