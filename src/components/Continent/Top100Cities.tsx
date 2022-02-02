import { Flex, Heading, SimpleGrid, List } from '@chakra-ui/layout'
import { Card } from './Card'
import { Photos } from '../../types/PhotoProps'

interface Top100CitiesProps {
    photos: Photos
}

export function Top100Cities ({photos} : Top100CitiesProps) {

    return (
        <Flex direction='column' mx={['16px','140px']}>
        <Heading color='gray.600' mb='40px' fontWeight='500'>
          Cidades +100
        </Heading>
        <SimpleGrid columns={4} spacing={10} minChildWidth='260px' mx={['auto','0px']}>
          {photos.map(photo => (
            <List key={photo.id+photo.city} className='li'>
              <Card
                img={photo.urls.regular}
                alt={photo.alt_description || `Image from ${photo.city}`}
                city={photo.city}
                country={photo.country}
                icon={photo.icon}
              />
            </List>
          ))}
        </SimpleGrid>
      </Flex>
    )
}