import dojoData from '../data/dojo.json'
import { Container, Stack, Heading, Text, Button, Link, Grid, GridItem, Icon } from '@chakra-ui/react'
import { FiClock } from 'react-icons/fi'

const Dojo = () => {
  return (
    <Container my='4rem'>
      <Heading as='h3' mb='2rem'>Our Dojo</Heading>
      <Grid gap={10}
        templateAreas={{
          base: `"map"
                "info"
                "clock"
                "day"`,
          md:
            `"info map"
            "clock clock"
            "day day"`}}>
        <GridItem area='map'>
          <iframe
            src={dojoData.map}
            title="map">
          </iframe>
        </GridItem>
        <GridItem area='info'>
          <Stack align='center'>
            <Text>{dojoData.facility}</Text>
            <Text>{dojoData.room}</Text>
            <Text>{dojoData.address}</Text>
            <Link href={dojoData.website} isExternal><Button>Website</Button></Link>
          </Stack>
        </GridItem>
        <GridItem area='clock'>
          <Icon as={FiClock} boxSize={10} />
        </GridItem>
        <GridItem area='day'>
          <Stack align='center'>
            <Text as='b'>Tuesday</Text>
            <Grid gap={1}>
              <Stack direction='row' justify='space-between'>
                <Text>Beginning</Text>
                <Text>6:15-7pm</Text>
              </Stack>
              <Stack direction='row' justify='space-between'>
                <Text>Continuing</Text>
                <Text>6:15-7pm</Text>
              </Stack>
              <Stack direction='row' justify='space-between'>
                <Text>Advanced</Text>
                <Text>7-8:30pm</Text>
              </Stack>
            </Grid>
          </Stack>
        </GridItem>
      </Grid>
    </Container>
  )
}

export default Dojo