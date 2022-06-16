import bodyParser from 'body-parser'
import Express from 'express'
import Path from 'path'
import Url from 'url'

import Crew from './api/crew.js'

const PORT = process.env.PORT

const __filename = Url.fileURLToPath(import.meta.url);
const __dirname = Path.dirname(__filename)
const db = Path.join(__dirname, '../db/db.json')

const app = Express()

app
    .use((request, response, next) => {
        response.header('Access-Control-Allow-Origin', '*')
        response.header("Access-Control-Allow-Methods", "GET,POST")
        response.header("Access-Control-Allow-Headers", "Content-Type")
        next()
    })
    .use(bodyParser.json())
    .use('/crew', Crew)

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})
