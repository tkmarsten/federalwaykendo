import dojoData from '../data/dojo.json'
import { Box, SimpleGrid, Image, Heading, Text } from '@chakra-ui/react'

const Banner = () => {
  return (
    <Box as='section' className='banner' bg='#252525' color='white'>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={5} py='4rem' px='2rem'>
        <Box>
          <Image alt="logo" src={`img/` + dojoData.logo} w={100} />
          <Heading as='h1' className="mt-4">{dojoData.dojo} Kendo Club</Heading>
        </Box>
        <Text align='start' maxWidth={700}>
          Originally formed from the Puyallup Kendo Club, Federal Way Kendo Club was founded in 2009 and has
          been providing instruction of the traditional Japanese martial art of Kendo through the parks department.
          Our club is part of the Pacific Northwest Kendo Federation (PNKF) and the All United States Kendo Federation (AUSKF).
        </Text>
      </SimpleGrid>
    </Box>
  )
}

export default Banner