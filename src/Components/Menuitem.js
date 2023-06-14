import React from 'react'
import { Link } from 'react-router-dom'

function Menuitem(props) {
    return (
        <li class="nav-item">
            <Link class="nav-link " to="/">
                <i class="bi bi-grid"></i>
                <span>{props.title.heading}</span>
            </Link>
        </li>
    )
}

export default Menuitem