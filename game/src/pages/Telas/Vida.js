import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Telas.css'
import { animateElement } from '../animate'

function Vida () {
  const navigate = useNavigate()

  const redireconar = () => {
    navigate('/mundo')
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
        src='img/Coração.png'
        className='icone-pilares icone-coracao absolute hidden'
      />
      <div className='titulo-pilares-itens absolute hidden'>
        <h2>MINHA VIDA</h2>
      </div>
      <div className='texto-pilares-itens texto-vida absolute hidden'>
        <p>
          Que a juventude possa ter uma vida saudável e com acesso à educação em
          sexualidade, com igualdade de gênero e com o pleno empoderamento de
          mulheres e meninas.{' '}
        </p>
        <p>
          Para isso, também é fundamental que os homens estejam envolvidos e
          engajados nesse tema!
        </p>
      </div>
    </div>
  )
}

export default Vida
