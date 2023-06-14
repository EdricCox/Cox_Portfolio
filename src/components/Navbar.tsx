import { Container, Box, Link, Stack, Image, Flex, useColorModeValue, useToast } from '@chakra-ui/react'
import ThemeToggleButton from './ThemeToggleButton'

import LogoNavbar from '../assets/avt-fb.png'

const Navbar = () => {
  const toast = useToast()
  const handleLinkNotUpdated = () => {
    toast({
      title: `The shown in this page might not be up-to-date.`,
      status: 'warning',
      isClosable: true
    })
  }
  return (
    <Box
      position='fixed'
      as='nav'
      w='100%'
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
    >
      <Container
        display='flex'
        p={2}
        maxW='container.md'
        flexWrap='wrap'
        alignContent='center'
        justifyContent='space-between'
      >
        <Flex align='center' mr={5}>
          <Image borderRadius='full' boxSize='42px' src={LogoNavbar} alt='logo Portfolio Nhất' />
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems='center'
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
          gap={6}
        >
          <Link fontWeight='600'>Infomation</Link>
          <Link fontWeight='600' onClick={handleLinkNotUpdated}>
            Works
          </Link>
          <Link fontWeight='600' onClick={handleLinkNotUpdated}>
            Posts
          </Link>
          <Link fontWeight='600' onClick={handleLinkNotUpdated}>
            Abouts
          </Link>
        </Stack>

        <Box flex={1} textAlign='end' alignContent='end' alignItems='end' alignSelf='end'>
          <ThemeToggleButton />
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
