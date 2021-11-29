const tryFetch = async (url,option) => {
    let data
    let code

    try {
        const res = await fetch(url,option)

        const jsonData = await res.json()

        data = jsonData.data
        code = jsonData.code

        if(res.status !== 200){
            throw new Error(`Failed to fetch. status : ${res.status}`)
        }
    } catch(e){
        data = e
        code = -1
    }

    return {
        data,
        code
    }
}

export { tryFetch }