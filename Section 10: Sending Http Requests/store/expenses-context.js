import { createContext, useReducer } from 'react';

export const ExpensesContext = createContext({
  // This is not an initial value.
  // This will help us to autocomplete code
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  setExpenses: expenses => {},
  deleteExpense: id => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      // Make sure you update the state in an immutable way
      // const id = new Date().toString() + Math.random().toString();
      // Now I expect to get the id from firebase
      return [action.payload, ...state];
    case 'SET':
      return action.payload.reverse();
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex(
        expense => expense.id === action.payload.id,
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case 'DELETE':
      return state.filter(expense => expense.id !== action.payload);
    default:
      // The reducer function has to return the updated state
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, []);

  const addExpense = expenseData => {
    // The name of the action property could be whatever.
    // e.g. dispatch({theCoolestProp: 'ADD', theCoolestPayload: expenseData})
    dispatch({ type: 'ADD', payload: expenseData });
  };

  const setExpenses = expenses => {
    dispatch({ type: 'SET', payload: expenses });
  };

  const deleteExpense = id => {
    dispatch({ type: 'DELETE', payload: id });
  };

  const updateExpense = (id, expenseData) => {
    dispatch({ type: 'UPDATE', payload: { id, data: expenseData } });
  };

  const value = {
    expenses: expensesState,
    addExpense,
    setExpenses,
    deleteExpense,
    updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
