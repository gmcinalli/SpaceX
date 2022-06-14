import Express from 'express'
import JsonServer from 'json-server'
import Path from 'path'
import Url from 'url'

const PORT = process.env.PORT || 8080

const __filename = Url.fileURLToPath(import.meta.url);
const __dirname = Path.dirname(__filename)
const db = Path.join(__dirname, '../db/db.json')

const app = Express()

app
    .use((request, response, next) => {
        response.header('Access-Control-Allow-Origin', '*')
        next()
    })
    .use('/api', JsonServer.router(db))

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})
