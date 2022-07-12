const initialState = [];


const loginReducer = (state = initialState , action) =>{
    switch (action.type) {
        case 'SAVE_LOGINUSER':
            state = action.payload;
            return state;
    
        default: return state
    }
}

export default loginReducer