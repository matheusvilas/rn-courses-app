import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CoursesScreen from '../scenes/courses'
import CheckoutSuccessScreen from '../scenes/checkout/success'
import CheckoutScreen from '../scenes/checkout'
import { RootStackParamList } from './types/navigation'

const Stack = createStackNavigator<RootStackParamList>()

export default function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Courses">
      <Stack.Screen name="Courses" component={CoursesScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
      <Stack.Screen name="CheckoutSuccess" component={CheckoutSuccessScreen} />
    </Stack.Navigator>
  )
}
