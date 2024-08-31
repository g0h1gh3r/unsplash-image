import { useGlobalContext } from '../context'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext()
  return (
    <section className="toggleContainer">
      <button className="dark-toggle">
        {isDarkTheme ? (
          <BsFillMoonFill
            className="toggle-icon"
            onClick={toggleDarkTheme}
          ></BsFillMoonFill>
        ) : (
          <BsFillSunFill
            className="toggle-icon"
            onClick={toggleDarkTheme}
          ></BsFillSunFill>
        )}
      </button>
    </section>
  )
}
export default ThemeToggle
