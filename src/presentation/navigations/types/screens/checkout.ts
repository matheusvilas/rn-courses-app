import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../navigation'

type CheckoutScreenRouteProp = RouteProp<RootStackParamList, 'Checkout'>

type CheckoutScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Checkout'
>

export type CheckoutScreenProps = {
  route: CheckoutScreenRouteProp
  navigation: CheckoutScreenNavigationProp
}
