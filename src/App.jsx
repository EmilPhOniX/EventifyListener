import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import Home from './pages/Home.jsx'
import Events from './pages/Events.jsx'

import './App.css'

export default function App() {
  return (
    <body>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/events' element={<Events />} />
      </Routes>
      <Footer />
    </body>
  )
}