import { drawerAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const purple = definePartsStyle({
  dialog: {
    borderTopLeftRadius: `3xl`,
    bg: `purple2`,
  },
})

export const drawerTheme = defineMultiStyleConfig({
  variants: { purple },
})