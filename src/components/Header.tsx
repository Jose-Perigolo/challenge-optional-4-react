import { Flex } from '@chakra-ui/layout'
import { Img, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Icon } from '@chakra-ui/icons'

export function Header () {
  const router = useRouter()

  return (
    <Flex
      as='header'
      w='100%'
      maxWidth ='1440px'
      m='auto'
      h={[50,100]}
      px={['14px','140px']}
      align='center'
      justify='center'
      bg='gray.50'
    >
      {router.pathname.includes('continents') && (
        <NextLink href='/' passHref>
          <Link>
            <Icon xmlns="http://www.w3.org/2000/svg" width={[2,4]} height={[4,6]} viewBox="0 0 10 18" fill="none">
              <path d="M9 17L1 9L9 1" stroke="#47585B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </Icon>
          </Link>
        </NextLink>
      )}
      <Img src='/logo.svg' alt='logo' w={[28,184]} m='auto'/>
    </Flex>
  )
}
