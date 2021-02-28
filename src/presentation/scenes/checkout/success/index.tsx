import * as React from 'react'
import { View } from 'react-native'
import Title from '../../../components/atoms/title'
import { CheckoutSuccessScreenProps } from '../../../navigations/types/screens/checkout-success'

export default function CheckoutSuccessScreen({
  navigation,
  route,
}: CheckoutSuccessScreenProps) {
  return (
    <View>
      <Title>CheckoutSuccessScreen</Title>
    </View>
  )
}
