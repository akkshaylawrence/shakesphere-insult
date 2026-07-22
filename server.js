const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 9002;

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
    // Prevent directory traversal
    const requestUrl = new URL(req.url, 'http://localhost');
    let safePath = path.normalize(decodeURIComponent(requestUrl.pathname)).replace(/^(\.\.[\/\\])+/, '');
    if (safePath === '/' || safePath === '\\') {
        safePath = '/index.html';
    }

    const filePath = path.join(__dirname, safePath);
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end('<h1>404 Not Found</h1><p>The requested file does not exist.</p>', 'utf-8');
            } else {
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            res.writeHead(200, {
                'Content-Type': contentType,
                'Cache-Control': 'no-cache'
            });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log(`🏰 The Bard's Vituperator Node Server running on http://localhost:${PORT}`);
});
