'use client'

import { useState, useEffect } from 'react'
import { ThemeProvider, useTheme } from 'next-themes'

const ToggleThemeProvider = ({ children }) => {
    const [mounted, setMounted] = useState(false)
    // const { theme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <>{children}</>
    }

    return (
        <ThemeProvider>{children}</ThemeProvider>
    )
}

export default ToggleThemeProvider