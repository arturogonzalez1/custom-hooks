export const todoReducer = (state = [], action) => {

    switch (action.type) {
        case '[TODO] add':
            return [...state, action.payload];
        case '[TODO] remove':
            return state.filter(todo => todo.id !== action.payload);
        case '[TODO] toggle':
            return state.map(todo => {

                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done,
                    };
                }
                
                return todo;
            })
        default:
            return state;
    }
    
}