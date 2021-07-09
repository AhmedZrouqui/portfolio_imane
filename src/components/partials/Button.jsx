import styled from 'styled-components'

export const Button = styled.button`

        padding: ${(props) => props.padding};
        color: #64FFDA;
        border: 1px #64FFDA solid;
        border-radius: 3px;
        background: none;
        outline: none;
        cursor: pointer;
        font-family: 'Fira Code', monospace;
        transition: 0.4s all ease-out;

        &:hover{
            background: rgba(100, 255, 218, 0.2);
            transition: 0.4s all ease-out;
        }


        @media screen and (max-width:768px){
            display: none;
        }
        
    `