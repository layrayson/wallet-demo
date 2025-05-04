// theme/ThemeContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { ThemeType, lightTheme, darkTheme } from '../color';

const ThemeContext = createContext<{ theme: ThemeType }>({ theme: lightTheme });

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const colorScheme = useColorScheme();
    const [theme, setTheme] = useState<ThemeType>(lightTheme);

    useEffect(() => {
        setTheme(colorScheme === 'dark' ? darkTheme : lightTheme);
    }, [colorScheme]);

    return (
        <ThemeContext.Provider value={{ theme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useAppTheme = () => useContext(ThemeContext);
