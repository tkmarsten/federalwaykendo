import { Row, Col, Card, Container, Button } from 'react-bootstrap'
import membershipData from '../data/membership.json'

const Membership = () => {

  return (
    <Container className="col-lg-6 p-4">
      <h3 className="mb-4">Membership</h3>
      <Row className="row-cols-1 g-3">
        {membershipData.map((section) => (
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>{section.section}</Card.Title>
                <Button variant="primary"
                  href={section.url}
                  target="_blank"
                  disabled>
                  Register
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container >
  )
}

export default Membership