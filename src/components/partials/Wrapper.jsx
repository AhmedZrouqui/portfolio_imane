import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 60%;
    max-width: 1152px;
    margin: 0 auto;
    min-height: ${(props)=> props.minHeight ? "660px" : ""};
    padding: 1.2rem 0;
    position: relative;
    display: flex;
    align-items: center;

    height: ${(props) => props.height};
    display: ${(props) => props.display};

    @media screen and (max-width: 768px){
        width: 100%;
        height: ${(props) => props.mobilePlus ? "160vh" : "auto"};
    }
`