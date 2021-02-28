import * as React from 'react'
import { View } from 'react-native'
import Title from '../../components/atoms/title'
import { CheckoutScreenProps } from '../../navigations/types/screens/checkout'

export default function CheckoutScreen({
  navigation,
  route,
}: CheckoutScreenProps) {
  return (
    <View>
      <Title>Checkout Screen</Title>
    </View>
  )
}
