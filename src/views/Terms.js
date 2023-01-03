import termsData from '../data/terms.json'
import {
  Table, Thead, Tbody, Tr, Th, Td, TableContainer,
  Container, Accordion, AccordionItem, AccordionButton, AccordionIcon,
  AccordionPanel, Heading, Box
} from '@chakra-ui/react'

const Terms = () => {
  return (
    <Container className="terms">
      <Heading as={'h3'} mb='2rem'>Terminology</Heading>
      <Accordion allowToggle>
        {termsData.map((group) => (
          <AccordionItem key={group.key}>
            <Heading as={'h6'}>
              <AccordionButton>
                <Box as={'span'} flex='1' textAlign='left'>
                  {group.section}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Heading>
            <AccordionPanel>
              <TableContainer>
                <Table variant='simple'>
                  <Thead>
                    <Tr>
                      <Th>Romaji</Th>
                      <Th>Kanji</Th>
                      <Th>Translation</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {group.terms.map((term) => (
                      <Tr>
                        <Td>{term.romaji}</Td>
                        <Td>{term.kanji}</Td>
                        <Td>{term.translation}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Container >
  )
}

export default Terms