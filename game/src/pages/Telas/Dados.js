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
    <div className='cadastro'>
      <Configuration />
      {/* <DataVaultComponent /> */}
      <div className='btn-logs' onTouchStart={handleTouch}></div>
      <div className='cadastro__titulo'>
        Olá,
        <br></br>
        <br></br>
        Somos a B3, a bolsa do Brasil!
      </div>
      <div className='cadastro__texto'>
        Temos um ecossistema de empresas parceiras para entregar a melhor
        solução para você.
        <br></br>
        <br></br>
        Confira nossas soluções que trazem mais segurança, integração e
        inteligência de dados para potencializar suas estratégias de negócio.
      </div>
      <div className='cadastro__termos'>
        Estes dados serão utilizados para lhe enviar informativos sobre os
        nossos serviços, além de utilizarmos para efeitos estatísticos. Ao
        utilizar este formulário você concorda com a nossa Política. Podemos
        compartilhar estes dados com outras marcas do mesmo Grupo para a mesma
        finalidade. Caso deseje se desinscrever, você pode fazê-lo a partir de
        algum e-mail já recebido (através da função descadastrar) assim
        exercendo os seus direitos de usuário para retificação ou remoção dos
        dados sensíveis.
      </div>
      <div className='inputs'>
        <input
          ref={inputRef}
          id='email'
          autoComplete='off'
          type='text'
          value={getInputValue('email')}
          onFocus={() => setInputName('email')}
          placeholder={'Qual é seu email?'}
          onChange={onChangeInput}
          className={
            (!inputs.email || !isEmailValid(inputs.email)) && erro
              ? 'input--error'
              : ''
          }
        />
      </div>
      <div className='btn-salvar' onTouchStart={() => salvar()}>
        ACEITO
      </div>
    </div>
  )
}

export default Cadastro
