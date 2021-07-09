import React from 'react'
import styled from 'styled-components'

function NavItem({ children, href }) {

    const NavItem = styled.li`
        padding-inline-end: 2rem;

        @media screen and (max-width:768px){
            padding: 1.8rem;
        }

    `

    const NavLink = styled.a`
        text-decoration: none;
        text-transform: capitalize;
        font-family: 'Fira Code', monospace;
        color: #f3f3f3;
        transition: .4s all ease-out;

        & > span{
            color: #64FFDA;
        }

        &:hover{
            color: #64FFDA;
            transition: .4s all ease-out;
        }
    `

    return (
        <NavItem>
            <NavLink href={href}>
                {children}
            </NavLink>
        </NavItem>
    )
}



export default NavItem
