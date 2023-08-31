import Masthead from '../components/Masthead'
import Dojo from '../components/Dojo'
import Sensei from '../components/Sensei'
import Membership from '../components/Membership'
import { Box } from '@chakra-ui/react'

const Home = () => {
  return (
    <Box align='center'>
      <Masthead />
      <Dojo />
      <Sensei />
      <Membership />
    </Box>
  )
}

export default Home