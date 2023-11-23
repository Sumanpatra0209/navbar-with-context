// Write your code here
import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notFoundBgClassName = isDarkTheme
        ? 'notFoundBgDark'
        : 'notFoundBgLight'

      const notFoundHeadingTextClassName = isDarkTheme
        ? 'notFoundHeadingTextLight'
        : 'notFoundHeadingTextDark'

      const notFoundContentTextClassName = isDarkTheme
        ? 'notFoundContentTextLight'
        : 'notFoundContentTextDark'

      return (
        <div className={`notFoundAppContainer ${notFoundBgClassName}`}>
          <Navbar />
          <div className="notFoundResponsiveContainer">
            <div className="notFoundContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                className="notFoundImg"
                alt="not found"
              />
              <h1 className={`notFoundHeading ${notFoundHeadingTextClassName}`}>
                Lost Your Way?
              </h1>
              <p className={`notFoundContent ${notFoundContentTextClassName}`}>
                We cannot seem to find the page you are looking for.
              </p>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
