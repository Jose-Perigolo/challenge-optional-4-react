import { Flex, Img, Text } from "@chakra-ui/react";

interface CardProps {
    img: string;
    alt: string;
    icon: string;
    city: string;
    country: string;
}

export function Card ({img, alt, icon, city, country} : CardProps) {
    return (
        <Flex w='256px' h='279px' direction='column' >
            <Img src={img} alt={alt} h='170.66px' />
            <Flex borderTop='none' borderWidth='1px' borderColor='yellow.400' color='gray.900' direction='row' justify="space-between" alignItems='center'>
                <Flex direction='column' padding='20px' maxWidth='180px' >
                    <Text fontSize="20px" lineHeight='25px' fontWeight='600' mb='12px' isTruncated>{city}</Text>
                    <Text fontSize="16px" lineHeight='26px' fontWeight='500' color='gray.400' isTruncated>{country}</Text>
                </Flex>
                <Flex padding='20px' >
                    <Img w='30px' src={icon} />
                </Flex>
            </Flex>
        </Flex>
    )
}