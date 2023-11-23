// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeBgClassName = isDarkTheme ? 'homeBgDark' : 'homeBgLight'

      const homeImageURL = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const homeTextClassName = isDarkTheme ? 'homeTextLight' : 'homeTextDark'

      return (
        <div className={`homeAppContainer ${homeBgClassName}`}>
          <Navbar />
          <div className="homeResponsiveContainer">
            <div className="homeContainer">
              <img className="homeImage" src={homeImageURL} alt="home" />
              <h1 className={`homeHeading ${homeTextClassName}`}>Home</h1>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
