import React from 'react'
import styled from 'styled-components'

function Nav({ children, isOpen, setIsOpen}) {

    const Navigation = styled.nav`
        flex: 2;
        display: flex;
        justify-content: flex-end;
        font-size: .8rem;
        align-items: center;
        position: relative;
    `

     const NavList = styled.ul`
        list-style: none;
        display: flex;
        position: relative;
        overflow: hidden;


        
        @media screen and (max-width:768px){
            background: rgba(100, 255, 218,.2);
            backdrop-filter: blur(5px);
            flex-direction: column;
            position: fixed;
            inset: 0;
            
            transform: ${(props) => props.isOpen ? "ScaleX(100%)" : "ScaleX(0%)"};
            justify-content: center;
            align-items: center;
            z-index:5;
        }

    `
    return (
        <Navigation>
            <NavList isOpen={isOpen} setIsOpen={setIsOpen}>
                {children}
            </NavList>
        </Navigation>
    )
}

export default Nav
