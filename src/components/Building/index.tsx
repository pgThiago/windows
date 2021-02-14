import React, { useContext } from 'react'

import Window from '../Window'

import { Container } from './styles'

import { WindowContext } from '../../context'

const Building: React.FC = () => {
    const { isAllOn } = useContext(WindowContext)

    return (
        <Container>
            <Window updateAll={isAllOn} />
            <Window updateAll={isAllOn} />
            <Window updateAll={isAllOn} />
            <Window updateAll={isAllOn} />
            <Window updateAll={isAllOn} />
            <Window updateAll={isAllOn} />
            <Window updateAll={isAllOn} />
            <Window updateAll={isAllOn} />
            <Window updateAll={isAllOn} />
            <Window updateAll={isAllOn} />
            <Window updateAll={isAllOn} />
            <Window updateAll={isAllOn} />
        </Container>
    )
}

export default Building