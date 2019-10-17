export const loadCats = cats => ({ 
    type: 'LOAD_CAT_LIST', 
    cats 
})

export const addScores = (cat, catList) => ({
    type: 'ADD_SCORES',
    payload: {cat, catList}
})

export const addPoint = (cat, catList) => ({
    type: 'ADD_POINT',
    payload: {cat, catList}
})