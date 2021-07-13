import React from 'react'
import styled from 'styled-components'
import {SectionTitle} from '../partials/SectionTitle'
import {Wrapper} from '../partials/Wrapper'
import {works} from './data/works'
import { useLocomotiveScroll } from 'react-locomotive-scroll'


function Works() {

    const { scroll } = useLocomotiveScroll()

    const WorksContainer = styled.section`
        width: 900px;
        max-width: 900px;
        margin-bottom: 8rem;
    `

    
    const _WorksContainer = styled.div`
        display: flex;
        flex-direction: column;
        width: 100%;
        grid-gap: 25px;
        margin-top: 4rem;
        padding-inline: 2rem;
    `

    const ImageContainer = styled.div`
        width: 100%;
        position: relative;
        img{
            max-height: 100%;
            max-width: 100%;
            background-color:#64ffda;
        }
    `

    const VerticalSpan = styled.span`
        position: absolute;
        left:  calc(2rem - ${(props) => props.textLength});
        line-height: 0;
        font-size: clamp(0.8rem,2vw, 1rem);
        padding: 0;
        margin: 0;
        top: ${(props) => props.textLength};
        transform: rotate(-90deg);
        color: #64ffda;
    `

    const TextContainer = styled.div`
        color: #a7a7a7;
        font-size: clamp(1rem, 4vw, 1.4rem);

    `   

    const displayWorks = () => {
        return works.map(
            (work,index) => {
                return(
                    <ImageContainer>
                        <TextContainer>
                            <h3>{work.title}</h3>
                            <VerticalSpan textLength={`${work.type.length}ch`}>{work.type}</VerticalSpan>
                        </TextContainer>
                        <img src={work._3d_img} alt={work.title} />
                    </ImageContainer>
                )
            }
        )
    }


    return (
        <>
            <Wrapper height="content-box">
                <WorksContainer id="work" data-scroll-section>
                    <SectionTitle length="19ch">
                        <span>
                            03.
                        </span>
                        My Latest Works
                    </SectionTitle>

                    <_WorksContainer>
                        {displayWorks()}
                    </_WorksContainer>
                </WorksContainer>
            </Wrapper>
        </>
    )
}

export default Works
