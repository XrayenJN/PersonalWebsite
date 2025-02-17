import React from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom'
import SkillPage from './pages/SkillPage'
import Main from './pages/Main'

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' exact element={<Main />} />
        <Route path='/skills' element={<SkillPage />} />  
      </Routes>   
    </HashRouter> 
  )
}

export default App