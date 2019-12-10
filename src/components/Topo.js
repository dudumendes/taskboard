import React from 'react'
import { Link } from 'react-router-dom'

function Topo() {
    return (
        <nav className="indigo darken-4" role="navigation">
            <div className="nav-wrapper container">
                <span id="logo-container" className="brand-logo">React Taskboard</span>
                <ul className="right">
                    <li><Link to="/">Taskboard</Link></li>
                    <li><Link to="/devs">Devs</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>

            </div>
        </nav>
    )
}

export default Topo