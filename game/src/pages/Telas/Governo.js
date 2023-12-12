import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Telas.css'

function Pilares () {
  const navigate = useNavigate()

  const redireconar = () => {
    navigate('/sustentabilidade')
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
      <img src='img/Governos.png' className='icone-pilares absolute' />
      <div className='titulo-pilares-itens absolute'>
        <h2>GOVERNOS COM RESPONSABILIDADE</h2>
      </div>
      <div className='texto-pilares-itens texto-governo absolute'>
        <p>
          Tomadores(as) de decisão, coletivos e individuais, devem assumir a
          responsabilidade pelas suas decisões, nos princípios da boa
          administração, das normas e dos compromissos assumidos.
        </p>
      </div>
    </div>
  )
}

export default Pilares
