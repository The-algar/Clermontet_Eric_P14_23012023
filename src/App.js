import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { GlobalStyle } from './utils/style/GlobalStyle';
import Header from './components/Header'
import Error from './components/Error'
import Home from './pages/Home'
import CreateEmployee from './pages/CreateEmployee'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
        <Header />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/create" element={<CreateEmployee />} />
            {/* <Route path="/list" element={<ListEmployee />} /> */}
            <Route path="*" element={<Error />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;