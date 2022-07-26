import { createContext, useReducer } from 'react'

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 999,
    date: new Date('2021-12-19'),
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 899,
    date: new Date('2022-08-05'),
  },
  {
    id: 'e3',
    description: 'Some bananas',
    amount: 2.99,
    date: new Date('2022-04-25'),
  },
  {
    id: 'e4',
    description: 'A book',
    amount: 199,
    date: new Date('2022-05-20'),
  },
  {
    id: 'e5',
    description: 'Macbook',
    amount: 249.9,
    date: new Date('2022-02-20'),
  },
  {
    id: 'e6',
    description: 'A pair of shoes',
    amount: 999,
    date: new Date('2021-12-19'),
  },
  {
    id: 'e7',
    description: 'A pair of trousers',
    amount: 8.99,
    date: new Date('2021-01-05'),
  },
  {
    id: 'e8',
    description: 'Some bananas',
    amount: 29.9,
    date: new Date('2022-04-25'),
  },
  {
    id: 'e9',
    description: 'A book',
    amount: 19.9,
    date: new Date('2022-07-19'),
  },
  {
    id: 'e10',
    description: 'Macbook',
    amount: 24.99,
    date: new Date('2022-07-20'),
  },
]

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
})
const expensesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString + Math.random().toString()
      return [{ ...action.payload, id: id }, ...state]

    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      )
      const updatableExpense = state[updatableExpenseIndex]
      const updatedItem = { ...updatableExpense, ...action.payload.data }
      const updatableExpenses = [...state]
      updatableExpenses[updatableExpenseIndex] = updatedItem
      return updatableExpenses

    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload)
    default:
      return state
  }
}

const ExpensesContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES)

  function addExpense(expenseData) {
    dispatch({ type: 'ADD', payload: expenseData })
  }

  function deleteExpense(id) {
    dispatch({ type: 'DELETE', payload: id })
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } })
  }
  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  }
  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  )
}

export default ExpensesContextProvider
