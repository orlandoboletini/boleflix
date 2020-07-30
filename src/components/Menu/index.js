import React from 'react';
import ButtonLink from './components/ButtonLink'
import Logo from '../../assets/img/Logo.png'
import './Menu.css'
import {Link} from 'react-router-dom'

function Menu() {
    return(
        <nav className="Menu">
            <Link to="\">
                <img className="Logo" src={Logo} alt="logo"/> 
            </Link>

            <ButtonLink className="ButtonLink" href="cadastro/video">
                Novo Video
            </ButtonLink>
        </nav>
    )
}

export default Menu;