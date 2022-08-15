import { Container, Accordion } from 'react-bootstrap'
import faqData from '../data/faq.json'

const FAQ = () => {

  return (
    <Container className="faq">
      <h3 className="mb-4 pt-4">Frequently Asked Questions</h3>
      {faqData.map((group) => (
        <>
          <h6>{group.header}</h6>
          <Accordion flush className="mb-5 accordion">
            {group.questions.map((questions) => (
              <Accordion.Item eventKey={questions.key}>
                <Accordion.Header><em>{questions.question}</em></Accordion.Header>
                <Accordion.Body>{questions.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </>
      ))}
    </Container>
  )
}

export default FAQ