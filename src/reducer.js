
const initialState = {
    count: 0,
    posts: {}
}

export const reducer = (state = initialState, action) => {
    console.log("reducer")
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                count: state.count + 1
            }
        case "DECREMENT":
            return {
                ...state,
                count: state.count - 1
            }
        case "FETCH_POSTS":
            return {
                ...state,
                posts: action.payload
            }
        default:
            return state
    }
}