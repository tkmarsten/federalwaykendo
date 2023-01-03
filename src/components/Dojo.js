import dojoData from '../data/dojo.json'
import { Container, Stack, Heading, Text, Button, Link, Grid, GridItem, Icon } from '@chakra-ui/react'
import { FiClock } from 'react-icons/fi'

const Dojo = () => {
  return (
    <Container my='4rem'>
      <Heading as={'h3'} mb='2rem'>Our Dojo</Heading>
      <Grid gap={10}
        templateAreas={{
          base: `"map"
                "info"
                "clock"
                "monday"
                "wednesday"`,
          md:
            `"info map"
            "clock clock"
            "monday wednesday"`}}>
        <GridItem area={'map'}>
          <iframe
            src={dojoData.map}
            title="map">
          </iframe>
        </GridItem>
        <GridItem area={'info'}>
          <Stack align='center'>
            <Text>{dojoData.facility}</Text>
            <Text>{dojoData.room}</Text>
            <Text>{dojoData.address}</Text>
            <Link href={dojoData.website} isExternal><Button>Website</Button></Link>
          </Stack></GridItem>
        <GridItem area={'monday'}>
          <Stack align='center'>
            <Text as='b'>Monday</Text>
            <Grid gap={1}>
              <Stack direction='row' justify='space-between'>
                <Text>Beginning</Text>
                <Text>6:30-7:15pm</Text>
              </Stack>
              <Stack direction='row' justify='space-between'>
                <Text>Continuing</Text>
                <Text>7:15-8pm</Text>
              </Stack>
            </Grid>
          </Stack>
        </GridItem>
        <GridItem area={'clock'}>
          <Icon as={FiClock} boxSize={10} />
        </GridItem>
        <GridItem area={'wednesday'}>
          <Stack align='center' area={'wednesday'}>
            <Text as='b'>Wednesday</Text>
            <Grid>
              <Stack direction='row' justify='space-between'>
                <Text>Advanced</Text>
                <Text>6:30-8pm</Text>
              </Stack>
            </Grid>
          </Stack></GridItem>
      </Grid>
    </Container>
  )
}

export default Dojo