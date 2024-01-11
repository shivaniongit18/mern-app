import React from 'react'
import './CSS/Navbar.css';
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">MERN</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to= "/" className="nav-link" aria-current="page">Create Post</Link>
        </li>
        <li className="nav-item">
          <Link to= "/all" className="nav-link">All Post</Link>
        </li>    
      </ul>
    </div>
  </div>
</nav>
  )
}
