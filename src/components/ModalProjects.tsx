import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  useToast
} from '@chakra-ui/react'
import React from 'react'
import { ProjectTypes } from '~/types/Projects.type'

interface ModalDetailProjectProps {
  isOpen: ProjectTypes | null
  onClose: () => void
  data: ProjectTypes[]
}

export default function ModalDetailProjects({ isOpen, onClose }: ModalDetailProjectProps) {
  const OverlayOne = () => <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px) hue-rotate(90deg)' />
  const [overlay] = React.useState(<OverlayOne />)
  const toast = useToast()
  return (
    <>
      <Modal isCentered isOpen={isOpen !== null} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>{isOpen && isOpen.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              <span className='underline font-bold text-teal-300'>Number of participants:</span>{' '}
              {isOpen && isOpen.participants}
            </Text>
            <Text>
              <span className='underline font-bold text-teal-300'>Name of participants:</span> {isOpen && isOpen.user}
            </Text>
            <Text>
              <span className='underline font-bold text-teal-300'>Partner:</span> {isOpen && isOpen.partner}
            </Text>
            <Text>
              <span className='underline font-bold text-teal-300'>Funtion:</span> {isOpen && isOpen.funtion}
            </Text>
            <Text>
              <span className='underline font-bold text-teal-300'>Description:</span> {isOpen && isOpen.description}
            </Text>
            <Text
              onClick={() =>
                toast({
                  title: `I'm sorry, you do not have permission to access the link due to some security issues.`,
                  status: 'error',
                  isClosable: true
                })
              }
            >
              <span className='underline font-bold text-teal-300'>Link: </span>{' '}
              <span className='hover:text-yellow-500 hover:underline'>{isOpen && isOpen.source_code_link}</span>
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
