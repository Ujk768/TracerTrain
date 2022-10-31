import React from 'react'
import "../styles/NavBar.css"
export default function NavBar() {
  return (
    <nav className='nav'>
       <a href='/' className='site-title' >Traccertain</a>
       <ul>
       
        <li>
        <a href='/table'>Tables</a>
        </li>
       </ul>
    </nav>
  )
}
