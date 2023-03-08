import { Box, Heading, Grid, GridItem, List, ListItem, ListIcon, Text } from '@chakra-ui/react'
import { FiChevronsRight } from 'react-icons/fi'

const Class = () => {
  return (
    <Box align='center' my='4rem'>
      <Heading as='h1' mb='2rem'>Our Class</Heading>
      <Grid templateColumns='repeat(2, 1fr)' gap={10} alignItems='center'>
        <GridItem>
          <Heading as='h3' size='md'>Beginning Class <br />(1-3 Months)*</Heading>
        </GridItem>
        <GridItem align='start'>
          <List>
            <ListItem>
              <ListIcon as={FiChevronsRight} color='green.400' />
              Seiza
            </ListItem>
            <ListItem>
              <ListIcon as={FiChevronsRight} color='green.400' />
              Rei / Rei-ho
            </ListItem>
            <ListItem>
              <ListIcon as={FiChevronsRight} color='green.400' />
              Ashi-sabaki
            </ListItem>
            <ListItem>Suburi</ListItem>
            <ListItem>Kiai</ListItem>
            <ListItem>Counting</ListItem>
            <ListItem>Fumi-komi</ListItem>
            <ListItem>Haya-suburi</ListItem>
          </List>
        </GridItem>
        <GridItem>
          <Heading as='h3' size='md'>Continuing <br />(4-6 Months)*</Heading>
        </GridItem>
        <GridItem align='start'>
          <List>
            <ListItem>All previous things</ListItem>
            <ListItem>Kiri-kaeshi</ListItem>
            <ListItem>Naname-buri</ListItem>
            <ListItem>Dou</ListItem>
            <ListItem>Wearing dou-gi</ListItem>
            <ListItem>Wearing bogu</ListItem>
            <ListItem>Hitting bogu</ListItem>
            <ListItem>Warm-ups</ListItem>
          </List>
        </GridItem>
        <GridItem>
          <Heading as='h3' size='md'>Advanced <br />(7+ Months)</Heading>
        </GridItem>
        <GridItem align='start'>
          <List>
            <ListItem>All previous things</ListItem>
            <ListItem>Receiving hits</ListItem>
            <ListItem>Waza</ListItem>
            <ListItem>Shinsa</ListItem>
            <ListItem>Taikai</ListItem>
          </List>
        </GridItem>
      </Grid>
      <Text>
        *Classes are always subject to change based on the overall skill level, age range, and progression of the students.
        We adjust the speed and curriculum week by week to best fit the class.
      </Text>
    </Box>
  )
}

export default Class