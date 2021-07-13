import styled from 'styled-components'

export const Navigation = styled.ul`
    position: fixed;
    list-style: none;
    bottom: 90px;
    left: calc(100% - 2.5%);
    transform: translateX(-50%);

    &::after {
        content:"";
        height: 80px;
        width: 2px;
        background: #a7a7a7;
        position: absolute;
        bottom:-90px;
        left:50%;
        transform: translateX(-50%);
    }

    @media screen and (max-width:768px){
        display: none;
    }
`


export const StickyNav = styled.li`
    padding: .6rem 0;
    
`