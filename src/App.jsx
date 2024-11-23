import CharactersPage from './pages/CharactersPage/CharactersPage'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import EpisodesPage from './pages/EpisodesPage/EpisodesPage'
import PageLoader from './components/Loader/PageLoader'
import CharacterDetailsPage from './pages/CharacterDeatilsPage/CharacterDetailsPage'
 
function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path={'/'} element={<CharactersPage/>}/>
        <Route path={'/episodes'} element={<EpisodesPage/>}/>
        <Route path={'/locations'} element={<PageLoader/>}/>
        <Route path={'/characters/:id'} element={<CharacterDetailsPage/>}/>
      </Routes>
    </>
  )
}

export default App
