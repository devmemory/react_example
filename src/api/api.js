import axios from 'axios'

class Api {
    constructor() {

        this.instance = axios.create()
        // this.instance.defaults.baseURL = BASE_URL
        this._setHeader()
    }

    _setHeader() {
        // const ssn = window.localStorage.getItem('ssn')

        // if (ssn != null) {
        //     this.instance.defaults.headers.common['ssn'] = ssn
        // }
    }

    async get(url) {
        const res = await this.instance.get(url)

        console.log('get')

        const code = res.data.code

        if (code != 1) {
            return {
                code
            }
        }

        return {
            code,
            data: res.data.data
        }
    }

    async post(url, data) {
        const res = await this.instance.post(url, data)

        console.log('post')

        const code = res.data.code

        if (code != 1) {
            return {
                code
            }
        }

        return {
            code,
            data: res.data.data
        }
    }
}

export default Api