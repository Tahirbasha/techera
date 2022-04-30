import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <header>
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
        alt="website logo"
        className="Logo"
      />
    </Link>
  </header>
)

export default Header
