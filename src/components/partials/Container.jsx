import styled from 'styled-components'

export const Container = styled.div`
    width: 95%;
    margin: 0 auto;
    padding: 1.2rem 0;
    background: transparent;
    position: relative;
    height: 100vh;
    display: ${(props) => props.display};
`