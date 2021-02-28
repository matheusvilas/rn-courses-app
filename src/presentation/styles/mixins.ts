import { Dimensions, PixelRatio } from 'react-native'

const WINDOW_WIDTH = Dimensions.get('window').width
const guidelineBaseWidth = 375

export const scaleSize = (size: number): number =>
  (WINDOW_WIDTH / guidelineBaseWidth) * size

export const scaleFont = (size: number): number =>
  size * PixelRatio.getFontScale()
