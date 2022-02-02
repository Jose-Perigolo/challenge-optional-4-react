import { Box, Flex, Heading } from '@chakra-ui/layout'
import { Header } from '../components/Header'
import { Banner } from '../components/Home/Banner'
import { CustomSwiper } from '../components/Home/CustomSwiper'
import { TravelTypes } from '../components/Home/TravelTypes'
import { motion } from "framer-motion"
import { useBreakpointValue } from '@chakra-ui/react'

const list = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

export default function Home () {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <motion.div
    initial="hidden"
    animate="visible"
    variants={list}
    transition={{ duration: 0.5 }}>
      <Header />
      <Flex
        as='main'
        direction='column'
        h='calc(100% - 100px)'
        w='100%'
        maxWidth={1440}
        mx='auto'
      >
        <Banner showAirplane={isWideVersion} />

        <TravelTypes isWide={isWideVersion} />

        <Box h={["1px", .5]} w={[16,24]} bg='gray.600' mx='auto' />

        <Flex
          direction='column'
          align='center'
          mx='auto'
          p={[6,20]}
          color='gray.600'
        >
          <Heading fontWeight='500' fontSize={['20px', '36px']} mb={[1,4]}>Vamos nessa?</Heading>
          <Heading fontWeight='500' fontSize={['20px', '36px']} >Então escolha seu continente</Heading>
        </Flex>

        <CustomSwiper />
      </Flex>
    </motion.div>
  )
}
