import styled from 'styled-components'

export const SectionTitle = styled.h2`
    color: #f7f7f7;
    font-size: clamp(1.625rem,5vw,2rem);
    position: relative;
    font-weight: 500;
    width: 100%;
    display: block;
    &::after{
        content: "";
        width: calc(100% - ${(props) => props.length});
        height: 1px;
        right: 0;
        background: #a9a9a9;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }

    & > span {
        color:#64ffda;
        font-size: clamp(1.2rem,5vw,1.4rem);
        margin-right:1rem;
        font-family:'Fira Code', monospace;
    }
`