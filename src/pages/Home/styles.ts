import styled from 'styled-components'

import backgroundNight from '../../assets/backgroundNight.jpg'
import backgroundDay from '../../assets/backgroundDay.jpg'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: ${props => props.theme === true ? `url(${backgroundNight})` : `url(${backgroundDay})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export const Title = styled.h1`
    font-size: 2rem;
    color: #F0F0F4;
    text-align: center;

`
export const CircuitParagraph = styled.p`
    font-size: 1.5rem;
    color: #F0F0F4;
    text-align: center;
`

export const ButtonContainer = styled.div`
    width: 70%;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    background-color: rgba(0, 0, 0, 0.8);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    & {
        p{
            margin-right: 1rem;
        }

        @media(max-width: 560px){
            width: 90%;
        }
    }

`