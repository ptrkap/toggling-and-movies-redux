export default function(state = false , action) {
    switch(action.type) {
        case "TOGGLING_SET_CHECKED":
            return {
                checked: action.checked
            };
        default:
            return state;
    }
}