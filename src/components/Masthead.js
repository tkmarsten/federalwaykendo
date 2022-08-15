import { Container, Row, Col } from 'react-bootstrap'
import dojoData from '../data/dojo.json'

const Masthead = () => {
  return (
    <header className="masthead text-white">
      <Container className="text-center">
        <Row>
          <Col>
            <h1>{dojoData.dojo} Kendo Club</h1>
            <h1>剣道</h1>
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default Masthead