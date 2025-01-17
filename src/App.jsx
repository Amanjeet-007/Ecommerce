import {Route ,Routes} from 'react-router'
import Home from "./pages/Home"
import About from '../src/pages/About'
import Home_Kitchen from './pages/Home&Kitchen'
import Cloths from './pages/Cloths'
import Electronics from './pages/Electronics'

export default function App(){
  return(
  <Routes>
  <Route index element={<Home />} />
  <Route path="about" element={<About />} />
  <Route path="electronics" element={<Electronics />} />
  <Route path="home_kitchen" element={<Home_Kitchen />} />
  <Route path="cloths" element={<Cloths />} />
 </Routes>
  )
} 