import Gallery from './components/Gallery'
import SearchForm from './components/SearchForm'
import ThemeToggle from './components/ThemeToggle'
import { useGlobalContext } from './context'

const App = () => {
  return (
    <main className="container">
      <ThemeToggle></ThemeToggle>
      <SearchForm></SearchForm>
      <Gallery></Gallery>
    </main>
  )
}
export default App
