
export const increment = () => ({ type: "INCREMENT" });

export const decrement = () => ({ type: "DECREMENT" });

export const fetchPosts = idPost => {
    return function (dispatch) {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
            .then(res => res.json())
            .then(data => dispatch({ type: "FETCH_POSTS", payload: data }))
    }
}