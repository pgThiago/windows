import styled from 'styled-components'


export const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;

    & {
        #on {
            margin-left: 5px;
            font-size: 10px;
        }

        #off {
            margin-right: 5px;
            font-size: 10px;
        }

        .switch {
            position: relative;
            display: inline-block;
            width: 40px;
            height: 15px;
        }

        .switch input {
            opacity: 0;
            width: 0;
            height: 0;
        }

        .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: red;
            transition: .4s;
        }

        .slider:before {
            position: absolute;
            content: "";
            height: 15px;
            width: 15px;
            left: 0;
            bottom: 0;
            background-color: #fff;
            transition: .9s;
        }

        input:checked + .slider {
            background-color: blue;
        }

        input:focus + .slider {
            box-shadow: 0 0 1px #fff;
        }

        input:checked + .slider:before {
            transform: translateX(25px);
        }

        .slider.round {
            border-radius: 20px;
        }

        .slider.round:before {
            border-radius: 50%;
        }
    }    
`




