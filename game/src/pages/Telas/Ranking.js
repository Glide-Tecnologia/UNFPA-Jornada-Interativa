import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Telas.css'

function Ranking () {
  const navigate = useNavigate()

  const redireconar = () => {
    navigate('/pilares')
  }

  return (
    <div>
      <img src='img/elemento-6.png' className='elemento-6 absolute' />
      <div className='titulo-ranking absolute'>
        <h1>Ranking</h1>
      </div>
      <div className='texto-ranking absolute'>
        <p>Temas mais votados</p>
      </div>
      <img
        src='img/seta.svg'
        className='seta absolute'
        onTouchStart={() => redireconar()}
        onClick={() => redireconar()}
      />
      <div className='ranking absolute'>
        <div className='ranking__item'>
          <div className='ranking__nome'>Dignidade mentrual</div>
          <div className='ranking__porcentagem'>20%</div>
        </div>
        <div className='ranking__item'>
          <div className='ranking__nome'>Dignidade mentrual</div>
          <div className='ranking__porcentagem'>20%</div>
        </div>
        <div className='ranking__item'>
          <div className='ranking__nome'>Dignidade mentrual</div>
          <div className='ranking__porcentagem'>20%</div>
        </div>
        <div className='ranking__item'>
          <div className='ranking__nome'>Dignidade mentrual</div>
          <div className='ranking__porcentagem'>20%</div>
        </div>
        <div className='ranking__item'>
          <div className='ranking__nome'>Dignidade mentrual</div>
          <div className='ranking__porcentagem'>20%</div>
        </div>
      </div>
    </div>
  )
}

export default Ranking
