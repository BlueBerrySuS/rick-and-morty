import CharactersPage from './pages/CharactersPage/CharactersPage'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import EpisodesPage from './pages/EpisodesPage/EpisodesPage'
 
function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path={'/characters'} element={<CharactersPage/>}/>
        <Route path={'/episodes'} element={<EpisodesPage/>}/>
      </Routes>
    </>
  )
}

export default App
