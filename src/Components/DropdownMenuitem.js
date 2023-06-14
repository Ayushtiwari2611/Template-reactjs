import React from 'react'
import { Link } from 'react-router-dom'
import DropdownSubmenuitem from './DropdownSubmenuitem';

function DropdownMenuitem(props) {
    const submenuitem = {
        title:"Add Application"
    }
    return (

        <li class="nav-item">
            <a class="nav-link collapsed" data-bs-target="#cardproduction-nav" data-bs-toggle="collapse" href="#">
                <i class="bi bi-bar-chart"></i><span>{props.dropdowntitle.heading}</span><i class="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="cardproduction-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
            <DropdownSubmenuitem submenu={submenuitem}/>
            </ul>
        </li>
    )
}

export default DropdownMenuitem;