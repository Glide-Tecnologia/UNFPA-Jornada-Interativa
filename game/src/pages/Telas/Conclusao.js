import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import './Telas.css'
import { animateElement } from '../animate'

function Vida () {
  const navigate = useNavigate()

  const redireconar = () => {
    navigate('/eixos')
  }

  useEffect(() => {
    let delay = 100;
    animateElement(".logo-final", "fadeInDown", delay)
    animateElement(".titulo-final", "fadeIn", delay+300)
    animateElement(".instagram", "fadeIn", delay+500)
    animateElement(".redes-sociais img", "rollIn", delay+700, {selectAll: true, delayItems: 250});
    animateElement(".slogan-final", "fadeInUp", delay+1500)
  }, [])

  return (
    <div>
      <img src='img/elemento-1.png' className='elemento-5 absolute' />
      <img src='img/elemento-2.png' className='elemento-3 absolute' />

      <img src="img/logo-1.png" className='logo-final absolute hidden'/>

      <div className='titulo-final absolute hidden'>
        Siga o UNFPA Brasil nas redes sociais!
      </div>
     
      <div className='instagram absolute hidden'>
      @UNFPABrasil
      </div>

      <div className='redes-sociais absolute'>
        <img src='img/icones/1.svg' className="hidden"/>
        <img src='img/icones/2.svg' className="hidden"/>
        <img src='img/icones/3.svg' className="hidden"/>
        <img src='img/icones/4.svg' className="hidden"/>
      </div>

      <img src="img/slogan.png" className='slogan-final absolute hidden'/>

    </div>
  )
}

export default Vida
