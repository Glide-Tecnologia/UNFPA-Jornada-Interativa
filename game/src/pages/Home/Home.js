import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'
import DataVaultComponent from '../../components/DataVault'
import Configuration from '../../components/Configuration/Configuration'
import { animateElement } from '../animate'

function Home () {
  const navigate = useNavigate()

  const redireconar = () => {
    navigate('/conhece')
  }

  useEffect(() => {
    let delay = 100;
    animateElement(".logo-1", "fadeInDown", delay)
    animateElement(".home-texto", "fadeInLeft", delay+200)
    animateElement(".btn-conhecer", "bounceIn", delay+700)
    animateElement(".slogan", "fadeIn", delay+900)
  }, [])

  return (
    <div>
      <img src='img/logo-1.png' className='logo-1 absolute hidden' />
      <img src='img/elemento-1.png' className='elemento-1 absolute' />
      <img src='img/elemento-2.png' className='elemento-2 absolute' />
      <img src='img/slogan.png' className='slogan absolute hidden' />
      <div
        className='btn-conhecer absolute hidden'
        onTouchStart={() => redireconar()}
        onClick={() => redireconar()}
      >
        Quero conhecer mais!
      </div>
      <div className='home-texto absolute hidden'>
        <h1>Olá,</h1>
        <p>
          O Fundo de População das Nações Unidas (UNFPA) é a agência de
          desenvolvimento internacional da ONU que trata de questões
          populacionais. Isso inclui temas relacionados com a saúde sexual e
          reprodutiva, juventudes e igualdade de gênero e racial.
        </p>
      </div>

      <Configuration />
      {/* <DataVaultComponent /> */}
    </div>
  )
}

export default Home
