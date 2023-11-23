// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onToggleTheme = () => {
        toggleTheme()
      }

      const themeImageURL = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const navbarBgClassName = isDarkTheme ? 'navbarBgDark' : 'navbarBgLight'

      const websiteLogoImageURL = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const navItemClassName = isDarkTheme
        ? 'listTextDarkTheme'
        : 'listTextLightTheme'

      return (
        <div className={`navbar ${navbarBgClassName}`}>
          <div className="navbarContent">
            <img
              className="websiteLogo"
              src={websiteLogoImageURL}
              alt="website logo"
            />
            <ul className="navMenu">
              <li className="navMenuItem">
                <Link to="/" className={`navLink ${navItemClassName}`}>
                  Home
                </Link>
              </li>
              <li className="navMenuItem">
                <Link to="/about" className={`navLink ${navItemClassName}`}>
                  About
                </Link>
              </li>
            </ul>
            <button
              data-testid="theme"
              className="themeButton"
              type="button"
              onClick={onToggleTheme}
            >
              <img className="themeImage" src={themeImageURL} alt="theme" />
            </button>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
