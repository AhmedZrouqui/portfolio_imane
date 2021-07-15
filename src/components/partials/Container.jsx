import styled from 'styled-components'

export const Container = styled.div`
    width: 95%;
    max-width: 1824px;
    margin: 0 auto;
    padding: 1.2rem 0;
    position: relative;
    height: auto;
    display: ${(props) => props.display};
`