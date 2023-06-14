/* eslint-disable react/prop-types */
import { motion, MotionProps } from 'framer-motion'
import { chakra, shouldForwardProp, ChakraComponent } from '@chakra-ui/react'
import { ReactNode } from 'react'

type StyledDivProps = MotionProps & {
  children: ReactNode
}

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
}) as ChakraComponent<'div', StyledDivProps>

type SectionProps = {
  children: ReactNode
  delay?: number
}

const Section: React.FC<SectionProps> = ({ children, delay = 0 }) => (
  <StyledDiv
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay }}
    mb={6}
  >
    {children}
  </StyledDiv>
)

export default Section
