import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Telas.css'

function Pilares () {
  const navigate = useNavigate()

  const redireconar = () => {
    navigate('/governo')
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
      <img src='img/Espaço.png' className='icone-pilares absolute' />
      <div className='titulo-pilares-itens absolute'>
        <h2>ESPAÇO E MOBILIDADE</h2>
      </div>
      <div className='texto-pilares-itens texto-espaco absolute'>
        <p>
          As políticas devem responder às necessidades da população para a
          garantia de um lugar seguro e protegido para viver.
        </p>
      </div>
    </div>
  )
}

export default Pilares
