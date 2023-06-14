import { ChakraProvider, cookieStorageManagerSSR, localStorageManager } from '@chakra-ui/react'
import theme from '../lib/theme'

interface ChakraProps {
  cookies: string
  children: React.ReactNode
}

export default function Chakra({ cookies, children }: ChakraProps) {
  const colorModeManager = typeof cookies === 'string' ? cookieStorageManagerSSR(cookies) : localStorageManager

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getServerSideProps({ req }: any) {
  return {
    props: {
      cookies: req.headers.cookie ?? ''
    }
  }
}
