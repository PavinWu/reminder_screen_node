const http = require('http')
const fs = require('fs').promises
const path = require('path')
const oledHandler = require('./oled_handler')

const pagesDir = path.join(__dirname, 'pages')

const server = http.createServer(async (req, res) => 
{
    if (req.url === '/' && req.method === 'GET')
    {
        try
        {
            let htmlContent = await fs.readFile(path.join(pagesDir, 'index.html'), 'utf-8')
            res.writeHead(200, { 'content-type': 'text/html' })
            res.end(htmlContent)
        }
        catch (err)
        {
            res.writeHead(500, { 'content-type': 'text/plain' })
            res.end('Internal Server Error')
        }
    }
    else if (req.url === '/set-timer' && req.method === 'POST')
    {
        let body = ''
        req.on('data', chunk => {
            // accumulate data stream
            body += chunk.toString()
        })
        req.on('end', () => {
            const data = JSON.parse(body)
            console.log('Received timer config:', data)
            res.writeHead(200, { 'content-type': 'text/plain' })
            res.end('OK')
        })
    }
})

oledHandler.init();
server.listen(3000);