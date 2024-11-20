import CharactersPage from './pages/CharactersPage/CharactersPage'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
 
function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path={'/characters'} element={<CharactersPage/>}/>
      </Routes>
    </>
  )
}

export default App
