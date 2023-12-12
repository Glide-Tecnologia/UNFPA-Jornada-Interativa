import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'
import DataVaultComponent from '../../components/DataVault'
import Configuration from '../../components/Configuration/Configuration'

function Home () {
  const navigate = useNavigate()

  const redireconar = () => {
    navigate('/conhece')
  }

  return (
    <div>
      <img src='img/logo-1.png' className='logo-1 absolute' />
      <img src='img/elemento-1.png' className='elemento-1 absolute' />
      <img src='img/elemento-2.png' className='elemento-2 absolute' />
      <img src='img/slogan.png' className='slogan absolute' />
      <div
        className='btn-conhecer absolute'
        onTouchStart={() => redireconar()}
        onClick={() => redireconar()}
      >
        Quero conhecer mais!
      </div>
      <div className='home-texto absolute'>
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
