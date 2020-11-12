# _*Practicing Redux*_

> ### I used this repo to practice Redux Middlewares.  
> ### I wrote my "own" version of Redux Thunk (a worst one of course) to try to get the hang of it. `

### The middleware consist of just this code: 
```javascript
    const propioMid = store => next => action => {
    if (typeof action === "function") {
        return action(store.dispatch);
    }
    return next(action)
    }
```

### So you can perform actions like this one: 

```javascript
    const fetchPosts = idPost => {
    return function (dispatch) {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
            .then(res => res.json())
            .then(data => dispatch({ type: "FETCH_POSTS", payload: data }))
    }
}
```