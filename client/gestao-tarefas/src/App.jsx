import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from 'react-router-dom'
import BarraNav from './componentes/barra-nav/BarraNav'

function App() {

  return (
    <div>
      <header>
        <BarraNav/>
      </header>
      <section>
        <Outlet/>
      </section>
    </div>
  )
}

export default App
