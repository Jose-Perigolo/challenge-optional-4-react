import { Box, Text } from "@chakra-ui/layout";
import { Img } from "@chakra-ui/react";

interface BannerProps {
  showAirplane?: boolean;
}

export function Banner ({showAirplane = true} : BannerProps) {

    return (
      <Box
        display='flex'
        bgImage="url('/images/banner.png')"
        bgRepeat='no-repeat'
        bgSize={!showAirplane && 'cover'}
        h={[163,368]}
        px={['16px','140px']}
      >
        <Box pt={[7,20]} pb={[7,24]}>
          <Text fontSize={['20px',36]} fontWeight={500} mb='1'>
            5 Continentes,
          </Text>
          <Text fontSize={['20px',36]} fontWeight={500} mb={['8px','20px']}>
            infinitas possibilidades
          </Text>
          <Box>
            <Text fontSize={[14,20]} color='gray.100'>
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Box>
        </Box>
        {showAirplane && 
        <Box ml='auto' mt='auto'>
          <Img src='./icons/airplane.svg' alt='airplane' />
        </Box>
        }
      </Box>
    )
}