import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SkillPage from './pages/SkillPage'
import Main from './pages/Main'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Main />} />
        <Route path='/skills' element={<SkillPage />} />  
      </Routes>    
    </BrowserRouter>      
  )
}

export default App