import Masthead from '../components/Masthead'
import Announcement from '../components/Announcement'
import Dojo from '../components/Dojo'
import Sensei from '../components/Sensei'
import Membership from '../components/Membership'

const Home = () => {
  return (
    <div className="text-center">
      <Masthead />
      <Announcement />
      <Dojo />
      <Sensei />
      <Membership />
    </div>
  )
}

export default Home