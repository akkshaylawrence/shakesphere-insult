import { useState, useEffect } from 'preact/hooks';

export function useTheme() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('bard_theme') || 'light';
    });

    useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
        localStorage.setItem('bard_theme', theme);
    }, [theme]);

    const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

    return { theme, isDark: theme === 'dark', toggleTheme };
}
