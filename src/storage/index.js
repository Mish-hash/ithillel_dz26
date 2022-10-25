import { createStore } from "redux";
import { ACTIONS } from "./actions";

const initialState = {
    notes: [
        {
            id: Date.now(),
            text: 'Inital text'
        },
    ],
    count: 1,
}

function reduser(state, action) {
    switch(action.type) {
        case ACTIONS.ADD_NOTE:
            state.notes = [...state.notes, {id: Date.now(), text: action.value}];
            state.count = state.count + 1;
            console.log(state)
            return {...state};
        default: return state;
    }
}

const store = createStore(reduser, initialState);

export default store;
