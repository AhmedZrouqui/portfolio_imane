import React from 'react'
import { Wrapper } from '../partials/Wrapper'
import { Button } from '../partials/Button'
import styled from 'styled-components'
import { useLocomotiveScroll } from 'react-locomotive-scroll'



function Contact() {

    const { scroll } = useLocomotiveScroll()

    const ContactWrapper = styled.section`
        height: 90%;
        max-height: 972px;
        width: 900px;
        max-width: 900px;
    `


    const ContactText = styled.div`
        font-size: 1rem;
        line-height: 1.3;
        width: 90%;
        text-align: center;
        margin: 2rem auto;

        color: #a7a7a7;

    `

    const ContactTitle = styled.div`
        text-align: center;
        color: #64ffda;
        font-size: 1rem;
    `

    const GotaProject = styled.div`
        text-align:center;
        margin:3rem auto 0 auto;
        color: #a7a7a7;
        
        &> h3 {
            font-size: clamp(2rem, 5vw, 4rem);
        }

        &>span{
            color: #64ffda;
        }
        
    `

    
    return (
        <>
            <Wrapper height="60vh" minHeight={true}>
                <ContactWrapper id="contact" data-scroll-section>
                    <ContactTitle>
                        <span>
                            04. <br></br>
                        </span>
                         Contact Me
                    </ContactTitle>

                    <GotaProject >
                        <h3>Got a project in mind ?</h3>
                        <span>Let's work together</span>
                    </GotaProject>

                    <ContactText>
                        Although i'm still studying, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you.
                    </ContactText>

                   <div style={{display:'flex', justifyContent:'center', marginTop:"4rem"}}>
                        <Button padding="1rem 2rem">
                            Get in Touch
                        </Button>
                   </div>
                </ContactWrapper>
            </Wrapper>
        </>
    )
}

export default Contact
