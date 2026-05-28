import HomePage from './Pages/HomePage/HomePage'
import CreateMemePage from './Pages/CreateMemePage/CreateMemePage'
import StyleMemePage from './Pages/StyleMemePage/StyleMemePage'
import Header from './Components/common/layout/Header/Header'
import Footer from './Components/common/layout/Footer/Footer'
import { useState, type ComponentType } from 'react'
import MemeSelectPage from './Pages/MemeSelectPage/MemeSelectPage'
import './App.css'

const TypedHeader = Header as ComponentType<{
  changePage: (page: string) => void
}>

const App = () => {
  const [selectedPage, setSelectedPage] = useState('home')
  const [selectedMeme, setSelectedMeme] = useState('')

  const changePage = (page: string) => {
    setSelectedPage(page)
  }

  const renderPage = () => {
    switch (selectedPage) {
      case 'home':
        return <HomePage setSelectedPage={setSelectedPage} />

      case 'create':
        return <CreateMemePage />

      case 'select':
        return (
          <MemeSelectPage
            setSelectedPage={setSelectedPage}
            setSelectedMeme={setSelectedMeme}
          />
        )

      case 'style':
        return (
          <StyleMemePage
            selectedMeme={selectedMeme}
            setSelectedPage={setSelectedPage}
          />
        )

      default:
        return <HomePage setSelectedPage={setSelectedPage} />
    }
  }

  return (
    <div className="app">
      <TypedHeader changePage={changePage} />

      <main className="page-content">
        {renderPage()}
      </main>

      <Footer />
    </div>
  )
}

export default App