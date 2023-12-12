import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios, { formToJSON } from 'axios'
import './Telas.css'
import './Temas.css'

function Temas () {
  const navigate = useNavigate()
  const [temasSelecionados, setTemasSelecionados] = useState([])

  const adicionar = tema => {
    // Verifica se o tema já está selecionado
    if (temasSelecionados.includes(tema)) {
      // Se estiver, remove da lista de temas selecionados
      const novosTemas = temasSelecionados.filter(t => t !== tema)
      setTemasSelecionados(novosTemas)
    } else {
      // Se não estiver e ainda não atingiu o limite de 5 temas, adiciona à lista
      if (temasSelecionados.length < 5) {
        setTemasSelecionados([...temasSelecionados, tema])
      }
    }
  }

  const salvar = async () => {
    localStorage.setItem('tema', JSON.stringify(temasSelecionados))
    const conhece = localStorage.getItem('conhece')
    const eixo = localStorage.getItem('eixo')
    const temas = localStorage.getItem('tema')
    console.log(temas)
    try {
      const response = await axios.post('http://localhost:3001/cadastros', {
        conhece: conhece,
        eixo: eixo,
        temas: temas
      })
      localStorage.setItem('idJogador', response.data.id)
      console.log('Salvou')
      navigate('/ranking')
    } catch (error) {
      navigate('/erro')
    }
  }

  const temaAtivo = tema => (temasSelecionados.includes(tema) ? 'active' : '')

  return (
    <div>
      <img src='img/elemento-7.png' className='elemento-3 absolute' />
      {temasSelecionados.length >= 5 && (
        <img
          src='img/seta.svg'
          className='seta seta-temas absolute'
          onTouchStart={() => salvar()}
        />
      )}
      <div className='texto-temas absolute'>
        <p>Para você, quais são os cinco temas mais importantes?</p>
      </div>
      <div className='temas absolute'>
        <div
          className={`btn-temas ${temaAtivo(
            'Saúde, incluindo saúde sexual e reprodutiva'
          )}`}
          onTouchStart={() =>
            adicionar('Saúde, incluindo saúde sexual e reprodutiva')
          }
        >
          Saúde, incluindo saúde sexual e reprodutiva
        </div>
        <div
          className={`btn-temas ${temaAtivo('Igualdade de Gênero')}`}
          onTouchStart={() => adicionar('Igualdade de Gênero')}
        >
          Igualdade de Gênero
        </div>
        <div
          className={`btn-temas ${temaAtivo('Dignidade mentrual')}`}
          onTouchStart={() => adicionar('Dignidade mentrual')}
        >
          Dignidade mentrual
        </div>
        <div
          className={`btn-temas ${temaAtivo('Direitos LGBTQIA+')}`}
          onTouchStart={() => adicionar('Direitos LGBTQIA+')}
        >
          Direitos LGBTQIA+
        </div>
        <div
          className={`btn-temas ${temaAtivo(
            'Paz, segurança e erradicação de violências'
          )}`}
          onTouchStart={() =>
            adicionar('Paz, segurança e erradicação de violências')
          }
        >
          Paz, segurança e erradicação de violências
        </div>
        <div
          className={`btn-temas ${temaAtivo('Igualdade racial')}`}
          onTouchStart={() => adicionar('Igualdade racial')}
        >
          Igualdade racial
        </div>
        <div
          className={`btn-temas ${temaAtivo('Direitos dos povos indígenas')}`}
          onTouchStart={() => adicionar('Direitos dos povos indígenas')}
        >
          Direitos dos povos indígenas
        </div>
        <div
          className={`btn-temas ${temaAtivo('Educação em sexualidade')}`}
          onTouchStart={() => adicionar('Educação em sexualidade')}
        >
          Educação em sexualidade
        </div>
        <div
          className={`btn-temas ${temaAtivo(
            'Direitos das pessoas com deficiência'
          )}`}
          onTouchStart={() => adicionar('Direitos das pessoas com deficiência')}
        >
          Direitos das pessoas com deficiência
        </div>
        <div
          className={`btn-temas ${temaAtivo(
            'Cidades inclusivas e transporte de qualidade'
          )}`}
          onTouchStart={() =>
            adicionar('Cidades inclusivas e transporte de qualidade')
          }
        >
          Cidades inclusivas e transporte de qualidade
        </div>
        <div
          className={`btn-temas ${temaAtivo(
            'Políticas de juventude fortalecidas'
          )}`}
          onTouchStart={() => adicionar('Políticas de juventude fortalecidas')}
        >
          Políticas de juventude fortalecidas
        </div>
        <div
          className={`btn-temas ${temaAtivo(
            'Educação de qualidade e empregabilidade'
          )}`}
          onTouchStart={() =>
            adicionar('Educação de qualidade e empregabilidade')
          }
        >
          Educação de qualidade e empregabilidade
        </div>
        <div
          className={`btn-temas ${temaAtivo(
            'Meio-ambiente e sustentabilidade'
          )}`}
          onTouchStart={() => adicionar('Meio-ambiente e sustentabilidade')}
        >
          Meio-ambiente e sustentabilidade
        </div>
        <div
          className={`btn-temas ${temaAtivo('Combate à fome e à pobreza')}`}
          onTouchStart={() => adicionar('Combate à fome e à pobreza')}
        >
          Combate à fome e à pobreza
        </div>
      </div>
    </div>
  )
}

export default Temas
