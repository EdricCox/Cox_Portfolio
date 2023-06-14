import { BrowserRouter } from 'react-router-dom'
import { Box, Container } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Headers from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <Box as='main' pb={8}>
        <Navbar />
        <Container maxW='container.md' pt={14}>
          <Headers />
          <Footer />
        </Container>
      </Box>
    </BrowserRouter>
  )
}

export default App
