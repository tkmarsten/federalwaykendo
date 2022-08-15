import { Container } from 'react-bootstrap'
import dojoData from '../data/dojo.json'

const Banner = () => {
  return (
    <>
      <Container fluid className="banner bg-dark text-white p-4">
        <Container>
          <img alt="logo" src={`img/` + dojoData.logo} style={{ width: '20%' }} />
          <h1 className="mt-4">{dojoData.dojo} Kendo Club</h1>
        </Container>
      </Container>
    </>
  )
}

export default Banner