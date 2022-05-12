export const fetchTodo = (payload) => {
    return { type: 'FETCH_TODO', payload }
}


// function middleware 
export const getTodo = () => {

    //interupt proses sebelum masuk ke reducer
    return function (dispatch, getState) {
        fetch(`https://jsonplaceholder.typicode.com/todos`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            dispatch( fetchTodo(data));
        })
        .catch(err => {
            console.log(err);
        }) 
    }
}


