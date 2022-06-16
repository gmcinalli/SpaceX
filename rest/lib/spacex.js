import Fetch from 'node-fetch'

const API_URL = 'https://api.spacexdata.com/v4'

async function spaceGet(url, opts) {
    return await Fetch(API_URL + url, opts)
}

export default spaceGet
