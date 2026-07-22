export function Header({ isDark, onToggleTheme }) {
    return (
        <header className="page-header">
            <div>
                <h1>Shakespearean Insult Forge</h1>
                <p className="intro">Choose a target and decide how merciless the Bard should be.</p>
            </div>
            <div className="header-actions">
                <button
                    id="theme-toggle-btn"
                    className="icon-button"
                    type="button"
                    onClick={onToggleTheme}
                    aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                    title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                    <svg className="theme-icon moon-icon" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"></path>
                    </svg>
                    <svg className="theme-icon sun-icon" viewBox="0 0 24 24" aria-hidden="true">
                        <circle cx="12" cy="12" r="4"></circle>
                        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
}
