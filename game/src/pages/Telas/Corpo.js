import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Telas.css'

function Corpo () {
  const navigate = useNavigate()

  const redireconar = () => {
    navigate('/eixos')
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
      <img src='img/Mão.png' className='icone-pilares icone-mao absolute' />
      <div className='titulo-pilares-itens absolute'>
        <h2>MEU CORPO</h2>
      </div>
      <div className='texto-pilares-itens texto-corpo absolute'>
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
