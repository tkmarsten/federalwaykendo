import Banner from '../components/Banner'
import Affiliations from '../components/Affiliations'
import Sensei from '../components/Sensei'
import { Box } from '@chakra-ui/react'

const About = () => {
  return (
    <Box align='center'>
      <Banner />
      <Sensei />
      <Affiliations />
    </Box>
  )
}

export default About