import * as React from 'react'
import { Text } from 'react-native'

type Props = {
  children: React.ReactNode
}

const Title: React.FC<Props> = ({ children }) => {
  return <Text>{children}</Text>
}

export default Title
