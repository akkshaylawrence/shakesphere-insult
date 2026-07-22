export function Controls({ target, onTargetChange, intensity, onIntensityChange }) {
    const levels = [
        { id: 'mild', label: 'Mild' },
        { id: 'spicy', label: 'Savage' },
        { id: 'lethal', label: 'Lethal' }
    ];

    return (
        <div className="controls-grid">
            <div className="field">
                <label htmlFor="target-name-input">Target</label>
                <input
                    id="target-name-input"
                    type="text"
                    placeholder="Enter a name (optional)"
                    maxLength={30}
                    autoComplete="off"
                    value={target}
                    onInput={(e) => onTargetChange(e.target.value)}
                />
            </div>

            <div className="field" role="group" aria-labelledby="intensity-label">
                <label id="intensity-label">Intensity</label>
                <div className="intensity-options">
                    {levels.map(level => (
                        <button
                            key={level.id}
                            className={`intensity-button ${intensity === level.id ? 'active' : ''}`}
                            type="button"
                            data-level={level.id}
                            aria-pressed={intensity === level.id}
                            onClick={() => onIntensityChange(level.id)}
                        >
                            {level.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
