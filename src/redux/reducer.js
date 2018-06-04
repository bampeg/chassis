const initialState = {
    currentView: ''
}

const CURRENT_VIEW = 'CURRENT_VIEW'

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CURRENT_VIEW:
            return { ...initialState, currentView: action.payload };
        default:
            return state;
    }
}
export function currentView(view) {
    return {
        type: CURRENT_VIEW,
        payload: view
    };
}