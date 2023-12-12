import React, { useRef, useState, useEffect } from 'react'
import Keyboard from 'react-simple-keyboard'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import 'react-simple-keyboard/build/css/index.css'
import './Telas.css'
import './Cadastro.css'
import { animateElement } from '../animate'

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

    let delay = 100
    animateElement(".icpd-30", "rotateIn", delay);
    animateElement(".mensagem-comentario", "fadeInDown", delay+300);
    animateElement(".inputs", "fadeIn", delay+600);   
    animateElement(".keyboard", "fadeIn", delay+800);  
    animateElement(".btn-salvar-comentario", "bounceIn", delay+1200);    
  }, [])

  const salvar = async () => {
    console.log('Tentando Salvar')
    const id = parseInt(localStorage.getItem('idJogador'))
    localStorage.setItem('comentario', inputs.comentario)
    if (inputs.comentario || true) {
      try {
        const response = await axios.put(
          `http://localhost:3001/comentario/${id}`,
          {
            comentario: inputs.comentario
          }
        )
        console.log('Salvou')
        navigate('/nome')
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
      'a s d f g h j k l ç .',
      '{shift} z x c v b n m ,',
      '{space}'
    ],
    shift: [
      '1 2 3 4 5 6 7 8 9 0 {bksp}',
      'Q W E R T Y U I O P',
      'A S D F G H J K L Ç _',
      '{shift} Z X C V B N M -',
      '{space}'
    ],
    display: {
      '{bksp}': 'delete'
    }
  }

  const onChangeAll = inputs => {
    setInputs({ ...inputs })
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

  return (
    <div className='cadastro'>
      <img src='img/icpd-30.png' className='icpd-30 absolute hidden' />

      <div className='mensagem-comentario absolute hidden'>
        Algum outro que não foi mencionado?
      </div>

      <img src='img/elemento-6.png' className='elemento-6 absolute' />
      <img src='img/elemento-44.png' className='elemento-5 absolute' />
      <div className='inputs hidden'>
        <input
          ref={inputRef}
          id='inputComentario'
          autoComplete='off'
          type='text'
          value={getInputValue('comentario')}
          onFocus={() => setInputName('comentario')}
          placeholder={''}
          onChange={onChangeInput}
          className={!inputs.comentario && erro ? 'input--error' : ''}
        />
      </div>
      <div className='keyboard hidden'>
        <Keyboard
          keyboardRef={r => (keyboard.current = r)}
          inputName={inputName}
          layoutName={layoutName}
          onChangeAll={onChangeAll}
          onKeyPress={onKeyPress}
          layout={customLayout}
        />
      </div>
      <div className='btn-salvar-comentario hidden' onTouchStart={() => salvar()}>
        <img src='img/seta.svg'></img>
      </div>
    </div>
  )
}

export default Cadastro
