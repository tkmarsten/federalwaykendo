import { Avatar, Text, Box } from '@chakra-ui/react'

const SenseiCard = ({ name, rank }) => {
  return (
    <Box>
      <Avatar bg='gray.600' size='xl' mb='1rem' />
      <Text>{name}</Text>
      <Text as='sub' mt={0}>{rank}</Text>
    </Box>
  )
}

export default SenseiCard