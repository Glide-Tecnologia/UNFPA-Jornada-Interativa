import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import './Telas.css'
import { animateElement } from '../animate'

function Mundo () {
  const navigate = useNavigate()

  const redireconar = () => {
    navigate('/pergunta')
  }

  useEffect(() => {
    let delay = 100;
    animateElement(".icone-pilares", "jackInTheBox", delay)
    animateElement(".titulo-pilares-itens", "fadeInDown", delay+300)
    animateElement(".texto-pilares-itens", "fadeIn", delay+500)
    animateElement(".seta", "bounceIn", delay+1000)
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
      <img src='img/Mundo.png' className='icone-pilares icone-mundo absolute hidden' />
      <div className='titulo-pilares-itens absolute hidden'>
        <h2>MEU MUNDO</h2>
      </div>
      <div className='texto-pilares-itens texto-mundo absolute hidden'>
        <p>
          Que a juventude possa liderar e participar do desenvolvimento
          sustentável, incluindo a luta contra as mudanças climáticas, pela
          segurança e paz, e por zero discriminação ou violência de gênero,
          etnicoracial ou outras.
        </p>
      </div>
    </div>
  )
}

export default Mundo
