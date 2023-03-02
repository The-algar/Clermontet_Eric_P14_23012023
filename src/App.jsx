import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { GlobalStyle } from './utils/style/GlobalStyle';
import Header from './components/Header'
import Error from './components/Error'
import Home from './pages/Home'
import CreateEmployee from './pages/CreateEmployee'
import ListEmployee from './pages/ListEmployee'
import { useStore } from 'react-redux'
import { useEffect } from 'react'
import { getEmployees } from './firebase/firebaseServices'

export const App = () => {
  const store = useStore()

  useEffect(() => {
    getEmployees(store)
  }, [store])

  return (
  <>
    <BrowserRouter>
      <GlobalStyle />
        <Header />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Create" element={<CreateEmployee />} />
            <Route path="/List" element={<ListEmployee />} />
            <Route path="*" element={<Error />} />
        </Routes>
    </BrowserRouter>
  </>
  )
}

export default App;