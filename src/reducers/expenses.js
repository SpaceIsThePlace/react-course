// EXPENSES REDUCER

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            // console.log("Adding", action.expense);
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            // console.log("Removing ", action.id);
            return state.filter((  expense  ) => expense.id !== action.id);            
        case 'EDIT_EXPENSE':
            // console.log("Editing ", action.id)
            return state.map( (expense) => {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates 
                    };                    
                } else {
                    return expense;
                };
            })
        default:
            return state;
    }
}

export default expensesReducer;