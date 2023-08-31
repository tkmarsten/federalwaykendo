import membershipData from '../data/membership.json'
import { Container, Heading, Stack, Text, Button, Link, Box } from '@chakra-ui/react'

const Membership = () => {
  return (
    <Container my='4rem'>
      <Heading as='h3' mb='2rem'>Membership</Heading>
      <Box>
        <Text>Autumn Quarter</Text>
        <Text>12 Sept, 2023 - 12 Dec, 2023</Text>
      </Box>
      <Stack direction={{ base: 'column', md: 'row' }} justify='center' mt='1rem'>
        {membershipData.map((section) => (
          <Link href={section.url} isExternal key={section.section}>
            <Button>
              {section.section}
            </Button>
          </Link>
        ))}
      </Stack>
    </Container>
  )
}

export default Membership