import { useState } from 'preact/hooks';

export function useFavorites(onShowStatus) {
    const [favorites, setFavorites] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem('bard_favs') || '[]');
        } catch {
            return [];
        }
    });

    const addFavorite = (text) => {
        if (favorites.includes(text)) {
            onShowStatus?.('This insult is already saved.');
            return false;
        }
        const updated = [...favorites, text];
        setFavorites(updated);
        localStorage.setItem('bard_favs', JSON.stringify(updated));
        onShowStatus?.('Insult saved.');
        return true;
    };

    const removeFavorite = (index) => {
        const updated = favorites.filter((_, i) => i !== index);
        setFavorites(updated);
        localStorage.setItem('bard_favs', JSON.stringify(updated));
        onShowStatus?.('Removed from saved insults.');
    };

    return { favorites, addFavorite, removeFavorite };
}
