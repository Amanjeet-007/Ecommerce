import {Route ,Routes} from 'react-router'
import Home from "./pages/Home"
import About from '../src/pages/About'
{/* <Route element={<AuthLayout />}>
<Route path="login" element={<Login />} />
<Route path="register" element={<Register />} />
</Route>

<Route path="concerts">
<Route index element={<ConcertsHome />} />
<Route path=":city" element={<City />} />
<Route path="trending" element={<Trending />} />
</Route> */}

export default function App(){
  return(
  <Routes>
  <Route index element={<Home />} />
  <Route path="about" element={<About />} />
 </Routes>
  )
} 