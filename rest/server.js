import Express from 'express'

const PORT = process.env.PORT || 8080

const app = Express()

app
    .use((request, response, next) => {
        response.header('Access-Control-Allow-Origin', '*')
        next()
    })

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})
