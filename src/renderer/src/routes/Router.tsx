import About from '@renderer/pages/About'
import Home from '@renderer/pages/Home'
import { Route, Routes } from 'react-router-dom'

function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="/">
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  )
}

export default Router
