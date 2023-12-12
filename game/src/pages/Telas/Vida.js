import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Telas.css'

function Vida () {
  const navigate = useNavigate()

  const redireconar = () => {
    navigate('/mundo')
  }

  return (
    <div>
      <img src='img/elemento-3.png' className='elemento-3 absolute' />
      <img src='img/elemento-5.png' className='elemento-5 absolute' />
      <img
        src='img/seta.svg'
        className='seta absolute'
        onTouchStart={() => redireconar()}
        onClick={() => redireconar()}
      />
      <img src='img/Coração.png' className='icone-pilares icone-coracao absolute' />
      <div className='titulo-pilares-itens absolute'>
        <h2>MINHA VIDA</h2>
      </div>
      <div className='texto-pilares-itens texto-vida absolute'>
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
