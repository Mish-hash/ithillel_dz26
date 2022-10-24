export const ACTIONS = {
    ADD_NOTE: 'ADD_NOTE',

};

export function addNote(text) {
    return {
        type: ACTIONS.ADD_NOTE,
        value: text,
    }
}

