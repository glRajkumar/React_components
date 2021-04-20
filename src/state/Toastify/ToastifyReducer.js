
function ToastifyReducer(state, { type, payload }) {
    switch (type) {
        case "ADD":
            return [...state, payload]

        case "REMOVE":
            return state.filter(e => e.id !== payload)

        default:
            return state
    }
}

export default ToastifyReducer