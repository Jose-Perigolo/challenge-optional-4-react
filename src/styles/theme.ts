import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        yellow:{
            '400' : '#FFBA08'
        },
        gray: {
            '50' : '#F5F8FA',
            '100' : '#DADADA',
            '400' : '#999999',
            '600' : '#47585B',
            '900' : '#1d1d1d'
        }
    },
    fonts : {
        heading: 'Poppins, sans-serif',
        body: 'Poppins, sans-serif'
    },
    styles: {
        global: {
            body: {
                bg: 'gray.50',
                color: 'gray.50',
            }
        }
    }
})