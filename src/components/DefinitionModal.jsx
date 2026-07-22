import { useEffect, useRef } from 'preact/hooks';

export function DefinitionModal({ selectedWord, onClose }) {
    const dialogRef = useRef(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (selectedWord) {
            if (!dialog.open) {
                dialog.showModal();
            }
        } else {
            if (dialog.open) {
                dialog.close();
            }
        }
    }, [selectedWord]);

    const handleBackdropClick = (e) => {
        if (e.target === dialogRef.current) {
            onClose();
        }
    };

    return (
        <dialog
            ref={dialogRef}
            id="definition-dialog"
            className="definition-dialog"
            onClick={handleBackdropClick}
            onClose={onClose}
        >
            <button
                id="dialog-close-btn"
                className="dialog-close"
                type="button"
                aria-label="Close"
                onClick={onClose}
            >
                ×
            </button>
            <p id="dialog-type" className="eyebrow">{selectedWord?.type || ''}</p>
            <h2 id="dialog-word">{selectedWord?.word || ''}</h2>
            <p id="dialog-definition">{selectedWord?.def || ''}</p>
        </dialog>
    );
}
