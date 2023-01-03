import dojoData from '../data/dojo.json'
import { Heading } from '@chakra-ui/react'

const Masthead = () => {
  return (
    <header align='center'>
      <Heading size={{ base: 'xl', lg: '4xl' }}>{dojoData.dojo} Kendo Club</Heading>
      <Heading size={{ base: 'xl', lg: '4xl' }}>剣道</Heading>
    </header>
  )
}

export default Masthead