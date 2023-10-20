import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from './Home/Home'
import PNF from './PNF/PNF'

const Router = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<PNF/>} />
        </Routes>
    </>
  )
}

export default Router