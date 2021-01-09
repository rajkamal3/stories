const initState = {
    theme: 'default'
};

const Reducer = (state = initState, action) => {
    switch (action.type) {
        case 'CHANGE_THEME':
            return {
                ...state,
                theme: action.theme
            };
        default:
            return state;
    }
};

export default Reducer;
