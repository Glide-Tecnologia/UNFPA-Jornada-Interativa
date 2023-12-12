import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import './Telas.css'
import { animateElement } from '../animate'

function Estrategia () {
  const navigate = useNavigate()

  const redireconar = () => {
    navigate('/corpo')
  }

  useEffect(() => {
    let delay = 100;
    animateElement(".icpd-30", "rotateIn", delay)
    animateElement(".titulo-estrategia", "fadeIn", delay+300)
    animateElement(".mao", "jackInTheBox", delay+600)
    animateElement(".coracao", "jackInTheBox", delay+600+150)
    animateElement(".mundo", "jackInTheBox", delay+600+300)
    animateElement(".subtitulo-estrategia", "fadeIn", delay+1100)
    animateElement(".btn-como", "bounceIn", delay+1400)
  }, [])

  return (
    <div>
      <img src='img/icpd-30.png' className='icpd-30 absolute hidden' />
      <img src='img/elemento-6.png' className='elemento-6 absolute' />

      <img src='img/Mão.png' className='mao absolute hidden' />
      <img src='img/Coração.png' className='coracao absolute hidden' />
      <img src='img/Mundo.png' className='mundo absolute hidden' />
      <div className='titulo-estrategia absolute hidden'>
        <h2>O UNFPA tem uma estratégia específica para as juventudes!</h2>
      </div>
      <div className='subtitulo-estrategia absolute hidden'>
        <h2>“Meu corpo, minha vida e meu mundo”</h2>
      </div>
      <div
        className='btn-como absolute hidden'
        onTouchStart={() => redireconar()}
        onClick={() => redireconar()}
      >
        Como assim?
      </div>
    </div>
  )
}

export default Estrategia
