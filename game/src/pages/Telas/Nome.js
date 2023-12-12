import React, { useRef, useState, useEffect } from 'react'
import Keyboard from 'react-simple-keyboard'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import 'react-simple-keyboard/build/css/index.css'
import './Telas.css'
import './Cadastro.css'

function Cadastro () {
  const [inputs, setInputs] = useState({})
  const [layoutName, setLayoutName] = useState('default')
  const [inputName, setInputName] = useState('default')
  const keyboard = useRef()
  const [erro, setErro] = useState(false)

  const navigate = useNavigate()

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const salvar = async () => {
    console.log('Tentando Salvar')
    const id = parseInt(localStorage.getItem('idJogador'))
    if (inputs.nome) {
      try {
        const response = await axios.put(`http://localhost:3001/nome/${id}`, {
          nome: inputs.nome
        })
        localStorage.setItem('nome', inputs.nome)
        console.log('Salvou')
        navigate('/dados')
      } catch (error) {
        navigate('/erro')
      }
    } else {
      setErro(true)
    }
  }

  const customLayout = {
    // Defina o layout brasileiro personalizado aqui
    default: [
      '1 2 3 4 5 6 7 8 9 0 {bksp}',
      'q w e r t y u i o p',
      'a s d f g h j k l ç',
      '{shift} z x c v b n m',
      '{space}'
    ],
    shift: [
      '1 2 3 4 5 6 7 8 9 0 {bksp}',
      'Q W E R T Y U I O P',
      'A S D F G H J K L Ç',
      '{shift} Z X C V B N M',
      '{space}'
    ],
    display: {
      '{bksp}': 'delete'
    }
  }

  const onChangeAll = inputs => {
    setInputs({ ...inputs })
    keyboard.current.setInput(capitalizarExcetoPreposicoes(inputs.nome), 'nome')
    // console.log('Inputs changed', capitalizarExcetoPreposicoes(inputs.nome))
  }

  function capitalizarExcetoPreposicoes (nome) {
    nome = nome.toLowerCase()
    const palavras = nome.split(' ')
    const preposicoes = ['de', 'da', 'das', 'dos', 'do']

    const resultado = palavras.map(palavra => {
      if (!preposicoes.includes(palavra.toLowerCase())) {
        return palavra.charAt(0).toUpperCase() + palavra.slice(1)
      } else {
        return palavra
      }
    })

    return resultado.join(' ')
  }

  const handleShift = () => {
    const newLayoutName = layoutName === 'default' ? 'shift' : 'default'
    setLayoutName(newLayoutName)
  }

  const onKeyPress = button => {
    if (button === '{shift}' || button === '{lock}') handleShift()
  }

  const onChangeInput = event => {
    const inputVal = event.target.value

    setInputs({
      ...inputs,
      [inputName]: inputVal
    })
  }

  const getInputValue = inputName => {
    return inputs[inputName] || ''
  }

  const [touchCount, setTouchCount] = useState(0)

  useEffect(() => {
    if (touchCount === 5) {
      navigate('/logs')
      setTouchCount(0) // Reinicia a contagem após 5 toques
    }
  }, [touchCount])

  return (
    <div className='nome'>
      <img src='img/icpd-30.png' className='icpd-30 absolute' />

      <div className='titulo-nome absolute'>Estamos quase acabando!</div>

      <img src='img/elemento-6.png' className='elemento-6 absolute' />
      <div className='label-input absolute'>Nome completo:</div>
      <div className='inputs'>
        <input
          ref={inputRef}
          id='inputNome'
          autoComplete='off'
          type='text'
          value={getInputValue('nome')}
          onFocus={() => setInputName('nome')}
          placeholder={''}
          onChange={onChangeInput}
          className={!inputs.nome && erro ? 'input--error' : ''}
        />
      </div>
      <div className='keyboard'>
        <Keyboard
          keyboardRef={r => (keyboard.current = r)}
          inputName={inputName}
          layoutName={layoutName}
          onChangeAll={onChangeAll}
          onKeyPress={onKeyPress}
          layout={customLayout}
        />
      </div>
      <div className='btn-salvar-comentario' onTouchStart={() => salvar()}>
        <img src='img/seta.svg'></img>
      </div>
    </div>
  )
}

export default Cadastro
