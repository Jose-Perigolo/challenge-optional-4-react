import { Flex, Text, Box, SimpleGrid } from '@chakra-ui/layout'
import { Icon, IconProps, Img } from '@chakra-ui/react'

interface TravelTypesProps {
  isWide?: boolean
}

const CircleIcon = (props : IconProps) => (
  <Icon viewBox='0 0 200 200' boxSize={3} color='yellow.400' {...props}>
    <path
      fill='currentColor'
      d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
    />
  </Icon>
)

export function TravelTypes ({ isWide = true }: TravelTypesProps) {

  if (isWide) {
    return (
      <Flex
        direction='row'
        mx='140px'
        my={20}
        color='gray.600'
        justify='space-between'
      >
        <Flex w={40} direction='column' align='center'>
          <Img src='./icons/cocktail.svg' alt='cocktail' w='85px' />
          <Text fontWeight='600' fontSize='24px' mt={4}>
            vida noturna
          </Text>
        </Flex>
        <Flex w={40} direction='column' align='center'>
          <Img src='./icons/surf.svg' alt='surf' w='85px' />
          <Text fontWeight='600' fontSize='24px' mt={4}>
            praia
          </Text>
        </Flex>
        <Flex w={40} direction='column' align='center'>
          <Img src='./icons/building.svg' alt='building' w='85px' />
          <Text fontWeight='600' fontSize='24px' mt={4}>
            moderno
          </Text>
        </Flex>
        <Flex w={32} ml={8} direction='column' align='center'>
          <Img src='./icons/museum.svg' alt='museum' w='85px' />
          <Text fontWeight='600' fontSize='24px' mt={4}>
            clássico
          </Text>
        </Flex>
        <Flex ml={16} direction='column' align='center'>
          <Img src='./icons/earth.svg' alt='earth' w='85px' />
          <Text fontWeight='600' fontSize='24px' mt={4}>
            e mais...
          </Text>
        </Flex>
      </Flex>
    )
  }

  return (
    <SimpleGrid fontSize='18px' fontWeight='500' columns={2} spacing={1} my={10} mx='50px' color='gray.600'>
      <Box>
        <Text>
          <CircleIcon /> vida noturna
        </Text>
        <Text mt={5}>
          <CircleIcon /> moderno
        </Text>
      </Box>
      <Box textAlign='end'>
        <Text>
          <CircleIcon /> praia
        </Text>
        <Text mt={5}>
          <CircleIcon /> clássico
        </Text>
      </Box>
      <Box gridColumn='1/-1' justifySelf='center'>
        <Text mt={5}>
          <CircleIcon /> e mais...
        </Text>
      </Box>
    </SimpleGrid>
  )
}
