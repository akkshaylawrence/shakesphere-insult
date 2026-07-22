import { useState, useEffect } from 'preact/hooks';

function isNightTime() {
    return new Date().getHours() >= 18;
}

function prefersDark() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function resolveTheme() {
    return isNightTime() || prefersDark() ? 'dark' : 'light';
}

function msUntilNextTransition() {
    const now = new Date();
    const next = new Date(now);

    if (now.getHours() >= 18) {
        // Switch back to light at midnight
        next.setDate(next.getDate() + 1);
        next.setHours(0, 0, 0, 0);
    } else {
        // Switch to dark at 6:00 PM today
        next.setHours(18, 0, 0, 0);
    }

    return Math.max(next.getTime() - now.getTime(), 0);
}

const THEME_COLORS = {
    light: '#f7f7f5',
    dark: '#111113',
};

function syncThemeColor(theme) {
    let meta = document.querySelector('meta[name="theme-color"]:not([media])');
    if (!meta) {
        meta = document.createElement('meta');
        meta.name = 'theme-color';
        document.head.appendChild(meta);
    }
    meta.content = THEME_COLORS[theme];
}

export function useTheme() {
    const [theme, setTheme] = useState(() => resolveTheme());

    useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
        syncThemeColor(theme);
    }, [theme]);

    useEffect(() => {
        let timeoutId;
        const media = window.matchMedia('(prefers-color-scheme: dark)');

        const schedule = () => {
            timeoutId = setTimeout(() => {
                setTheme(resolveTheme());
                schedule();
            }, msUntilNextTransition());
        };

        const onSchemeChange = () => setTheme(resolveTheme());

        setTheme(resolveTheme());
        schedule();
        media.addEventListener('change', onSchemeChange);

        return () => {
            clearTimeout(timeoutId);
            media.removeEventListener('change', onSchemeChange);
        };
    }, []);

    return { theme, isDark: theme === 'dark' };
}
