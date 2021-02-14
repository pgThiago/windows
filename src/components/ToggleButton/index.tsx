import React from 'react'

import { Container } from './styles'

interface ToggleButtonProps {
    onChange: ((event: React.FormEvent<HTMLDivElement>) => void)
    isLightOnProp?: boolean,
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ onChange, isLightOnProp }) => {
    return (
        <Container>
            <p style={{ color: isLightOnProp ? '#000' : '#FFF' }} id="off">OFF</p>

            <label className="switch">
                <input onChange={onChange} checked={isLightOnProp} type="checkbox" />
                <span className="slider round"></span>
            </label>

            <p style={{ color: isLightOnProp ? '#000' : '#FFF' }} id="on">ON</p>
        </Container>
    )
}

export default ToggleButton