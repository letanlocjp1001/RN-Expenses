import { StyleSheet, View } from 'react-native'
import React from 'react'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'

import { GlobalStyles } from '../../constants/styles'
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 9999,
    date: new Date('2021-12-19'),
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 899,
    date: new Date('2021-01-05'),
  },
  {
    id: 'e3',
    description: 'Some bananas',
    amount: 299,
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
    amount: 249999,
    date: new Date('2022-02-20'),
  },
]

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.constainer}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  )
}

export default ExpensesOutput

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
})
