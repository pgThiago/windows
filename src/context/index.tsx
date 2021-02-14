import React, { createContext, useState } from 'react'

export const WindowContext = createContext<WindowContextProps>({
    isAllOn: false,
    setIsAllOn: () => { }
})

interface WindowContextProps {
    isAllOn: boolean
    setIsAllOn: React.Dispatch<React.SetStateAction<boolean>>
}

interface WindowProviderProps {
    children: React.ReactNode;
}

const WindowProvider: React.FC<WindowProviderProps> = ({ children }) => {
    const [isAllOn, setIsAllOn] = useState(false)
    return (
        <WindowContext.Provider value={{ isAllOn, setIsAllOn }}>
            { children}
        </WindowContext.Provider>
    )
}

export default WindowProvider