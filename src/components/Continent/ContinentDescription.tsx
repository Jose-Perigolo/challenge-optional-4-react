import { InfoOutlineIcon } from '@chakra-ui/icons'
import { Flex, Text, Heading, HStack } from '@chakra-ui/layout'
import { Img, Tooltip } from '@chakra-ui/react'

interface ContinentDescriptionProps {
    continent: string;
    country_qty: number;
    language_qty: number;
    top100_qty: number;
    showInfoIcon: boolean;
    children: string;
}

export function ContinentDescription ({continent, country_qty, language_qty, top100_qty, showInfoIcon = true, children} : ContinentDescriptionProps) {

    return (
        <>
        <Flex direction='column' maxHeight={500} position='relative'>
          <Img src={`/images/${continent}.jpg/`} alt={continent} />
          <Heading
            position='absolute'
            bottom='0'
            fontSize={['28px','48px']}
            p={['40px 20px','70px 140px']}
            fontWeight='600'
            alignSelf={['center', 'normal']}
          >
            {continent === 'Europe' ? 'Europa' : continent}
          </Heading>
        </Flex>
        <Flex my={[10,20]} direction={['column','row']} mx={['16px','140px']}>
          <Flex w={['100%','600px']} textAlign='justify' marginRight={['0px','70px']}>
            <Text color='gray.600' fontSize={['14px','24px']}>
              {children}
            </Text>
          </Flex>
          <Flex w={['auto','490px']} my={['16px', '0px']}>
            <HStack w='100%' spacing={10} justify='space-between'>
              <Flex direction='column' align='center' fontWeight='600'>
                <Heading fontSize={['24px','48px']} color='yellow.400'>
                  {country_qty}
                </Heading>
                <Text fontSize={['18px','24px']} color='gray.600' fontWeight={['400', '600']} >
                  países
                </Text>
              </Flex>
              <Flex direction='column' align='center' fontWeight='600'>
                <Heading fontSize={['24px','48px']}  color='yellow.400'>
                  {language_qty}
                </Heading>
                <Text fontSize={['18px','24px']} color='gray.600' fontWeight={['400', '600']} >
                  línguas
                </Text>
              </Flex>
              <Flex direction='column' align='center' fontWeight='600'>
                <Heading fontSize={['24px','48px']} color='yellow.400'>
                  {top100_qty}
                </Heading>
                <Text fontSize={['18px','24px']} color='gray.600' fontWeight={['400', '600']} >
                  cidades +100
                  {showInfoIcon && 
                  <Tooltip
                    label={`Das 100 cidades mais famosas e visitadas do mundo, ${top100_qty} são pertencentes a esse continente.`}
                    hasArrow
                    bg='gray.600'
                    color='gray.50'
                  >
                    <InfoOutlineIcon ml={2} w={3} />
                  </Tooltip>
                  }
                </Text>
              </Flex>
            </HStack>
          </Flex>
        </Flex>
        </>
    )

}