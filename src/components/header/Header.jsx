import React, { useState } from 'react'
import styled from 'styled-components'
import { Container } from '../partials/Container'
import Nav from '../partials/navigation/Nav'
import NavItem from '../partials/navigation/NavItem'
import { navigation } from './data/navigation'
import {Button} from '../partials/Button'
import {Social, SocialItem} from '../sticky/Social'
import {BiMenuAltRight} from 'react-icons/bi'
import {BiRightArrowAlt} from 'react-icons/bi'

function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const displayNavigation = () => {
        return navigation.map((item, index) =>
            <NavItem href={item.link}>
                <span>0{item.id}.</span> {item.title}
            </NavItem>
        )
    }

    const Logo = styled.div`
        flex:1;
        display: flex;
        align-items: center;
        font-size: 1rem;
        color:#64FFDA;
        cursor: pointer;
        & > h3 {
            font-family: 'Fira Code', monospace;
            font-weight: 500;
            text-transform: uppercase;
        }
    `
    const HeaderWrapper = styled.div`
        width: 100vw;
        height: 8vh;
    `

    const HeaderSection = styled.section`
        display : flex;
    `

    const IconWrapper = styled.span`
        color: #64ffda;
        font-size: 2rem;
        z-index:5;
        display:none;

        @media screen and (max-width:768px){
            display: block;
        }

        
    `

    return (
        <HeaderWrapper>
            <Container>
                <HeaderSection>
                    <Logo>
                        <h3>Imane</h3>
                    </Logo>

                    <Nav isOpen={isOpen} setIsOpen = {setIsOpen}>
                        {displayNavigation()}
                    </Nav>

                    <Button padding="10px 1rem" hide={true}>
                        Resume
                    </Button>
                    <IconWrapper onClick={() => setIsOpen(!isOpen)}>
                        {!isOpen && <BiMenuAltRight />}
                        {isOpen && <BiRightArrowAlt />}
                    </IconWrapper>
                </HeaderSection>
            </Container>
        </HeaderWrapper>
    )
}



export default Header
