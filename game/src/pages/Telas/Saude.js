import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Telas.css'

function Pilares () {
  const navigate = useNavigate()

  const redireconar = () => {
    navigate('/espaco')
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
      <img src='img/Saúde.png' className='icone-pilares absolute' />
      <div className='titulo-pilares-itens absolute'>
        <h2>SAÚDE</h2>
      </div>
      <div className='texto-pilares-itens texto-saude absolute'>
        <p>
          Todas as pessoas têm direito ao mais elevado padrão de saúde
          disponível. Populações saudáveis são chave para o desenvolvimento
          sustentável.
        </p>
      </div>
    </div>
  )
}

export default Pilares
