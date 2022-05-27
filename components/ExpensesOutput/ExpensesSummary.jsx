import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ExpensesSummary = ({ expenses, periodName }) => {
  return (
    <View>
      <Text>{periodName}</Text>
      <Text>$177.95</Text>
    </View>
  )
}

export default ExpensesSummary

const styles = StyleSheet.create({})
