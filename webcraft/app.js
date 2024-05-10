import * as fs from "fs"
import * as http from "http"
import * as url from "url"

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
    let q = url.parse(req.url,true)
    let filename = "." + q.pathname
    fs.readFile(filename, (err, data) => {
        res.writeHead(200, {'Context-Type': 'text/html'})
        res.write(data)
        return res.end()
    })
    res.end()
})

server.listen(port, hostname, () => {
    console.log(`Server is listening at http://${hostname}:${port}/`)
})