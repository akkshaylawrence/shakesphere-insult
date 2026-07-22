export function FavoritesPanel({ favorites, onCopyItem, onRemoveItem, onClose }) {
    return (
        <section id="favorites-panel" className="favorites-panel" aria-label="Saved insults">
            <div className="panel-heading">
                <h2>Saved insults</h2>
                <button id="favorites-close-btn" className="text-button" type="button" onClick={onClose}>
                    Close
                </button>
            </div>
            <div id="favorites-list" className="favorites-list">
                {favorites.length === 0 ? (
                    <p className="empty-message">No saved insults yet.</p>
                ) : (
                    favorites.map((text, index) => (
                        <article key={index} className="favorite-item">
                            <p>{text}</p>
                            <div className="favorite-actions">
                                <button type="button" onClick={() => onCopyItem(text)}>
                                    Copy
                                </button>
                                <button type="button" onClick={() => onRemoveItem(index)}>
                                    Remove
                                </button>
                            </div>
                        </article>
                    ))
                )}
            </div>
        </section>
    );
}
