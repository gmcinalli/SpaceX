import { useEffect, useState } from "react"

const API_URL = 'http://localhost:8080'

function useGetCrewById(id) {
    const [ member, setMember ] = useState(null)

    async function getData(id) {
        const result = await fetch(`${API_URL}/crew/${id}`)

        return result.json()
    }

    useEffect(() => {
        async function fetchMember() {
            const data = await getData(id)

            setMember(data)
        }

        fetchMember()

    }, [id])

    return member
}

export default useGetCrewById
