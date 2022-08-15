import { Accordion, Container, Table } from 'react-bootstrap'
import termsData from '../data/terms.json'

const Terms = () => {
  return (
    <Container className="terms">
      <h3 className="mb-4 pt-4">Terminology</h3>
      <Accordion flush>
        {termsData.map((group) => (
          <Accordion.Item eventKey={group.key}>
            <Accordion.Header><em>{group.section}</em></Accordion.Header>
            <Accordion.Body>
              <Table>
                <thead>
                  <tr>
                    <th>Romaji</th>
                    <th>Kanji</th>
                    <th>Translation</th>
                  </tr>
                </thead>
                <tbody>
                  {group.terms.map((term) => (
                    <tr>
                      <td>{term.romaji}</td>
                      <td>{term.kanji}</td>
                      <td>{term.translation}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  )
}

export default Terms