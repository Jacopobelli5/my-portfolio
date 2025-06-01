import { useState } from 'react'
import './css/App.css'
import { NavBar } from './components/NavBar'
import works from './assets/works.svg'

function App() {

  return (
    <>
     <NavBar />
     <main className='main-content'>
        <section className='intro'></section>
        <section className='about'></section>
        <section className='experiences'>
        </section>
        <section className='contacts'></section>
     </main>
    </>
  )
}

export default App
