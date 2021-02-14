import React, {
    useState,
    useEffect,
    useContext
} from 'react'

import { Container } from './styles'
import { WindowContext } from '../../context'

import ToggleButton from '../ToggleButton'

interface WindowProps {
    updateAll: boolean
}

const Window: React.FC<WindowProps> = () => {
    const { isAllOn } = useContext(WindowContext)
    const [isLightOn, setIsLightOn] = useState(false)

    useEffect(() => {
        if (isAllOn)
            setIsLightOn(true)
        else
            setIsLightOn(false)
    }, [isAllOn])

    function toggleColor() {
        setIsLightOn(!isLightOn)
    }

    return (
        <Container style={{ backgroundColor: isLightOn ? '#FFF' : '#19191C' }} >
            <ToggleButton onChange={toggleColor} isLightOnProp={isLightOn} />
        </Container>
    )
}

export default Window