import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [donkereModus, setDonkereModus] = useState(() => {
        const savedTheme = localStorage.getItem('donkereModus');
        return savedTheme !== null ? JSON.parse(savedTheme) : true;
    });

    useEffect(() => {
        if (donkereModus) {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
        } else {
            document.documentElement.classList.add('light');
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('donkereModus', JSON.stringify(donkereModus));
    }, [donkereModus]);

    const toggleTheme = () => {
        setDonkereModus(prev => !prev);
    };

    return (
        <ThemeContext.Provider value={{ donkereModus, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);