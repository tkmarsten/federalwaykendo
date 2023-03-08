import { Box, Text, Heading, Container, Stack } from '@chakra-ui/react'

const Announcement = () => {
  return (
    <Box className='announcements' bg='#252525' color='white'>
      <Container py='2rem'>
        <Stack align='center'>
          <Heading as='h3' mb='1rem'>Announcements</Heading>
          <Text>Spring quarter begins 21 March!</Text>
          <Text>Please register with the links below.</Text>
          <Text>Masks are not required, but preferred.</Text>
        </Stack>
      </Container>
    </Box>
  )
}

export default Announcement