import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.css'
import Home from './pages/Home/index'
import Survey from './pages/Survey/index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Error from './components/Error'
import Results from './pages/Results'
import Freelance from './pages/Freelances'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    div {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
`

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/survey/:questionNumber" element={<Survey />} />
        <Route exact path="/results" element={<Results />} />
        <Route exact path="/freelance" element={<Freelance />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
