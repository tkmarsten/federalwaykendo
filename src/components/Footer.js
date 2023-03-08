import dojoData from '../data/dojo.json'
import { Container, Image, Heading, Icon, Link, Text, Box, Grid, GridItem, Stack } from '@chakra-ui/react'
import { FiMail } from 'react-icons/fi'

const Footer = () => {
  return (
    <Box as='footer' bg='#252525' color='white'>
      <Container py='2rem' centerContent>
        <Grid templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)' }} align='center' gap={5} mb='2rem'>
          <GridItem>
            <Image src={`img/` + dojoData.logo} alt="logo" w='50px' h='60px' />
          </GridItem>
          <GridItem>
            <Stack align='center'>
              <Heading as='h5' size='md'>Contact us</Heading>
              <Link href={`mailto:` + dojoData.email}><Icon as={FiMail} boxSize={8} /></Link>
            </Stack>
          </GridItem>
        </Grid>
        <Text>&copy; 2023 {dojoData.dojo} Kendo Club</Text>
      </Container>
    </Box>
  )
}

export default Footer