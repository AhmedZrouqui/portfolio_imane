import React, { useState } from 'react'
import styled from 'styled-components'
import {Wrapper} from '../partials/Wrapper'
import {SectionTitle} from  '../partials/SectionTitle'
import {experiences} from './data/experiences'
import { useLocomotiveScroll } from 'react-locomotive-scroll'

function Experiences() {

    const { scroll } = useLocomotiveScroll()

    const [onChange, setOnChange] = useState(false);

    const ExperiencesContainer = styled.section`
        height: 90%;
        max-height: 972px;
        width: 900px;
        max-width: 900px;
    `

    const ExperiencesNavigationContainer = styled.div`
        display: grid;
        width: 100%;
        min-height: 28vh;
        margin-top: 4rem;
        grid-template-columns: 2fr 4fr;
        grid-gap: 40px;

        @media screen and (max-width: 1200px){
            grid-template-columns: 1fr;
        }
    `

    const ExperiencesNav = styled.nav`
        position: relative;
        padding:0;
        font-size: .9rem;
        color: #a7a7a7;
        

        &::before{
            content: "";
            height: 100%;
            width: 1px;
            background: #a9a9a9;
            position: absolute;
            left : 0;
            bottom: 0;
        }

        &> ul{
            list-style: none;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        @media screen and (max-width:1200px){

            &::before{
                height: 1px;
                width: 100%;
            }

            & > ul {
                flex-direction: row;
            }
        }
    `

    const NavItem = styled.li`
        padding: 1rem .8rem;
        cursor: pointer;
        border-top-right-radius: 3px;
        border-top-left-radius: 3px;
        background : ${(props) => props.actif ? "#64ffda33" : "none"};
        transition: .4s all ease-out;
        position: relative;

        &:hover{
            color: #64ffda !important;
            transition: .4s all ease-out;

            &::after{
                background: #64ffda;
            }
        }

        &::after{
            content: "";
            height: 100%;
            left:0;
            background: ${(props) => props.actif ? "#64ffda" : "none"};;
            width: 2px;
            z-index: 2;
            position: absolute;
            top:0;
            transition: .4s all ease-out;
        }

        color: ${(props) => props.actif ? "#64ffda" : '#a7a7a7'} !important;

        @media screen and (max-width: 1200px){
            &::after{
                height: 2px;
                width: 100%;
                top: calc(100% - 2px);
            }
        }
    `

    const ExperienceDisplay = styled.div`
        width: 100%;
        color: #a7a7a7;

        &> h3{
            color: #a7a7a7;
            font-size: clamp(1.4rem, 3vw, 1.6rem);

            &>span{
                font-style: italic;
                color : #64ffda;
            }
        }

        & > .date{
            font-style: italic;
            font-size: 0.9rem;
        }

        &> ul {
            list-style: none;
            margin: 2rem 0 0 1rem;
            color: #f7f7f7;

            & > li {
                position: relative;
                padding: .3rem 0;
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

        }

        @media screen and (max-width:1200px){
            margin-top: 3rem;
        }

    `

    const displayExperiencesCompanies = () => {
        return experiences.map((item,index) => (<NavItem onClick={onExperienceClick} actif={item.actif} id={item.company} key={item.company}>{item.company}</NavItem>))
    }

    const onExperienceClick = (e) => {
        experiences.map((item, index) => {
            if(e.target.id === item.company){
                item.actif = true;
            } else item.actif = false;
        })
        setOnChange(!onChange)
    }

    const loadData = () => {
        return experiences.map((item, index) => {
            if(item.actif){
                return(
                    <>
                    <h3>{item.function} <span>@{item.company}</span></h3>
                    <span className="date">{item.department} - {item.year}</span>
                        <ul>
                            {
                                item.tasks.map((task,index) =>
                                    (<li id={index}>{task.task}</li>)
                                )
                            }
                        </ul>
                    
                    </>
                )
            }
        })
    }


    return (
        <>
            <Wrapper height="80vh">
                <ExperiencesContainer id="experience" data-scroll-section>
                    <div className="section-title">
                        <SectionTitle length="18ch">
                            <span>
                                02.
                            </span>
                            My Experiences
                        </SectionTitle>
                    </div>
                    
                    
                    <ExperiencesNavigationContainer>
                        <ExperiencesNav>
                            <ul>
                                {displayExperiencesCompanies()}
                            </ul>
                        </ExperiencesNav>

                        <ExperienceDisplay>
                            {loadData()}
                        </ExperienceDisplay>
                    </ExperiencesNavigationContainer>

                </ExperiencesContainer>
            </Wrapper>
        </>
    )
}

export default Experiences
