import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import './Telas.css'
import { animateElement } from '../animate'

function Pilares () {
  const navigate = useNavigate()

  const redireconar = () => {
    navigate('/saude')
  }

  useEffect(() => {
    let delay = 100;
    animateElement(".icone-pilares", "jackInTheBox", delay)
    animateElement(".titulo-pilares-itens", "fadeInDown", delay+400)
    animateElement(".texto-pilares-itens", "fadeInDown", delay+800)
    animateElement(".seta", "bounceIn", delay+1200)
  }, [])

  return (
    <div>
      <img src='img/elemento-3.png' className='elemento-3 absolute' />
      <img src='img/elemento-5.png' className='elemento-5 absolute' />
      <img
        src='img/seta.svg'
        className='seta absolute hidden'
        onTouchStart={() => redireconar()}
        onClick={() => redireconar()}
      />
      <img src='img/Dignidade.png' className='icone-pilares absolute hidden' />
      <div className='titulo-pilares-itens absolute hidden'>
        <h2>DIGNIDADE E DIREITOS HUMANOS</h2>
      </div>
      <div className='texto-pilares-itens absolute hidden'>
        <p>
          Todas as pessoas são titulares de direitos humanos e liberdade, e isso
          deve ser garantido.
        </p>
      </div>
    </div>
  )
}

export default Pilares
