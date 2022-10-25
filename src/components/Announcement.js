import { Container } from 'react-bootstrap'

const Announcement = () => {
  return (
    <Container fluid className="announcements bg-dark text-white p-4">
      <Container className="text-center">
        <h3 className="mb-4">Announcements</h3>
        <h5>Late autumn quarter begins 1 November!</h5>
        <p>Please register with the links below.<br />
          Masks are not required, but preferred.</p>
      </Container>
    </Container>
  )
}

export default Announcement