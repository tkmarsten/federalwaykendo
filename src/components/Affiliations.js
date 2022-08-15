import { Container, Row, Col } from 'react-bootstrap'
import AffImg from './AffImg'

const Affiliations = () => {
  return (
    <Container className="p-4">
      <h3 className="mb-4">Affiliations</h3>
      <Row className="row-cols-1">
        <Col md={4} className="mb-4">
          <AffImg img="auskf.jpg" url="https://www.auskf.org/home" caption="auskf" />
          <h6 class="pt-3">All United States Kendo Federation</h6>
        </Col>
        <Col md={4} className="mb-4">
          <AffImg img="pnkf.jpg" url="https://www.pnkf.org/" caption="pnkf" />
          <h6 class="pt-3">Pacific Northwest Kendo Federation</h6>
        </Col>
        <Col md={4}>
          <AffImg img="logo.gif" url="https://kentkendo.org/" caption="kent" />
          <h6 class="pt-3">Kent Kendo Club</h6>
        </Col>
      </Row>
    </Container>
  )
}

export default Affiliations