import React, { useRef, useState, useEffect } from 'react'
import Keyboard from 'react-simple-keyboard'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import 'react-simple-keyboard/build/css/index.css'
import './Telas.css'
import DataVaultComponent from '../../components/DataVault'
import Configuration from '../../components/Configuration/Configuration'
import { animateElement } from '../animate'

function Cadastro () {
  const [inputs, setInputs] = useState({})
  const [layoutName, setLayoutName] = useState('default')
  const [inputName, setInputName] = useState('default')
  const keyboard = useRef()
  const [erro, setErro] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const [fieldsChecked, setFieldsChecked] = useState(false)

  const [checkbox1Checked, setCheckbox1Checked] = useState(false)
  const [checkbox2Checked, setCheckbox2Checked] = useState(false)
  const [isHidden, setIsHidden] = useState(true)

  const navigate = useNavigate()

  const inputRef = useRef(null)

  const home = () => {
    navigate('/home')
  }

  useEffect(() => {
    inputRef.current.focus()
    let delay = 100
    animateElement('.icpd-30', 'rotateIn', delay)
    animateElement('.titulo-email', 'fadeInDown', delay + 300)
    animateElement('.label-input-email', 'fadeInLeft', delay + 500)
    animateElement('.inputs', 'fadeIn', delay + 600)
    animateElement('.keyboard', 'fadeInUp', delay + 700)
    animateElement('#terms', 'fadeInLeft', delay + 1100)
    animateElement('#terms2', 'fadeInLeft', delay + 1300)
    animateElement('.btn-salvar-comentario', 'bounceIn', delay + 1700)
    setTimeout(() => {
      setIsHidden(false)
    }, delay + 600)
  }, [])

  useEffect(() => {
    const time = setTimeout(() => {
      setErro(false)
    }, 1000)
    return () => clearTimeout(time)
  }, [erro])

  const salvar = async () => {
    console.log('Tentando Salvar')
    const id = parseInt(localStorage.getItem('idJogador'))
    if (
      inputs.email &&
      isEmailValid(inputs.email) &&
      checkbox1Checked &&
      checkbox2Checked
    ) {
      try {
        const response = await axios.put(`http://localhost:3001/email/${id}`, {
          email: inputs.email
        })
        localStorage.setItem('idJogador', response.data.id)
        localStorage.setItem('email', inputs.email)
        console.log('Salvou')
        navigate('/mensagem')
      } catch (error) {
        navigate('/erro')
      }
    } else {
      setErro(true)
    }
  }

  const handleCheckbox1Change = () => {
    setCheckbox1Checked(!checkbox1Checked)
  }

  const handleCheckbox2Change = () => {
    setCheckbox2Checked(!checkbox2Checked)
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
      <img
        src='img/home.png'
        className='btn-home absolute'
        onTouchStart={() => home()}
      />
      <img src='img/icpd-30.png' className='icpd-30 absolute hidden' />

      <div className='titulo-email absolute hidden'>
        Estamos quase acabando!
      </div>

      <img src='img/elemento-6.png' className='elemento-6 absolute' />
      <div className='label-input-email absolute hidden'>Email:</div>
      <div className={`cadastro ${isHidden ? 'hidden-2' : 'visible'}`}>
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
      <div className='keyboard keyboard-email hidden'>
        <Keyboard
          keyboardRef={r => (keyboard.current = r)}
          inputName={inputName}
          layoutName={layoutName}
          onChangeAll={onChangeAll}
          onKeyPress={onKeyPress}
          layout={customLayout}
        />
      </div>

      <div id='terms' className='absolute hidden'>
        <div id='termsCheck'>
          <label className='container-checkbox'>
            <span className='text-terms'>
              Aceito compartilhar informações com o UNFPA e receber comunicados
              via email
            </span>
            <input
              id='inputCheckbox1'
              type='checkbox'
              checked={checkbox1Checked}
              onChange={handleCheckbox1Change}
            />
            <span
              className={`checkmark ${
                !checkbox1Checked && erro ? 'check--error' : ''
              }`}
            ></span>
          </label>
        </div>
      </div>
      <div id='terms2' className='absolute hidden'>
        <div id='termsCheck'>
          <label className='container-checkbox'>
            <span className='text-terms'>
              Estou ciente que meus dados não serão comercializados ou
              compartilhados
            </span>
            <input
              id='inputCheckbox2'
              type='checkbox'
              checked={checkbox2Checked}
              onChange={handleCheckbox2Change}
            />
            <span
              className={`checkmark ${
                !checkbox2Checked && erro ? 'check--error' : ''
              }`}
            ></span>
          </label>
        </div>
      </div>

      <div
        className='btn-salvar-comentario hidden'
        onTouchStart={() => salvar()}
      >
        <img src='img/seta.svg'></img>
      </div>
    </div>
  )
}

export default Cadastro
