import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">Game Shopping</a>
          <ul id="nav-mobile" className="right">
            <li className='NavItem'><a href="#!">Cars</a></li>
            <li className='NavItem'><a href="#!">Toys</a></li>
            <li className='NavItem'><a href="#!">Doll</a></li>
                <li className='language'>
                  <Link to='/en/'>ENG</Link>
                </li>
                <li className='language'>
                    <Link to='/ru/'>RU</Link>
                </li>
                <li className='language'>
                  <Link to={{
                    pathname:'/ar/',
                  }}>
                    AR
                  </Link>
                </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
