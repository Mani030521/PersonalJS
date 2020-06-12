const axios = require('axios')

// const api1 = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY'
// const api2 = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
export const getEmpDetails = async (api) => {
    // Method 1: Parallel
    // const apis = [api, api2, api1]
    // const a = Promise.all(apis.map(api => axios.get(api)))
    // console.log(a)
    
    // const a = []
    // for(let i=0;i<apis.length;i++){
    //     const res = await axios.get(apis[i])
    //     a.push(res)
    // }
    // console.log(a)
    const response = await axios.get(api)
    return response.data && response.data.status === 'success' && response.data.data
}