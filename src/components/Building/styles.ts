import styled from 'styled-components'

export const Container = styled.div`
    width: 70%;
    height: 90vh;
    margin: auto;
    background-color: rgba(18, 18, 19, 0.7);

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 0.1rem;

    justify-items: center;
    align-items: center;

    & {
        @media(max-width: 730px){
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(4, 1fr);
        }

        @media(max-width: 560px){
            width: 90%;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(6, 1fr);
        }
    }
`