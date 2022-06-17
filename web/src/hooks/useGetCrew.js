import { useEffect, useState } from "react"

const API_URL = process.env.REACT_APP_REST_URL || '/api'

function useGetCrew(agency, search) {
    const [ busy, setBusy ] = useState(false)
    const [ crew, setCrew ] = useState([])

    async function getData(filter, search) {
        const body = JSON.stringify({ filter, search })
        const opts = {
            method: 'POST',
            body,
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const result = await fetch(`${API_URL}/crew`, opts)

        return result.json()
    }

    useEffect(() => {
        setBusy(true)

        async function fetchCrew() {
            const filter = { agency }
            const data = await getData(filter, search)

            setCrew(data)
        }

        fetchCrew()
            .finally(() => setBusy(false))
    }, [agency, search])

    return { crew, busy }
}

export default useGetCrew
