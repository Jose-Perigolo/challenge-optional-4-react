import { Img } from '@chakra-ui/react'

import { Heading, Link, Text } from '@chakra-ui/layout'

import { Swiper, SwiperSlide } from 'swiper/react'
import NextLink from 'next/link'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper'

// install Swiper modules
SwiperCore.use([Pagination, Navigation])

export function CustomSwiper () {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true
      }}
      navigation={true}
      className='mySwiper'
    >
      <SwiperSlide>
        <Img src='./images/europe.png' alt='Europe' />
        <NextLink href='/continents/europe'>
          <Link display='contents'>
            <Heading fontSize={['24px','48px']} position='absolute' top='40%'>
              Europa
            </Heading>
            <Text position='absolute' top='55%' fontSize={[14,24]} fontWeight='700'>
              O continente mais antigo.
            </Text>
          </Link>
        </NextLink>
      </SwiperSlide>
      <SwiperSlide>
        <Img src='./images/africa.jpg' alt='Africa' filter='brightness(0.6)' />
        <NextLink href='/continents/africa'>
          <Link display='contents'>
            <Heading fontSize={['24px','48px']} position='absolute' top='40%'>
              Africa
            </Heading>
            <Text position='absolute' top='55%' fontSize={[14,24]} fontWeight='700'>
             O continente onde a espécie humana se originou.
            </Text>
          </Link>
        </NextLink>
      </SwiperSlide>
      <SwiperSlide>
        <Img
          src='./images/america.jpg'
          alt='America'
          filter='brightness(0.6)'
        />
        <NextLink href='/continents/america'>
          <Link display='contents'>
            <Heading fontSize={['24px','48px']} position='absolute' top='40%'>
              América
            </Heading>
            <Text position='absolute' top='55%' fontSize={[14,24]} fontWeight='700'>
             Dividida em América do Norte, América Central e América do Sul.
            </Text>
          </Link>
        </NextLink>
      </SwiperSlide>
      <SwiperSlide>
        <Img
          src='./images/oceania.jpg'
          alt='Oceania'
          filter='brightness(0.6)'
        />
        <NextLink href='/continents/oceania'>
          <Link display='contents'>
            <Heading fontSize={['24px','48px']} position='absolute' top='40%'>
              Oceania
            </Heading>
            <Text position='absolute' top='55%' fontSize={[14,24]}fontWeight='700'>
              Composta por vários grupos de ilhas.
            </Text>
          </Link>
        </NextLink>
      </SwiperSlide>
      <SwiperSlide>
        <Img src='./images/asia.jpg' alt='Asia' filter='brightness(0.6)' />
        <NextLink href='/continents/asia'>
          <Link display='contents'>
            <Heading fontSize={['24px','48px']} position='absolute' top='40%'>
              Asia
            </Heading>
            <Text position='absolute' top='55%' fontSize={[14,24]} fontWeight='700'>
              O maior continente.
            </Text>
          </Link>
        </NextLink>
      </SwiperSlide>
    </Swiper>
  )
}
