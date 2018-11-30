export default function(state = false , action) {
    switch(action.type) {
        case "TOGGLING_SET_CHECKED":
            return {
                ...state,
                checked: action.checked
            };
        default:
            return state;
    }
}