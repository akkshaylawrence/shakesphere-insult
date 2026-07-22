export function Actions({
    onGenerate,
    onCopy,
    onSave,
    onDownload,
    favoritesCount,
    onToggleFavoritesPanel
}) {
    return (
        <>
            <div className="actions">
                <button id="generate-btn" className="button button-primary" type="button" onClick={onGenerate}>
                    Generate insult
                </button>
                <button id="copy-btn" className="button button-secondary" type="button" onClick={onCopy}>
                    Copy
                </button>
                <button id="save-btn" className="button button-secondary" type="button" onClick={onSave}>
                    Save
                </button>
                <button id="download-btn" className="button button-secondary" type="button" onClick={onDownload}>
                    Download
                </button>
            </div>

            <button id="favorites-toggle-btn" className="saved-toggle" type="button" onClick={onToggleFavoritesPanel}>
                Saved insults <span id="favorites-count">{favoritesCount}</span>
            </button>
        </>
    );
}
