import React from 'react'
import './header.css'
export default function Header() {
    const [open, setopen] = React.useState(false);
    const handleOpen = (e) => {
        e.stopPropagation();
        setopen(prev => !prev)
    }
    return (
        <header onClick={handleOpen}>
            <div className='navbar'>
                <span className='navbar-brand'><a href='#!'>Gaming Shop</a></span>
                <label htmlFor="response" className='labelCheck'><i className="fa-solid fa-bars"></i></label>
                <input style={{ display: 'none' }} type="checkbox" id="response" className='d-none' />
                <ul className='navbar-body'>
                    <li><a href="#!">Projects</a></li>
                    <li><a href="#!">About Us</a></li>
                    <li><a href="#!">Contact me</a></li>
                    <li><a href="#!">Settings</a></li>
                </ul>
                <div onClick={handleOpen} className='userIcon'><i className="fa-solid fa-user"></i>
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className='userInfo'
                        style={open ? { display: 'flex' } : { display: 'none' }}
                    >
                        <ul className='userInfoList'>
                            <li><i className="fa-solid fa-user"></i><a href='#!'>Profile</a></li>
                            <li><i className="fa-solid fa-gear"></i><a href='#!'>Settings</a></li>
                            <li><i className="fa-solid fa-right-from-bracket"></i><a href='#!'>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}
