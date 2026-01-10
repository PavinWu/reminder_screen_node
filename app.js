const http = require('http')
const fs = require('fs').promises
const path = require('path')

const pagesDir = path.join(__dirname, 'pages')

const server = http.createServer(async (req, res) => 
{
    if (req.url === '/' && req.method === 'GET')
    {
        try
        {
            var htmlContent = await fs.readFile(path.join(pagesDir, 'index.html'), 'utf-8')
            res.writeHead(200, { 'content-type': 'text/html' })
            res.end(htmlContent)
        }
        catch (err)
        {
            res.writeHead(500, { 'content-type': 'text/plain' })
            res.end('Internal Server Error')
        }
    }
})

server.listen(3000)