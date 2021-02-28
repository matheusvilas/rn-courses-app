import * as React from 'react'
import { View } from 'react-native'
import Title from '../../components/atoms/title'
import { CoursesScreenProps } from '../../navigations/types/screens/courses'

export default function CoursesScreen({
  navigation,
  route,
}: CoursesScreenProps) {
  return (
    <View>
      <Title>CoursesScreen</Title>
    </View>
  )
}
