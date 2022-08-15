import Banner from '../components/Banner'
import Sensei from '../components/Sensei'
import Affiliations from '../components/Affiliations'
import { Container } from 'react-bootstrap'

const About = () => {
  return (
    <div className="text-center">
      <Banner />
      <Container className="col-lg-6 p-4">
        <p className="m-0">
          Originally formed from the Puyallup Kendo Club, Federal Way Kendo Club was founded in 2009 and has
          been providing instruction of the traditional Japanese martial art of Kendo through the parks department.
          Our club is part of the Pacific Northwest Kendo Federation (PNKF) and the All United States Kendo Federation (AUSKF).
        </p>
      </Container>
      <Sensei />
      <Affiliations />
    </div>
  )
}

export default About