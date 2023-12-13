import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Telas.css'
import { animateElement } from '../animate'

function Ranking () {
  const navigate = useNavigate()
  const [temas, setTemas] = useState([])

  const redireconar = () => {
    navigate('/comentario')
  }

  useEffect(() => {
    consultarInfo()
    let delay = 100
    animateElement(".titulo-ranking", "fadeIn", delay);
    animateElement(".texto-ranking", "fadeInDown", delay+300);
    animateElement(".ranking__item", "fadeInLeft", delay+600, {selectAll: true, delayItems: 100});
    animateElement(".seta", "bounceIn", delay+1400);
  }, [])

  const consultarInfo = async () => {
    let dados
    try {
      const response = await axios.get('http://localhost:3001/ranking')
      console.log(response.data)

      const temasTopFive = response.data.slice(0, 5)

      dados = temasTopFive.map((tema, index) => (
        <div key={index} className='ranking__item hidden'>
          <div className='ranking__nome' style={{ maxWidth: '67%' }}>
            {tema.tema}
          </div>
          <div className='ranking__porcentagem'>
            {tema.porcentagem.toFixed(0)}%
          </div>
        </div>
      ))
    } catch (error) {
      console.error('Erro ao buscar o Ranking:', error)
    }
    console.log(dados)
    setTemas(dados)
  }

  return (
    <div>
      <img src='img/elemento-6.png' className='elemento-6 absolute' />
      <div className='titulo-ranking absolute hidden'>
        <h1>Ranking</h1>
      </div>
      <div className='texto-ranking absolute hidden'>
        <p>Temas mais votados</p>
      </div>
      <img
        src='img/seta.svg'
        className='seta absolute hidden'
        onTouchStart={() => redireconar()}
        onClick={() => redireconar()}
      />
      <div className='ranking absolute'>{temas}</div>
    </div>
  )
}

export default Ranking
