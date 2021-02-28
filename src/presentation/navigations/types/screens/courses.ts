import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../navigation'

type CoursesScreenRouteProp = RouteProp<RootStackParamList, 'Courses'>

type CoursesScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Courses'
>

export type CoursesScreenProps = {
  route: CoursesScreenRouteProp
  navigation: CoursesScreenNavigationProp
}
