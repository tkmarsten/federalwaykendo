import membershipData from '../data/membership.json'
import { Container, Heading, Stack, Text, Button, Link } from '@chakra-ui/react'

const Membership = () => {
  return (
    <Container my='4rem'>
      <Heading as='h3' mb='2rem'>Membership</Heading>
      <Text>Register</Text>
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