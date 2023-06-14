import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazy-load'
interface GridItemProps {
  description: string
  href: string
  title: string
  thumbnail: string
  onClick: () => void
}

export const GridItem: React.FC<GridItemProps> = ({ description, title, thumbnail, onClick }) => (
  <Box w='100%' textAlign='center'>
    <Link to={''} onClick={onClick}>
      <img src={thumbnail} alt={title} className='grid-item-thumbnail' loading='lazy' />
      <Text mt={2}>{title}</Text>
      <Text fontSize={14}>{description}</Text>
    </Link>
  </Box>
)

interface WorkGridItemProps {
  children: React.ReactNode
  id: string
  title: string
  thumbnail: string
}

export const WorkGridItem: React.FC<WorkGridItemProps> = ({ children, id, title, thumbnail }) => (
  <Box w='100%' textAlign='center'>
    <a href={`/works/${id}`} rel='noopener noreferrer'>
      <LazyLoad>
        <img src={thumbnail} alt={title} className='grid-item-thumbnail' />
      </LazyLoad>
      <Text mt={2} fontSize={20}>
        {title}
      </Text>
      <Text fontSize={14}>{children}</Text>
    </a>
  </Box>
)

export const GridItemStyle: React.FC = () => (
  <style>
    {`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  </style>
)
