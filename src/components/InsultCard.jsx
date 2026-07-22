import { intensityConfig } from '../data/words';

export function InsultCard({ target, intensity, currentWords, lockedSlots, onToggleLock, onSelectWordDef }) {
    const config = intensityConfig[intensity];
    const introText = config.intro(target.trim()) + '…';
    const closingText = '— ' + config.closing;

    return (
        <article className="result-card" aria-live="polite" aria-atomic="true">
            <div className="result-heading">
                <p className="result-label">Your insult</p>
                <p className="lock-hint">Select a word to lock it</p>
            </div>
            <p id="insult-intro" className="insult-intro">{introText}</p>
            <div id="insult-words" className="insult-words">
                {currentWords.map((wordObj, index) => wordObj && (
                    <button
                        key={index}
                        className="word-button"
                        type="button"
                        data-slot={index}
                        aria-label={`${lockedSlots[index] ? 'Unlock' : 'Lock'} ${wordObj.word}`}
                        aria-pressed={lockedSlots[index]}
                        onClick={() => onToggleLock(index)}
                    >
                        {wordObj.word}
                    </button>
                ))}
                <span aria-hidden="true">!</span>
            </div>
            <p id="insult-closing" className="insult-closing">{closingText}</p>
            <div id="definition-list" className="definition-list">
                {currentWords.map((wordObj, index) => wordObj && (
                    <button
                        key={index}
                        className="definition-chip"
                        type="button"
                        onClick={() => onSelectWordDef(wordObj)}
                    >
                        <strong>{wordObj.word}</strong>: {wordObj.def}
                    </button>
                ))}
            </div>
        </article>
    );
}
