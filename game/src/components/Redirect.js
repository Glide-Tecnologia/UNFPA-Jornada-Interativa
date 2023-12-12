import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Redirect () {
  const navigate = useNavigate()

  const redireconar = url => {
    let clicks = localStorage.getItem('clicks')
    if (clicks == null) clicks = ''
    localStorage.setItem('clicks', clicks + '>' + url)
    try {
      const id = parseInt(localStorage.getItem('idJogador'))

      const response = axios.put(`http://localhost:3001/cadastros/${id}`, {
        click: clicks + '>' + url
      })
      console.log('SALVOU')
      navigate('/' + url)
    } catch (error) {
      console.log('ERRO', error)
      // Lidar com o erro, como redirecionar para a página de erro
    }
  }

  return <div className=''></div>
}

export default Redirect
