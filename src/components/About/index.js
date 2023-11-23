// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const aboutBgClassName = isDarkTheme ? 'aboutBgDark' : 'aboutBgLight'

      const aboutImageURL = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const aboutTextClassName = isDarkTheme
        ? 'aboutTextLight'
        : 'aboutTextDark'

      return (
        <div className={`aboutAppContainer ${aboutBgClassName}`}>
          <Navbar />
          <div className="aboutPageContainer">
            <div className="aboutContainer">
              <img className="aboutImage" src={aboutImageURL} alt="about" />
              <h1 className={`aboutHeading ${aboutTextClassName}`}>About</h1>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
