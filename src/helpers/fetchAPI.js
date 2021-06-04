const fetchAPI = async (url) => {
    try {
        const request = await fetch(url)
        const response = await request.json()
        return response
    } catch (error) {
        return error
    }
}

export default fetchAPI
