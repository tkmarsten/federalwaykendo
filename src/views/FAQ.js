import faqData from '../data/faq.json'
import { Flex, Box, Container, Heading, Accordion, AccordionItem, AccordionPanel, AccordionButton, AccordionIcon } from '@chakra-ui/react'

const FAQ = () => {
  return (
    <Flex align='start'>
      <Container className='faq'>
        <Heading as={'h3'} mb='2rem'>Frequently Asked Questions</Heading>
        {faqData.map((group) => (
          <Box key={group.header}>
            <Heading as={'h6'} size='xs' mb='1rem'>{group.header}</Heading>
            <Accordion allowToggle mb='2rem'>
              {group.questions.map((questions) => (
                <AccordionItem key={questions.key}>
                  <Heading as={'h6'}>
                    <AccordionButton>
                      <Box as={'span'} flex='1' textAlign='left'>
                        {questions.question}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </Heading>
                  <AccordionPanel>
                    {questions.answer}
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Box>
        ))}
      </Container>
    </Flex>
  )
}

export default FAQ