import React, { useRef, useState, useEffect } from 'react'
import Keyboard from 'react-simple-keyboard'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import 'react-simple-keyboard/build/css/index.css'
import './Telas.css'
import DataVaultComponent from '../../components/DataVault'
import Configuration from '../../components/Configuration/Configuration'

function Cadastro () {
  const [inputs, setInputs] = useState({})
  const [layoutName, setLayoutName] = useState('default')
  const [inputName, setInputName] = useState('default')
  const keyboard = useRef()
  const [erro, setErro] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const [fieldsChecked, setFieldsChecked] = useState(false)

  const navigate = useNavigate()

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const salvar = async () => {
    console.log('Tentando Salvar')
    if (inputs.email && isEmailValid(inputs.email)) {
      try {
        const response = await axios.post('http://localhost:3001/cadastros', {
          email: inputs.email
        })
        localStorage.setItem('idJogador', response.data.id)
        localStorage.setItem('email', inputs.email)
        console.log('Salvou')
        navigate('/menu')
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
      'z x c v b n m . - _',
      '@ {space} .com @gmail.com'
    ],
    shift: [
      '1 2 3 4 5 6 7 8 9 0 {bksp}',
      'q w e r t y u i o p',
      'a s d f g h j k l ç',
      '{shift} z x c v b n m , .',
      '{space}'
    ],
    display: {
      '{bksp}': 'delete'
    }
  }

  const isEmailValid = email => {
    // Expressão regular para validar um e-mail
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

    return emailPattern.test(email)
  }

  useEffect(() => {
    const time = setTimeout(() => {
      setFieldsChecked(false)
    }, 1000)
    return () => clearTimeout(time)
  }, [fieldsChecked])

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  function openPopup () {
    const popup = document.getElementById('popup')
    popup.classList.add('show')
  }

  function closePopup () {
    const popup = document.getElementById('popup')
    popup.classList.remove('show')
  }

  const onChangeAll = inputs => {
    setInputs({ ...inputs })
    keyboard.current.setInput(inputs.telefone, 'telefone')
    console.log('Inputs changed', inputs.telefone)
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
  
  const handleTouch = () => {
    setTouchCount(prevCount => prevCount + 1)
  }

  useEffect(() => {
    if (touchCount === 5) {
      navigate('/logs')
      setTouchCount(0) // Reinicia a contagem após 5 toques
    }
  }, [touchCount])

  return (
    <div className='email'>

      <img src="img/icpd-30.png" className='icpd-30 absolute' />

      <div className='titulo-email absolute'>Estamos quase acabando!</div>

      <img src='img/elemento-6.png' className='elemento-6 absolute' />
      <div className='label-input-email absolute'>Email:</div>
      <div className='inputs'>
        <input
          ref={inputRef}
          id='inputEmail'
          autoComplete='off'
          type='text'
          value={getInputValue('email')}
          onFocus={() => setInputName('email')}
          placeholder={''}
          onChange={onChangeInput}
          className={
            (!inputs.email || !isEmailValid(inputs.email)) && erro
              ? 'input--error'
              : ''
          }
        />
      </div>
      <div className='keyboard keyboard-email'>
        <Keyboard
          keyboardRef={r => (keyboard.current = r)}
          inputName={inputName}
          layoutName={layoutName}
          onChangeAll={onChangeAll}
          onKeyPress={onKeyPress}
          layout={customLayout}
        />
      </div>

      <div id="terms" class="absolute">
          <div id="termsCheck">
              <label class="container-checkbox">
                  <span class="text-terms">Aceito compartilhar informações com o UNFPA e receber comunicados via email</span>
                  <input id="inputCheckbox" type="checkbox" />
                  <span class="checkmark"></span>
              </label>
          </div>
          
      </div>    
      <div id="terms2" class="absolute">
          <div id="termsCheck">
              <label class="container-checkbox">
                  <span class="text-terms">Estou ciente que meus dados não serão comercializados ou compartilhados</span>
                  <input id="inputCheckbox" type="checkbox" />
                  <span class="checkmark"></span>
              </label>
          </div>
          
      </div>    


      <div className='btn-salvar-comentario' onTouchStart={() => salvar()}>
        <img src="img/seta.svg"></img>
      </div>

    </div>
  )
}

export default Cadastro
