import { Container } from 'react-bootstrap'

const Announcement = () => {
  return (
    <Container fluid className="announcements bg-dark text-white p-4">
      <Container className="text-center">
        <h3 className="mb-4">Announcements</h3>
        <h5>Autumn quarter begins September!</h5>
        <p>Thank you for your patience while registration is still not available.<br />
          Masks are not required, but preferred.</p>
      </Container>
    </Container>
  )
}

export default Announcement