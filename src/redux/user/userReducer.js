const initialState = []

const reducer = (state = initialState , action) =>{
    switch (action.type) {
        case 'SAVE_USERS':
            state = action.payload;
            return state;
    
        default: return state
    }
}

export default reducer