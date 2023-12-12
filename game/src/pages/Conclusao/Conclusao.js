import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Conclusao.css'

function Conclusao () {
  const dataFetchedRef = useRef(false)

  useEffect(() => {
    if (dataFetchedRef.current) return
    dataFetchedRef.current = true

    const id = parseInt(localStorage.getItem('idJogador'))
    const email = localStorage.getItem('email')
    const clicks = localStorage.getItem('clicks')

    var data = new Date()
    var tbClientes = localStorage.getItem('tbClientes')
    tbClientes = JSON.parse(tbClientes)

    if (tbClientes == null) tbClientes = []

    var cliente = JSON.stringify({
      Email: email,
      Click: clicks,
      Date: data
    })

    tbClientes.push(cliente)
    localStorage.setItem('tbClientes', JSON.stringify(tbClientes))
    
    localStorage.removeItem('idJogador')
    localStorage.removeItem('email')
    localStorage.removeItem('clicks')
  }, [])

  const navigate = useNavigate()

  const redireconar = () => {
    navigate('/')
  }
  return (
    <div className='conclusao'>
      <div className='conclusao__titulo'>
        Ficou com dúvidas<br></br>
        ou quer mais<br></br>
        informações?
      </div>
      <div className='conclusao__texto'>
        Fale com a gente <br></br>
        aqui no estande!
      </div>
      <div className='btn-finalizar' onTouchStart={() => redireconar()}>
        Finalizar
      </div>
    </div>
  )
}

export default Conclusao
