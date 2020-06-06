import { USER } from "./action";

const initialState = { name: "" };

function reducer(state = initialState, action) {

    if (USER) {
        state.name="vamsi"
        return { name: state.name }
    }
}


export default reducer;