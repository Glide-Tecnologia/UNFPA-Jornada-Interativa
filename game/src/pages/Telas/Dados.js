import React, { useRef, useState, useEffect } from 'react'
import Keyboard from 'react-simple-keyboard'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import 'react-simple-keyboard/build/css/index.css'
import './Telas.css'
import './Dados.css'
import { animateElement } from '../animate'

function Cadastro () {
  const navigate = useNavigate()

  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [gender, setGender] = useState('')
  const [race, setRace] = useState('')
  const [state, setState] = useState('')
  const [erro, setErro] = useState(false)

  useEffect(() => {
    const time = setTimeout(() => {
      setErro(false)
    }, 1000)
    return () => clearTimeout(time)
  }, [erro])

  const salvar = async () => {
    console.log('Tentando Salvar')
    const id = parseInt(localStorage.getItem('idJogador'))

    if (day && month && year && gender && race && state) {
      console.log('Legal')
      try {
        const response = await axios.put(`http://localhost:3001/dados/${id}`, {
          dataNascimento: `${day}/${month}/${year}`,
          genero: gender,
          raca: race,
          estado: state
        })
        localStorage.setItem('nome', `${day}/${month}/${year}`)
        localStorage.setItem('nome', gender)
        localStorage.setItem('nome', race)
        localStorage.setItem('nome', state)
        console.log('Salvou')
        navigate('/email')
      } catch (error) {
        navigate('/erro')
      }
    } else {
      setErro(true)
    }
  }

  function buildDays () {
    var days = []
    for (let i = 1; i <= 31; i++) {
      days.push(
        <option key={i} value={i}>
          {i}
        </option>
      )
    }
    return days
  }

  function buildMonths () {
    var months = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ]
    var optionsMonths = []
    months.forEach(element => {
      optionsMonths.push(
        <option key={element} value={element}>
          {element}
        </option>
      )
    })
    return optionsMonths
  }

  function buildYears () {
    var years = []
    for (let i = 1910; i <= 2023; i++) {
      years.push(
        <option key={i} value={i}>
          {i}
        </option>
      )
    }
    return years
  }

  function buildGenders () {
    var gender = [
      'Mulher trans',
      'Mulher cis',
      'Homem cis',
      'Homem trans',
      'Não-binarie',
      'Prefiro não responder',
      'Outro'
    ]
    var optionsGender = []
    gender.forEach(element => {
      optionsGender.push(
        <option key={element} value={element}>
          {element}
        </option>
      )
    })
    return optionsGender
  }

  function buildRaces () {
    var race = ['Preta', 'Parda', 'Branca', 'Indígena', 'Amarela']
    var optionsRace = []
    race.forEach(element => {
      optionsRace.push(
        <option key={element} value={element}>
          {element}
        </option>
      )
    })
    return optionsRace
  }

  function buildStates () {
    var states = [
      'AC',
      'AL',
      'AP',
      'AM',
      'BA',
      'CE',
      'DF',
      'ES',
      'GO',
      'MA',
      'MT',
      'MS',
      'MG',
      'PA',
      'PB',
      'PR',
      'PE',
      'PI',
      'RJ',
      'RN',
      'RS',
      'RO',
      'RR',
      'SC',
      'SP',
      'SE',
      'TO',
      'EX'
    ]
    var optionsState = []
    states.forEach(element => {
      optionsState.push(
        <option key={element} value={element}>
          {element}
        </option>
      )
    })
    return optionsState
  }

  useEffect(() => {
    let delay = 100;
    animateElement(".icpd-30", "rotateIn", delay)
    animateElement(".titulo-nome", "fadeInDown", delay+300)
    animateElement(".inputs", "fadeIn", delay+700)
    animateElement(".btn-salvar-comentario", "bounceIn", delay+1200)
  }, [])

  return (
    <div className='cadastro'>
      <img src='img/icpd-30.png' className='icpd-30 absolute hidden' />

      <div className='titulo-nome absolute hidden'>Estamos quase acabando!</div>

      <div className='inputs hidden'>
        <label className='lblBirthDate'>Data de Nascimento:</label>
        <select
          defaultValue=''
          className={`select-date select-date__day${
            !day && erro ? ' select--error' : ''
          }`}
          onChange={e => setDay(e.target.value)}
        >
          <option value='' disabled>
            Dia
          </option>
          {buildDays()}
        </select>
        <select
          defaultValue=''
          className={`select-date select-date__month${
            !month && erro ? ' select--error' : ''
          }`}
          onChange={e => setMonth(e.target.value)}
        >
          <option value='' disabled>
            Mês
          </option>
          {buildMonths()}
        </select>
        <select
          defaultValue=''
          className={`select-date select-date__year${
            !year && erro ? ' select--error' : ''
          }`}
          onChange={e => setYear(e.target.value)}
        >
          <option value='' disabled>
            Ano
          </option>
          {buildYears()}
        </select>
        <select
          defaultValue=''
          className={`select-gender${!gender && erro ? ' select--error' : ''}`}
          onChange={e => setGender(e.target.value)}
        >
          <option value='' disabled>
            Gênero
          </option>
          {buildGenders()}
        </select>
        <select
          defaultValue=''
          className={`select-race${!race && erro ? ' select--error' : ''}`}
          onChange={e => setRace(e.target.value)}
        >
          <option value='' disabled>
            Raça
          </option>
          {buildRaces()}
        </select>
        <select
          defaultValue=''
          className={`select-state${!state && erro ? ' select--error' : ''}`}
          onChange={e => setState(e.target.value)}
        >
          <option value='' disabled>
            Estado de Residência
          </option>
          {buildStates()}
        </select>
      </div>
      <div className='btn-salvar-comentario hidden' onTouchStart={() => salvar()}>
        <img src='img/seta.svg'></img>
      </div>
    </div>
  )
}

export default Cadastro
