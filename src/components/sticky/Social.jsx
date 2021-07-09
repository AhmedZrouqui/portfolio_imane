import styled from 'styled-components'

export const Social = styled.ul`
    position: fixed;
    list-style: none;
    bottom: 90px;
    left: 2.5%;
    transform: translateX(-50%);

    &::after {
        content:"";
        height: 80px;
        width: 1px;
        background: #f7f7f7;
        position: absolute;
        bottom:-90px;
        left:50%;
        transform: translateX(-50%);
    }

    @media screen and (max-width:768px){
        display: none;
    }
`


export const SocialItem = styled.li`
    padding: .6rem 0;
    
`

export const SocialLink = styled.a`
    color: #a7a7a7;
    font-size: 1.2rem;  
    cursor: pointer;
    transition: .4s all ease-out;
    
    &:hover{
        color: #64FFDA;
        transition: .4s all ease-out;
    }

`