const initialState = {
    catList: [],
    catsWithVotes: [],
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

    // if (action.type === 'ADD_SCORES') {
    //     const cats = action.payload.catList;
    //     const votedCat = action.payload.cat;
    //     const catsWithVotes = cats.map(c => {
    //         const count = c.count ? c.count : 0
    //         if (c.id === votedCat.id) {
                
    //             return Object.assign(c, {count: count + 1})
    //         }
    //         else { return Object.assign(c, {count: count}) }
    //     })
    //     return {
    //         ...state,
    //         catsWithVotes: catsWithVotes
    //     }



    // }

    return state
}

export default reducer