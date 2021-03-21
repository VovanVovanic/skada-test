import axios from 'axios'

export const getPosts = (count, limit=4) => {
  return axios.get(`http://jsonplaceholder.typicode.com/posts?_start=${count}&_limit=${limit}`)
    .then((res)=>res.data)
}