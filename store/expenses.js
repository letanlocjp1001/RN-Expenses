import { createSlice } from '@reduxjs/toolkit'

const expensesSlices = createSlice({
  name: 'expenses',
  initialState: {
    allExpenses: [
      {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 999,
        date: new Date('2021-12-19'),
      },
    ],
  },

  reducers: {
    addExpense: (state, action) => {
      state.allExpenses.push(action.payload.expense)
    },
    deleteExpense: (state, action) => {
      state.allExpenses.filter((el) => el.id !== action.payload.id)
    },
    updateExpense: (state, action) => {
      const currentItem = state.allExpenses.find(
        (el) => el.id === action.payload.item.id
      )
      const index = state.allExpenses.indexOf(currentItem)
      const updatedItem = {
        item: item,
      }
      allExpenses[index] = updatedItem
    },
  },
})

export const { addExpense, deleteExpense, updateExpense } =
  expensesSlices.actions

export default expensesSlices.reducer
