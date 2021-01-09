const initState = {
    user: ''
};

const Reducer = (state = initState, action) => {
    switch (action.type) {
        case 'NEXT_USER':
            return {
                ...state,
                user: action.user
            };
        default:
            return state;
    }
};

export default Reducer;
