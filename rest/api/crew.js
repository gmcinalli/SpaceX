import { Router } from 'express'
import spaceGet from '../lib/spacex.js'

// API docs
// https://github.com/r-spacex/SpaceX-API/blob/master/docs/crew/v4/query.md

const router = Router()

async function getCrew() {
    const result = await spaceGet('/crew')
    const data = await result.json()

    return data
}

async function getCrewFiltered(filter, search) {
    const filterIsEmpty = Object.values(filter).every(it => it === null || it === '')

    if (filterIsEmpty && search === '') {
        return await getCrew()
    }

    const query = {}

    if (search) {
        const regex = {
            $regex: search,
            // Insensitive search.
            $options: 'i',
        }

        query['$or'] = [
            { name: regex },
            { agency: regex },
        ]
    }

    for (const it in filter) {
        if (! filter[it]) {
            continue
        }

        query[it] = filter[it]
    }

    const opts = {
        method: 'POST',
        body: JSON.stringify({ query }),
        headers: { 'Content-Type': 'application/json' }
    }

    try {
        const result = await spaceGet('/crew/query', opts)
        const data = await result.json()

        return data.docs
    } catch (error) {
        response
            .status(400)
            // TODO
            .json({ message: 'API ERROR' })
    }
}

router.post('/', async (request, response) => {
    const { filter, search } = request.body
    const data = await getCrewFiltered(filter, search)

    response.send(data)
})

router.get('/:id', async (request, response) => {
    const id = request.params.id

    try {
        const result = await spaceGet(`/crew/${id}`)
        const data = await result.json()

        response.send(data)
    } catch (error) {
        response
            .status(404)
            // TODO
            .json({ message: 'API ERROR' })
    }
})

export default router
