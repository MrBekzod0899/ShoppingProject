import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../App'
import Error from './Error/Error'

export default function Router() {
  return (
    <div>
        <Routes>
                <Route exact path='/' element={<App/>}/>
                <Route path='/en/' element={<App/>}/>
                <Route  path='/ru/' element={<App/>}/>
                <Route  path='/ar/' element={<App/>}/>
                <Route  element={<Error/>}/>
        </Routes>
    </div>
  )
}
