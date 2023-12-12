import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Telas.css'

function Temas () {
  const navigate = useNavigate()

  const redireconar = () => {
    navigate('/pilares')
  }

  return (
    <div>
      <img src='img/elemento-7.png' className='elemento-3 absolute' />
      <img
        src='img/seta.svg'
        className='seta seta-temas absolute'
        onTouchStart={() => redireconar()}
        onClick={() => redireconar()}
      />
      <div className='texto-temas absolute'>
        <p>Para você, quais são os cinco temas mais importantes?</p>
      </div>
      <div className='temas absolute'>
        <div
          className='btn-temas'
          onTouchStart={() =>
            redireconar('Saúde, incluindo saúde sexual e reprodutiva')
          }
          onClick={() =>
            redireconar('Saúde, incluindo saúde sexual e reprodutiva')
          }
        >
          Saúde, incluindo saúde sexual e reprodutiva
        </div>
        <div
          className='btn-temas'
          onTouchStart={() => redireconar('Igualdade de Gênero')}
          onClick={() => redireconar('Igualdade de Gênero')}
        >
          Igualdade de Gênero
        </div>
        <div
          className='btn-temas'
          onTouchStart={() => redireconar('Dignidade mentrual')}
          onClick={() => redireconar('Dignidade mentrual')}
        >
          Dignidade mentrual
        </div>
        <div
          className='btn-temas'
          onTouchStart={() => redireconar('Direitos LGBTQIA+')}
          onClick={() => redireconar('Direitos LGBTQIA+')}
        >
          Direitos LGBTQIA+
        </div>
        <div
          className='btn-temas'
          onTouchStart={() => redireconar('Paz, segurança e erradicação de violências')}
          onClick={() => redireconar('Paz, segurança e erradicação de violências')}
        >
          Paz, segurança e erradicação de violências
        </div>
        <div
          className='btn-temas'
          onTouchStart={() => redireconar('Igualdade racial')}
          onClick={() => redireconar('Igualdade racial')}
        >
          Igualdade racial
        </div>
        <div
          className='btn-temas'
          onTouchStart={() => redireconar('Direitos dos povos indígenas')}
          onClick={() => redireconar('Direitos dos povos indígenas')}
        >
          Direitos dos povos indígenas
        </div>
        <div
          className='btn-temas'
          onTouchStart={() => redireconar('Educação em sexualidade')}
          onClick={() => redireconar('Educação em sexualidade')}
        >
          Educação em sexualidade
        </div>
        <div
          className='btn-temas'
          onTouchStart={() => redireconar('Direitos das pessoas com deficiência')}
          onClick={() => redireconar('Direitos das pessoas com deficiência')}
        >
          Direitos das pessoas com deficiência
        </div>
        <div
          className='btn-temas'
          onTouchStart={() => redireconar('Cidades inclusivas e transporte de qualidade')}
          onClick={() => redireconar('Cidades inclusivas e transporte de qualidade')}
        >
          Cidades inclusivas e transporte de qualidade
        </div>
        <div
          className='btn-temas'
          onTouchStart={() => redireconar('Políticas de juventude fortalecidas')}
          onClick={() => redireconar('Políticas de juventude fortalecidas')}
        >
          Políticas de juventude fortalecidas
        </div>
        <div
          className='btn-temas'
          onTouchStart={() => redireconar('Educação de qualidade e empregabilidade')}
          onClick={() => redireconar('Educação de qualidade e empregabilidade')}
        >
          Educação de qualidade e empregabilidade
        </div>
        <div
          className='btn-temas'
          onTouchStart={() => redireconar('Meio-ambiente e sustentabilidade')}
          onClick={() => redireconar('Meio-ambiente e sustentabilidade')}
        >
          Meio-ambiente e sustentabilidade
        </div>
        <div
          className='btn-temas'
          onTouchStart={() => redireconar('Combate à fome e à pobreza')}
          onClick={() => redireconar('Combate à fome e à pobreza')}
        >
          Combate à fome e à pobreza
        </div>
      </div>
    </div>
  )
}

export default Temas
