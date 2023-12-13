import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Telas.css'
import { animateElement } from '../animate'

function Corpo () {
  const navigate = useNavigate()

  const redireconar = () => {
    navigate('/vida')
  }

  const home = () => {
    navigate('/home')
  }

  useEffect(() => {
    let delay = 100
    animateElement('.icone-pilares', 'jackInTheBox', delay)
    animateElement('.titulo-pilares-itens', 'fadeInDown', delay + 300)
    animateElement('.texto-pilares-itens', 'fadeIn', delay + 500)
    animateElement('.seta', 'bounceIn', delay + 1000)
  }, [])

  return (
    <div>
      <img
        src='img/home.png'
        className='btn-home absolute'
        onTouchStart={() => home()}
      />
      <img src='img/elemento-3.png' className='elemento-3 absolute' />
      <img src='img/elemento-5.png' className='elemento-5 absolute' />
      <img
        src='img/seta.svg'
        className='seta absolute hidden'
        onTouchStart={() => redireconar()}
        onClick={() => redireconar()}
      />
      <img
        src='img/Mão.png'
        className='icone-pilares icone-mao absolute hidden'
      />
      <div className='titulo-pilares-itens absolute hidden'>
        <h2>MEU CORPO</h2>
      </div>
      <div className='texto-pilares-itens texto-corpo absolute hidden'>
        <p>
          Que a juventude possa fazer escolhas livres e informadas, tenha acesso
          a serviços e informações sobre direitos e saúde sexual e reprodutiva.
          Isso inclui contracepção, parto seguro, prevenção, testes e tratamento
          de infecções sexualmente transmissíveis.
        </p>
      </div>
    </div>
  )
}

export default Corpo
