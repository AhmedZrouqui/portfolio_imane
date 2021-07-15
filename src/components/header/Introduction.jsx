import React from 'react'
import {Wrapper} from '../partials/Wrapper'
import {Button} from '../partials/Button'
import styled from 'styled-components'
import { useLocomotiveScroll } from 'react-locomotive-scroll'


function Introduction() {

    const { scroll } = useLocomotiveScroll()

    const IntroductionContainer = styled.section`
        height: 60%;
        max-height: 648px;
        
    `

    const HiSpan = styled.span`
        font-size: .8rem;
        color: #64FFDA;
        line-height: 1.625rem;
    `

    const CustomH1 = styled.h1`
        font-size: clamp(2.5rem, 7vw, 4.8rem);
        color: ${(props) => props.fontColor};
        line-height: 1.3;
    `

    const IntroductionText = styled.p`
        padding: 2rem 0;
        font-size: 1rem;
        line-height: 1.7rem;
        max-width: 55ch;
        color: #a9a9a9;

        @media screen and (max-width:768px){
            max-width: 35ch;
        }
    `

    const ColoredText = styled.span`
        color: #64FFDA;
    `


    return (
        <>
            <Wrapper height="92vh">
                <IntroductionContainer data-scroll-section >
                    <HiSpan data-scroll >Hi there, my name is</HiSpan>
                    <div style={{width:"100%"}}>
                    <CustomH1 fontColor="#F7F7F7" data-scroll>Imane Sihi.</CustomH1>
                    </div>
                    <div>
                    <CustomH1 fontColor="#a9a9a9" data-scroll>Graphic/Interior Designer.</CustomH1>
                    </div>

                    <IntroductionText data-scroll>
                        I'm a Morocco-based interior and graphic designer who specialiezes in building (and occasionally designing) exceptional 3D stuff.
                        Currently, I'm an interior design student at <ColoredText>ESBA-Casablanca</ColoredText>.
                    </IntroductionText>

                    <Button padding="1rem 2rem">
                        Get in Touch
                    </Button>
                </IntroductionContainer>
            </Wrapper>
        </>
    )
}

export default Introduction
