/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MainContext } from '../MainContext'
export default function Header() {
  const [language,setLanguage]=useContext(MainContext)
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="logo"><span>Game Shopping</span></a>
          <ul id="nav-mobile" className="right">
            <li className='NavItem'><a href="#!">Cars</a></li>
            <li className='NavItem'><a href="#!">Toys</a></li>
            <li className='NavItem'><a href="#!">Doll</a></li>  
                <li className='language'>
                  <span  onClick={()=>setLanguage('en')}><Link  to='/en/' >ENG</Link></span>
                </li>
                <li className='language'>
                <span  onClick={()=>setLanguage('ru')}><Link to='/ru/' >RU</Link></span>
                </li>
                <li className='language'>
                <span  onClick={()=>setLanguage('ar')}><Link  to='/ar/' >AR</Link></span>
                </li>
          </ul>
          <div className="clear"></div>
        </div>
      </nav>
    </>
  )
}
