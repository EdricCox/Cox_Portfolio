import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './lib/theme.ts'
import Fonts from './components/font.tsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider theme={theme}>
    <Fonts />
    <React.StrictMode>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </React.StrictMode>
  </ChakraProvider>
)
