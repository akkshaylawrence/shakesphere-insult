import { useState, useEffect, useCallback, useRef } from 'preact/hooks';
import { Header } from './components/Header';
import { Controls } from './components/Controls';
import { InsultCard } from './components/InsultCard';
import { Actions } from './components/Actions';
import { FavoritesPanel } from './components/FavoritesPanel';
import { DefinitionModal } from './components/DefinitionModal';
import { useTheme } from './hooks/useTheme';
import { useFavorites } from './hooks/useFavorites';
import { exportInsultImage } from './utils/canvasExport';
import { col1Words, col2Words, col3Words, mildWords, lethalWords, intensityConfig } from './data/words';

export function App() {
    useTheme();
    const [target, setTarget] = useState('');
    const [intensity, setIntensity] = useState('mild');
    const [currentWords, setCurrentWords] = useState([null, null, null]);
    const [lockedSlots, setLockedSlots] = useState([false, false, false]);
    const [statusMessage, setStatusMessage] = useState('');
    const [showFavorites, setShowFavorites] = useState(false);
    const [selectedWordDef, setSelectedWordDef] = useState(null);
    const statusTimeoutRef = useRef(null);

    const showStatus = useCallback((message) => {
        setStatusMessage(message);
        if (statusTimeoutRef.current) {
            clearTimeout(statusTimeoutRef.current);
        }
        statusTimeoutRef.current = setTimeout(() => {
            setStatusMessage('');
        }, 2200);
    }, []);

    const { favorites, addFavorite, removeFavorite } = useFavorites(showStatus);

    const getPool = (words, level) => {
        if (level === 'mild') {
            return words.filter(item => mildWords.has(item.word));
        }
        if (level === 'lethal') {
            return words.filter(item => lethalWords.has(item.word));
        }
        return words.filter(item => !mildWords.has(item.word) && !lethalWords.has(item.word));
    };

    const pickRandom = (words) => words[Math.floor(Math.random() * words.length)];

    const generateInsult = useCallback((levelOverride) => {
        const level = levelOverride ?? intensity;
        const columns = [col1Words, col2Words, col3Words];
        setCurrentWords(prevWords => {
            return prevWords.map((word, index) => {
                if (lockedSlots[index] && word) return word;
                const pool = getPool(columns[index], level);
                return pickRandom(pool);
            });
        });
    }, [intensity, lockedSlots]);

    // Initial generate on mount
    useEffect(() => {
        generateInsult();
    }, []);

    const handleIntensityChange = (newIntensity) => {
        setIntensity(newIntensity);
        generateInsult(newIntensity);
    };

    const handleToggleLock = (index) => {
        setLockedSlots(prev => {
            const next = [...prev];
            next[index] = !next[index];
            showStatus(next[index] ? 'Word locked.' : 'Word unlocked.');
            return next;
        });
    };

    const buildInsultText = useCallback(() => {
        if (!currentWords[0]) return '';
        const config = intensityConfig[intensity];
        const intro = config.intro(target.trim());
        const wordsStr = currentWords.map(w => w.word).join(' ');
        return `${intro} ${wordsStr}! ${config.closing}`;
    }, [intensity, target, currentWords]);

    const handleCopy = async (textToCopy = buildInsultText()) => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            showStatus('Copied to clipboard.');
        } catch {
            showStatus('Could not copy. Select the text and copy it manually.');
        }
    };

    const handleSave = () => {
        const text = buildInsultText();
        addFavorite(text);
    };

    const handleDownload = async () => {
        try {
            const cardEl = document.getElementById('insult-card');
            await exportInsultImage(cardEl);
            showStatus('Image downloaded.');
        } catch {
            showStatus('Could not download image.');
        }
    };

    return (
        <main className="page-shell">
            <Header />

            <section className="generator" aria-label="Insult generator">
                <Controls
                    target={target}
                    onTargetChange={setTarget}
                    intensity={intensity}
                    onIntensityChange={handleIntensityChange}
                />

                <InsultCard
                    target={target}
                    intensity={intensity}
                    currentWords={currentWords}
                    lockedSlots={lockedSlots}
                    onToggleLock={handleToggleLock}
                    onSelectWordDef={setSelectedWordDef}
                />

                <Actions
                    onGenerate={generateInsult}
                    onCopy={() => handleCopy()}
                    onSave={handleSave}
                    onDownload={handleDownload}
                    favoritesCount={favorites.length}
                    onToggleFavoritesPanel={() => setShowFavorites(prev => !prev)}
                />

                {showFavorites && (
                    <FavoritesPanel
                        favorites={favorites}
                        onCopyItem={handleCopy}
                        onRemoveItem={removeFavorite}
                        onClose={() => setShowFavorites(false)}
                    />
                )}

                <p id="status-message" className="status-message" role="status">
                    {statusMessage}
                </p>
            </section>

            <DefinitionModal
                selectedWord={selectedWordDef}
                onClose={() => setSelectedWordDef(null)}
            />
        </main>
    );
}
