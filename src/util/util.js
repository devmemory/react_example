import axios from "axios"

// fetch
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

// axios
const response = async (url,method,data) => {
    let result
    let code

    try {
        const res = await axios({url, method, data})

        result = res.data.data
        code = res.data.code

        if(res.status !== 200){
            throw new Error(`Failed to fetch. status : ${res.status}`)
        }
    } catch(e){
        result = e
        code = -1
    }

    return {
        data: result,
        code
    }
}

export { tryFetch, response }