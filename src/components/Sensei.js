import { Container, Row, Col, Card } from 'react-bootstrap'
import senseiData from '../data/sensei.json'

const Sensei = () => {

  return (
    <Container fluid className="bg-light p-4">
      <Container className="col-lg-6">
        <h3 className="mb-4">Our Sensei</h3>
        <Row className="row-cols-1 g-2">
          {senseiData.map((sensei) => (
            <Col md={6}>
              <Card>
                <Card.Body>
                  <Card.Title>{sensei.name}</Card.Title>
                  <Card.Subtitle className="text-muted">{sensei.rank}</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  )
}

export default Sensei