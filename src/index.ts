import http from 'http'
import app from './app.ts'

const port = 5555

const server = http.createServer(app)

server.listen(port, () => {
    return console.log(`Escutando na porta ${port}`)
})
