import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../navigation'

type CheckoutSuccessScreenRouteProp = RouteProp<
  RootStackParamList,
  'CheckoutSuccess'
>

type CheckoutSuccessScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'CheckoutSuccess'
>

export type CheckoutSuccessScreenProps = {
  route: CheckoutSuccessScreenRouteProp
  navigation: CheckoutSuccessScreenNavigationProp
}
