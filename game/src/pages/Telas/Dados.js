import React, { useRef, useState, useEffect } from 'react'
import Keyboard from 'react-simple-keyboard'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import 'react-simple-keyboard/build/css/index.css'
import './Telas.css'
import './Dados.css'
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
  // const [days, setDays] = useState([])

  function buildDays(){
    var days = [];
    for (let i = 1; i <= 31; i++) {
      days.push(<option key={i} value={i}>{i}</option>)
    }
    return days; 
  }

  function buildMonths(){
    var months = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]
    var optionsMonths=[]
    months.forEach(element => {
      optionsMonths.push(<option key={element} value={element}>{element}</option>)
    });
    return optionsMonths; 
  }

  function buildYears(){
    var years = [];
    for (let i = 1910; i <= 2023; i++) {
      years.push(<option key={i} value={i}>{i}</option>)
    }
    return years; 
  }

  function buildGenders(){
    var gender = ["Mulher trans","Mulher cis","Homem cis","Homem trans","Não-binarie","Prefiro não responder","Outro"];
    var optionsGender=[]
    gender.forEach(element => {
      optionsGender.push(<option key={element} value={element}>{element}</option>)
    });
    return optionsGender; 
  }

  function buildRaces(){
    var race = ["Preta", "Parda", "Branca", "Indígena", "Amarela"];
    var optionsRace=[]
    race.forEach(element => {
      optionsRace.push(<option key={element} value={element}>{element}</option>)
    });
    return optionsRace; 
  }

  function buildStates(){
    var states = ["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO","EX"]
    var optionsState=[]
    states.forEach(element => {
      optionsState.push(<option key={element} value={element}>{element}</option>)
    });
    return optionsState; 
  }


  return (
    <div className='cadastro'>
      <img src="img/icpd-30.png" className='icpd-30 absolute' />

      <div className='titulo-nome absolute'>Estamos quase acabando!</div>
      
      <Configuration />
      {/* <DataVaultComponent /> */}
      <div className='btn-logs' onTouchStart={handleTouch}></div>
      <div className='inputs'>
        <label className='lblBirthDate'>Data de Nascimento:</label>
        <select className='select-date select-date__day'>
          <option value="" disabled selected>Dia</option>
          {buildDays()}
        </select>
        <select className='select-date select-date__month'>
          <option value="" disabled selected>Mês</option>
          {buildMonths()}
        </select>
        <select className='select-date select-date__year'>
          <option value="" disabled selected>Ano</option>
          {buildYears()}
        </select>
        <select className='select-gender'>
          <option value="" disabled selected>Gênero</option>
          {buildGenders()}
        </select>
        <select className='select-race'>
          <option value="" disabled selected>Raça</option>
          {buildRaces()}
        </select>
        <select className='select-state'>
          <option value="" disabled selected>Estado de Residência</option>
          {buildStates()}
        </select>
      </div>
      <div className='btn-salvar-comentario' onTouchStart={() => salvar()}>
        <img src="img/seta.svg"></img>
      </div>
    </div>
  )
}

export default Cadastro
