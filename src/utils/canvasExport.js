export function exportInsultImage(insultText, isDark) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    canvas.width = 1200;
    canvas.height = 630;
    context.fillStyle = isDark ? '#18181b' : '#f7f7f5';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.strokeStyle = isDark ? '#3f3f46' : '#d4d4d8';
    context.lineWidth = 2;
    context.strokeRect(48, 48, 1104, 534);

    context.fillStyle = isDark ? '#a99dfd' : '#6d5dfc';
    context.font = '600 24px system-ui, sans-serif';
    context.fillText('SHAKESPEAREAN INSULT', 90, 115);

    context.fillStyle = isDark ? '#f4f4f5' : '#18181b';
    context.font = '42px Georgia, serif';

    const wordsArr = insultText.split(' ');
    const lines = [];
    let line = '';

    wordsArr.forEach(word => {
        const candidate = line ? line + ' ' + word : word;
        if (context.measureText(candidate).width > 1000) {
            lines.push(line);
            line = word;
        } else {
            line = candidate;
        }
    });
    if (line) lines.push(line);

    lines.slice(0, 5).forEach((text, index) => {
        context.fillText(text, 90, 215 + index * 68);
    });

    const link = document.createElement('a');
    link.download = 'shakespearean-insult.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
}
