import { Flex } from '@chakra-ui/layout'
import { Header } from '../Header'
import { useEffect, useState } from 'react'
import Lottie from 'lottie-react'
import animationData from '../../lotties/WorldAnimation.json'
import { unsplashData } from '../../functions/unsplashData'
import { Photos } from '../../types/PhotoProps'
import { ContinentDescription } from './ContinentDescription'
import { Top100Cities } from './Top100Cities'
import { motion } from "framer-motion"
import { useBreakpointValue } from '@chakra-ui/react'

interface ContinentsProps {
  continent: string;
  children: string;
}

export function Continent ({continent, children} : ContinentsProps) {

  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  const [photos, setPhotos] = useState<Photos>([])

  unsplashData({continent})

  useEffect(() => {
      setTimeout(function () {
        unsplashData({continent})
        .then(result => setPhotos(result))
      }, 3000)
  }, [])


  if (photos.length === 0) {
    return (
      <Flex align='center' justify='center' h='100vh'>
        <Lottie
          loop
          autoplay
          animationData={animationData}
          style={{ width: '400px' }}
        />
      </Flex>
    )
  }

  return (
    <motion.div
    initial="hidden"
    animate="visible"
    variants={list}
    transition={{ duration: 0.3 }}>

      <Header />

      <Flex
        as='main'
        direction='column'
        h='calc(100% - 100px)'
        w='100%'
        maxWidth={1440}
        mx='auto'
        mb='80px'
      >
        <ContinentDescription
          continent={continent}
          country_qty={50}
          language_qty={60}
          top100_qty={photos.length}
          showInfoIcon={isWideVersion}
        >
          {children}
        </ContinentDescription>

        <Top100Cities photos={photos} />

      </Flex>
    </motion.div>
  )
}
