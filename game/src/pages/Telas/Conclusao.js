import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Telas.css'

function Vida () {
  const navigate = useNavigate()

  const redireconar = () => {
    navigate('/home')
  }

  useEffect(() => {
    const timeoutId = setTimeout(redireconar, 5000)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <div>
      <img src='img/elemento-1.png' className='elemento-5 absolute' />
      <img src='img/elemento-2.png' className='elemento-3 absolute' />

      <img src='img/logo-1.png' className='logo-final absolute' />

      <div className='titulo-final absolute'>
        Siga o UNFPA Brasil nas redes sociais!
      </div>

      <div className='instagram absolute'>@UNFPABrasil</div>

      <div className='redes-sociais absolute'>
        <img src='img/icones/1.svg' />
        <img src='img/icones/2.svg' />
        <img src='img/icones/3.svg' />
        <img src='img/icones/4.svg' />
      </div>

      <img src='img/slogan.png' className='slogan-final absolute' />
    </div>
  )
}

export default Vida
