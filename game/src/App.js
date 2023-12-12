import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Conhece from './pages/Telas/Conhece'
import CIPD from './pages/Telas/CIPD'
import Pilares from './pages/Telas/Pilares'
import Dignidade from './pages/Telas/Dignidade'
import Saude from './pages/Telas/Saude'
import Espaco from './pages/Telas/Espaco'
import Governo from './pages/Telas/Governo'
import Sustentabilidade from './pages/Telas/Sustentabilidade'
import Eixos from './pages/Telas/Eixos'
import Estrategia from './pages/Telas/Estrategia'
import Corpo from './pages/Telas/Corpo'
import Vida from './pages/Telas/Vida'
import Mundo from './pages/Telas/Mundo'
import Pergunta from './pages/Telas/Pergunta'
import Temas from './pages/Telas/Temas'
import Ranking from './pages/Telas/Ranking'
import Comentario from './pages/Telas/Comentario'
import Nome from './pages/Telas/Nome'
import Dados from './pages/Telas/Dados'
import Email from './pages/Telas/Email'
import './App.css'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/conhece' element={<Conhece />}></Route>
        <Route path='/cipd' element={<CIPD />}></Route>
        <Route path='/pilares' element={<Pilares />}></Route>
        <Route path='/dignidade' element={<Dignidade />}></Route>
        <Route path='/saude' element={<Saude />}></Route>
        <Route path='/espaco' element={<Espaco />}></Route>
        <Route path='/governo' element={<Governo />}></Route>
        <Route path='/sustentabilidade' element={<Sustentabilidade />}></Route>
        <Route path='/eixos' element={<Eixos />}></Route>
        <Route path='/estrategia' element={<Estrategia />}></Route>
        <Route path='/corpo' element={<Corpo />}></Route>
        <Route path='/vida' element={<Vida />}></Route>
        <Route path='/mundo' element={<Mundo />}></Route>
        <Route path='/pergunta' element={<Pergunta />}></Route>
        <Route path='/temas' element={<Temas />}></Route>
        <Route path='/ranking' element={<Ranking />}></Route>
        <Route path='/comentario' element={<Comentario />}></Route>
        <Route path='/nome' element={<Nome />}></Route>
        <Route path='/dados' element={<Dados />}></Route>
        <Route path='/email' element={<Email />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
