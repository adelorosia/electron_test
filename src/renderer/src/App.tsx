import { NavLink } from 'react-router-dom'
import Router from './routes/Router'

function App(): JSX.Element {
  return (
    <div className="container">
      <header>
        <ul>
          <li>
            <NavLink to="/home">home</NavLink>
            <NavLink to="/about">about</NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Router />
      </main>
    </div>
  )
}

export default App
