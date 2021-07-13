import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'

function NavItem({ children, href }) {

    const NavItem = styled.li`
        padding-inline-end: 2rem;

        @media screen and (max-width:768px){
            padding: 1.8rem;
        }

    `
    return (
        <NavItem>
            <Link className="navLink" to={href}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                {children}
            </Link>
        </NavItem>
    )
}



export default NavItem
