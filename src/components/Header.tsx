import { useState } from 'react'
import {
  Container,
  Heading,
  Box,
  useColorModeValue,
  Image,
  AbsoluteCenter,
  Link,
  List,
  ListItem,
  Button,
  SimpleGrid,
  Grid,
  Tooltip
} from '@chakra-ui/react'
import { IoLogoFacebook, IoLogoGithub, IoStar, IoLogoLinkedin } from 'react-icons/io5'

import Layout from '~/Layouts/article'
import ImageMe from '../assets/AVT-portfolio.png'
import { BioSection, BioYear } from './bioYear'
import Paragraph from '../components/paragraph'
import Section from '../components/section'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { projects, technologies } from '../constant/index'
import { GridItem } from './grid-item'
import ModalDetailProjects from './ModalProjects'
import { ProjectTypes } from '~/types/Projects.type'
const Headers = () => {
  const [projectSimple] = useState(projects)
  const [selectedProject, setSelectedProject] = useState<ProjectTypes | null>(null)

  const onClose = () => setSelectedProject(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isOpen = (project: any) => setSelectedProject(project)
  return (
    <Layout>
      <Container>
        <Box
          borderRadius='lg'
          mb={6}
          p={3}
          textAlign='center'
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          &quot;A man can climb Everest for himself, but when he gets to the top, he plants his country&apos;s flag. And
          neither do I. I love my country, VietNam &quot;
          <AbsoluteCenter axis='both' zIndex='-1' opacity='0.1'>
            <IoStar style={{ fill: 'yellow', fontSize: '60px' }} />
          </AbsoluteCenter>
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as='h2' variant='page-title'>
              Tran Dinh Nhat
            </Heading>
            <p>Fresher ( Developer / Designer / Photographer)</p>
          </Box>
          <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} textAlign='center'>
            <Box
              borderColor='whiteAlpha.800'
              borderWidth={2}
              borderStyle='solid'
              w='100px'
              h='100px'
              display='inline-block'
              borderRadius='full'
              overflow='hidden'
            >
              <Image src={ImageMe} alt='Trần Đình Nhất' />
            </Box>
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as='h3' variant='section-title'>
            Introduction
          </Heading>
          <Paragraph>
            Hello everyone, I&apos;m a Front End Developer in Vietnam. I have a dream of becoming a Front End Developer
            Website and Flutter Developer Mobile. I&apos;m on my way to conquer it and anyone who visits this page and
            reads these words, I wish you success on your chosen path.
          </Paragraph>
        </Section>
        <Section delay={0.2}>
          <Heading as='h3' variant='section-title'>
            Biography
          </Heading>
          <BioSection>
            <BioYear>1999</BioYear>
            Born in Quang Tri Province, VietNam.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            After studying at University of Technology and Education - The University of DaNang, majoring in Automotive
            Engineering, I encountered the Covid pandemic for two consecutive years.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>I switched my field to IT and enrolled in a short-term (6 months) International
            Programming Technician course offered by ApTeachSaiGon.
          </BioSection>
          <BioSection>
            <BioYear>2022 to present</BioYear>
            Working as Nam Phuong Teachnology Co., Ltd
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as='h3' variant='section-title'>
            The hobby
          </Heading>
          <Paragraph>
            Play an intrusment, music, playing soccer, go to the cinema, read books,{' '}
            <Link target='_blank'>photography</Link>
          </Paragraph>
        </Section>
        <Section delay={0.4}>
          <Heading as='h3' variant='section-title'>
            Skills
          </Heading>
          <Grid templateColumns='repeat(5, 1fr)' gap={6}>
            {technologies.map((technology) => (
              <Tooltip
                hasArrow
                label={technology.name}
                bg='gray.300'
                color='black'
                key={technology.name}
                borderRadius='md'
              >
                <Image boxSize='50px' objectFit='cover' src={technology.icon} alt={technology.name} />
              </Tooltip>
            ))}
          </Grid>
        </Section>
        <Section delay={0.5}>
          <Heading as='h3' variant='section-title'>
            Social Network
          </Heading>
          <List>
            <ListItem>
              <Link href='https://github.com/EdricCox' target='_blank'>
                <Button variant='ghost' colorScheme='teal' leftIcon={<IoLogoGithub />}>
                  @EdricCox
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href='https://www.linkedin.com/in/nh%E1%BA%A5t-tr%E1%BA%A7n-%C4%91%C3%ACnh-72270a259/'
                target='_blank'
              >
                <Button variant='ghost' colorScheme='teal' leftIcon={<IoLogoLinkedin />}>
                  Trần Đình Nhất
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href='https://www.facebook.com/coxposeidon/' target='_blank'>
                <Button variant='ghost' colorScheme='teal' leftIcon={<IoLogoFacebook />}>
                  @coxposeidon
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
        <Section delay={0.6}>
          <Heading as='h3' variant='section-title'>
            Productions
          </Heading>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            {projectSimple.map((project) => (
              <GridItem
                key={project.id}
                title={project.name}
                thumbnail={project.image}
                href={project.source_code_link}
                description='View details'
                onClick={() => isOpen(project)}
              />
            ))}

            <ModalDetailProjects data={projectSimple} isOpen={selectedProject} onClose={onClose} />
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Headers
