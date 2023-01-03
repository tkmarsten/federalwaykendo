import senseiData from '../data/sensei.json'
import SenseiCard from './SenseiCard'
import { Container, Heading, Grid, Box, GridItem } from '@chakra-ui/react'

const Sensei = () => {
  return (
    <Box bg='gray.100' py='4rem' align='center'>
      <Container>
        <Heading as={'h3'} mb='2rem'>Our Sensei</Heading>
        <Grid justifyContent='center' templateColumns={{ md: 'repeat(2, 1fr)' }} gap={10}>
          {senseiData.map((sensei) => (
            <GridItem key={sensei.name}>
              <SenseiCard name={sensei.name} rank={sensei.rank} />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Sensei