import React, { ReactNode } from 'react'
import { Text } from 'react-native'

type TitleProps = {
  children: ReactNode
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return <Text>{children}</Text>
}

export default Title
