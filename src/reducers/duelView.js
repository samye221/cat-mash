const initialState = {
    winner: {},
    loser: {},
}

const reducer = (state = initialState, action) => {
    if (action.type === 'ADD_POINT') {
        const selectedCat = action.payload.cat;
        const catList = action.payload.catList;
        Object.assign(selectedCat, {count: selectedCat.count + 1});
        const loser = catList[Math.floor(Math.random() * catList.length)]
        return {
            ...state,
            winner: selectedCat,
            loser: loser !== selectedCat ? loser : catList[Math.floor(Math.random() * catList.length)]
        }
    }

    return state
}

export default reducer