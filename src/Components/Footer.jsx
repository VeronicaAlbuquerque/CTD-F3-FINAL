import React from 'react'
import { useEstadosGlobales } from './utils/global.context'


const Footer = () => {
  const { providerValue } = useEstadosGlobales();
  const { state } = providerValue;

  return (
    <footer className={state}>
        <p>Powered by</p>
        <img src="/images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer