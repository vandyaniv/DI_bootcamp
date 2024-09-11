const axios = require('axios')

const getInfo = async () => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(res.status);
    } catch (e) {
        console.log(e);
    }
}

getInfo()