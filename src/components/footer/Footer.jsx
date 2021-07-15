import React from 'react'
import styled from 'styled-components'
import { Wrapper } from '../partials/Wrapper'
import { useLocomotiveScroll } from 'react-locomotive-scroll'

function Footer() {

    const { scroll } = useLocomotiveScroll()

    const FooterContainer = styled.section`
        width: 900px;
        max-width: 900px;
        font-size: clamp(0.6rem, 4vw, 1rem);
        color: #a7a7a7;

        text-align: center;

        font-weight: 300;
    `  
    

    return (
        <>
            <Wrapper height="auto" noMargin={true}>
                <FooterContainer data-scroll-section>
                    Designed by Brittany Chiang, Built by Ahmed Zrouqui.
                </FooterContainer>
            </Wrapper>
        </>
    )
}

export default Footer
