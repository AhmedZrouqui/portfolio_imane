import React from 'react'
import styled from 'styled-components'
import ImaneImg from './assets/img/ImaneImg.jpeg'
import { Wrapper } from '../partials/Wrapper'
import {SectionTitle} from  '../partials/SectionTitle'
import { useLocomotiveScroll } from 'react-locomotive-scroll'

const AboutContainer = styled.section`
        height: 90%;
        max-height: 972px;
        width: 900px;
        max-width: 900px;
    `

const InformationContainer = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    margin-top: 4rem;
    grid-gap: 25px;
    color: #a9a9a9;

    @media screen and (max-width:1200px){
        grid-template-columns: 1fr;
        & > .about-me-img {
        display: flex;
        justify-content: flex-start !important;
        }
    }

    & > .about-me-text{
        max-width: 50ch;
        width: 100%;
    }

    & > .about-me-img {
        display: flex;
        justify-content: center;
    }
`

const ImgStyle = {
    width: "280px",
    height: "280px",
    backgroundColor: "#64FFDA",
    backgroundImage: `url(${ImaneImg})`,
    backgroundSize: "cover",
    backgroundBlendMode : "darken",
    borderRadius: "5px",
}

const TechnologiesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1.6rem;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`



const TechList = styled.ul`
    list-style: none;
    &:first-child{
        margin-left: 1rem;
    }

    @media screen and (max-width: 768px){
        &:nth-child(2n){
            margin-left: 1rem;
        }
    }


    & > li {
        position: relative;
        padding: .2rem 0;
        font-size: clamp(0.9rem, 3vw, 1rem);
    }

    & > li::after{
        content:'>';
        left: 0;
        color:#64FFDA;
        font-weight: bold;
        display: inline-block;
        width: 1rem;
        position: absolute;
        margin-left: -1rem;
    }
`

function About() {

    const { scroll } = useLocomotiveScroll()

    return (
        <>
           <Wrapper height="100vh" mobilePlus={true}>
            <AboutContainer id="about" data-scroll-section>
                    <div className="section-title">
                        <SectionTitle length="12ch">
                            <span>
                                01.
                            </span>
                             About Me
                        </SectionTitle>
                    </div>

                    <InformationContainer>
                        <div className="about-me-text">
                            <p style={{lineHeight:"1.8rem", fontSize:"clamp(0.9rem, 3vw, 1rem)", fontWeight:"300"}}>
                            Hello! my name is Imane Sihi, I’m a graphic designer and interior design student. I’m <span style={{color:"#64ffda"}}>passionate</span> about
                            matching interiors with personalities and making the space comfortable and functional, i also
                            enjoy finding <span style={{color:"#64ffda"}}>problematics</span> and creating a new product to solve them. <br />
                            making short <span style={{color:"#f7f7f7"}}>comics</span> and <span style={{color:"#f7f7f7"}}>illustrations</span> is pretty much what i do in my free time. <br />
                            <br />
                            <span style={{color:"#64ffda"}}>Disponibility-wise</span>, i'm open to any kind of work, lets get in touch and work together.
                            </p>

                            <p style={{lineHeight:"1.8rem", fontSize:"clamp(0.9rem, 3vw, 1rem)", fontWeight:"300"}}>
                                <br />
                                Also, here are some technologies i work with: </p>

                            <TechnologiesContainer>
                                <TechList >
                                    <li>Adobe Illustrator</li>
                                    <li>Adobe Photoshop</li>
                                    <li>Adobe Indesign</li>
                                </TechList>

                                <TechList>
                                    <li>3Ds Max</li>
                                    <li>Archicad</li>
                                    <li>Adobe Premier Pro</li>
                                </TechList>
                            </TechnologiesContainer>
                        </div>

                        <div className="about-me-img">
                            <div className="img" style={ImgStyle}></div>
                        </div>
                    </InformationContainer>
            </AboutContainer>
           </Wrapper>
        </>
    )
}

export default About
