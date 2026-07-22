export async function exportInsultImage(cardEl) {
    if (!cardEl) {
        throw new Error('Insult card not found');
    }

    const { toPng } = await import('html-to-image');

    const backgroundColor = getComputedStyle(cardEl).backgroundColor || '#ffffff';

    cardEl.classList.add('result-card--export');

    try {
        // Let the browser apply export styles before capture.
        await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));

        const dataUrl = await toPng(cardEl, {
            pixelRatio: 2,
            cacheBust: true,
            backgroundColor,
            filter: (node) => !(node instanceof HTMLElement && node.classList.contains('lock-hint')),
        });

        const link = document.createElement('a');
        link.download = 'shakespearean-insult.png';
        link.href = dataUrl;
        link.click();
    } finally {
        cardEl.classList.remove('result-card--export');
    }
}
